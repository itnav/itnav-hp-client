/** @see https://github.com/swup/head-plugin/blob/master/src/updateLangAttribute.js */
export default function updateLangAttribute(
  currentHtml: HTMLElement,
  newHtml: HTMLElement,
) {
  return currentHtml.lang !== newHtml.lang
    ? (currentHtml.lang = newHtml.lang)
    : null;
}
