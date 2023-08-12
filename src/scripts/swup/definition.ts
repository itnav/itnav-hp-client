import SwupPreloadPlugin from '@swup/preload-plugin';
import Swup from 'swup';
import * as SwupCore from 'swup';
import {
  APP_ID_SELECTOR,
  APP_PAGE_ANIMATION_CLASS_SELECTOR,
} from '@/constants/app';
import SwupHeadPlugin from './plugins/head-plugin';
import SwupScriptPlugin from './plugins/scripts-plugin';

const swup = new Swup({
  containers: [APP_ID_SELECTOR],
  animationSelector: APP_PAGE_ANIMATION_CLASS_SELECTOR,
  animateHistoryBrowsing: true,
  plugins: [
    // ページ遷移時に Head タグを更新するためのプラグイン
    new SwupHeadPlugin(),

    // ページ遷移時に再ハイドレートするためのプラグイン
    new SwupScriptPlugin(),

    // 内部リンクホバー時などにプリロードするためのプラグイン
    new SwupPreloadPlugin(),
  ],
});

swup.navigateHistoryRecord = function (url, historyAction, customData) {
  historyAction === 'replace'
    ? this.core.updateHistoryRecord(url, customData)
    : this.core.createHistoryRecord(url, customData);
};

Swup.prototype.core = SwupCore;

window.swup = swup;

export {};
