export function toggleFragmentUrl(name: string) {
  const { pathname, hash, search } = location;

  hash
    ? swup.core.updateHistoryRecord(`${pathname}${search}`)
    : swup.core.createHistoryRecord(`${pathname}${search}#${name}`);
}
