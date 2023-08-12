import Plugin from '@swup/plugin';
import type { Handler } from 'swup';
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
    this.before('content:replace', this.updateHead);
  }

  updateHead: Handler<'content:replace'> = (_, context) => {
    const swup = this.swup;

    const newDocument = new DOMParser().parseFromString(
      context.page.html.replace(this._bodyTagRegex, ''),
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
