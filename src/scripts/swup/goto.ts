import {
  classify,
  createHistoryRecord,
  getCurrentUrl,
  updateHistoryRecord,
} from 'swup';
import type { PageRecord } from 'swup/dist/types/modules/Cache';

/**
 * 指定した URL に遷移する。
 *
 * @see https://github.com/swup/swup/blob/master/src/modules/loadPage.ts#L31
 */
swup.goto = function (this, url, options = {}) {
  const beforeUpdatePageUrl = getCurrentUrl();

  if (!options.shouldReloadOnEqualUrl && beforeUpdatePageUrl === url) return;

  // trigger "transitionStart" event
  const event = options.event;
  this.triggerEvent('transitionStart', event);

  // set transition object
  const customTransition = options.customTransition;
  this.updateTransition(beforeUpdatePageUrl, url, customTransition);
  if (customTransition) {
    document.documentElement.classList.add(`to-${classify(customTransition)}`);
  }

  const skipTransition = this.shouldSkipTransition({ url, event });
  const renderPageOptions = { event, skipTransition };

  // start/skip animation
  const animationPromises = this.leavePage(renderPageOptions);

  // create history record if this is not a popstate call (with or without anchor)
  if (!(event instanceof PopStateEvent)) {
    const path = url + (this.scrollToElement || '');
    options.history === 'replace'
      ? updateHistoryRecord(path)
      : createHistoryRecord(path);
  }

  this.currentPageUrl = getCurrentUrl();

  const onSuccessFetchPage = (pageDataset: (PageRecord | void)[]) =>
    this.renderPage(pageDataset[0]!, renderPageOptions);

  // when everything is ready, render the page
  Promise.all([this.fetchPage({ url }), ...animationPromises])
    .then(onSuccessFetchPage)
    .catch(onErrorFetchPage);
};

/** ページ取得とアニメーション取得でエラーを吐いた時の処理 */
function onErrorFetchPage(error: any) {
  // Return early if errorUrl is not defined (probably aborted preload request)
  if (error === void 0) return;

  // Rewrite `skipPopStateHandling` to redirect manually when `history.go` is processed
  swup.options.skipPopStateHandling = () => {
    window.location = error;
    return true;
  };

  // Go back to the actual page we're still at
  history.go(-1);
}

export {};
