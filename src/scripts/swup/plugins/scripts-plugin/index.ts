import Plugin from '@swup/plugin';

/** @see https://github.com/swup/scripts-plugin/blob/master/src/index.js */
export default class ScriptsPlugin extends Plugin {
  name = 'ScriptsPlugin';

  constructor() {
    super();
  }

  mount() {
    this.swup.on('contentReplaced', this.runScripts);
  }

  unmount() {
    this.swup.off('contentReplaced', this.runScripts);
  }

  runScripts = () => {
    const runScript = this.runScript;

    const scripts = document.body.querySelectorAll('script');
    const scriptLen = scripts.length;

    for (let i = 0; i < scriptLen; i++) {
      runScript(scripts[i]);
    }

    this.swup.log(`Executed ${scripts.length} scripts.`);
  };

  runScript = (originalElement: Element) => {
    const element = document.createElement('script');
    const setAttr = element.setAttribute.bind(element);

    const attrs = originalElement.attributes;
    const attrLen = attrs.length;

    for (let i = 0; i < attrLen; i++) {
      const attr = attrs[i];
      setAttr(attr.name, attr.value);
    }

    element.textContent = originalElement.textContent;
    setAttr('async', 'false');

    originalElement.replaceWith(element);
  };
}
