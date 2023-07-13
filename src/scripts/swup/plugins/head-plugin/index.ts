import Plugin from '@swup/plugin';
import mergeHeadContents from './merge-head-contents';
import updateLangAttribute from './update-lang-attribute';

/** @see https://github.com/swup/head-plugin/blob/master/src/index.js */
export default class HeadPlugin extends Plugin {
  name = 'HeadPlugin';

  private _bodyTagRegex = /<body[\s\S]*?<\/body>/;

  constructor() {
    super();
  }

  mount() {
    this.swup.on('willReplaceContent', this.updateHead);
  }

  unmount() {
    this.swup.off('willReplaceContent', this.updateHead);
  }

  updateHead = () => {
    const swup = this.swup;

    // parse の時間を短縮するために body タグの中身を削除
    const newPageHtml = swup.cache
      .getCurrentPage()
      .originalContent.replace(this._bodyTagRegex, '');

    const newDocument = new DOMParser().parseFromString(
      newPageHtml,
      'text/html',
    );

    const mergedHeadResults = mergeHeadContents(
      document.head,
      newDocument.head,
    );

    const lang = updateLangAttribute(
      document.documentElement,
      newDocument.documentElement,
    );

    swup.log(
      `Removed ${mergedHeadResults.removedLength} / added ${mergedHeadResults.addedLength} tags in head`,
    );

    if (lang) swup.log(`Updated lang attribute: ${lang}`);
  };
}
