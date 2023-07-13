/** @see https://github.com/swup/head-plugin/blob/master/src/mergeHeadContents.js */
export default function mergeHeadContents(
  currentHead: Element,
  newHead: Element,
) {
  const currentTags = Array.from(currentHead.children);
  const newChildren = Array.from(newHead.children);

  const { addTags, removeTags } = getTagsToUpdate(currentTags, newChildren);

  // Remove tags in reverse to keep indexes, keep persistent elements
  const removeTagsLength = removeTags.length;
  for (let i = removeTagsLength - 1; i >= 0; i--) {
    currentHead.removeChild(removeTags[i].el);
  }

  // Insert tag *after* previous version of itself to preserve JS variable scope and CSS cascade
  const addTagsLength = addTags.length;
  for (let i = 0; i < addTags.length; i++) {
    const { el, index } = addTags[i];
    currentHead.insertBefore(el, currentHead.children[index + 1] || null);
  }

  return {
    removedLength: removeTagsLength,
    addedLength: addTagsLength,
  };
}

function getTagsToUpdate(currentEls: Element[], newEls: Element[]) {
  const removeTags: { el: Element }[] = [];

  const addTags: { el: Element; index: number }[] = [];
  let skippedAddingTagCount = 0;

  const maxLength = Math.max(currentEls.length, newEls.length);

  for (let i = 0; i < maxLength; i++) {
    const currentEl = currentEls[i];
    const newEl = newEls[i];

    if (
      $env.NODE_ENV === 'production' &&
      currentEl &&
      canUpdateTag(currentEl)
    ) {
      const isAmongNew = newEls.some(compareTagsFactory(currentEl));
      if (!isAmongNew) removeTags.push({ el: currentEl });
    }

    if (newEl) {
      if (canUpdateTag(newEl)) {
        const isAmongCurrent = currentEls.some(compareTagsFactory(newEl));
        if (!isAmongCurrent) {
          addTags.push({ el: newEl, index: i - skippedAddingTagCount });
        }

        // アップデートの対象とならないタグだった場合は処理をスキップし、その数をカウントする
      } else {
        skippedAddingTagCount++;
      }
    }
  }

  return { removeTags, addTags };
}

function canUpdateTag(el: Element) {
  // <title> は swup が管理するので除外
  return el.localName !== 'title';
}

function compareTagsFactory(
  mainTag: Element,
): (comparedTag: Element) => boolean {
  if (mainTag.localName === 'link') {
    return (comparedTag) =>
      (mainTag as HTMLAnchorElement).href === (comparedTag as any).href;
  }

  if (mainTag.localName === 'script') {
    return (comparedTag) =>
      (mainTag as HTMLScriptElement).src === (comparedTag as any).src;
  }

  return (comparedTag) => mainTag.outerHTML === comparedTag.outerHTML;
}
