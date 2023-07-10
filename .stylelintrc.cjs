/** @type {import('stylelint').Config} */
module.exports = {
  defaultSeverity: 'warning',

  plugins: [
    /** @npm https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties */
    'stylelint-declaration-block-no-ignored-properties',
  ],

  extends: [
    /**
     * @npm https://www.npmjs.com/package/stylelint-config-recess-order
     * @config https://github.com/stormwarning/stylelint-config-recess-order/blob/main/index.js
     */
    'stylelint-config-recess-order',

    /**
     * @npm https://www.npmjs.com/package/stylelint-config-html
     * @config https://github.com/ota-meshi/stylelint-config-html/blob/main/index.js
     */
    'stylelint-config-html',
  ],

  rules: {
    /** @docs https://stylelint.io/user-guide/rules */
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],

    /** @docs https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties#usage */
    'plugin/declaration-block-no-ignored-properties': true,
  },
};
