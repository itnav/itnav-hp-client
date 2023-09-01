import type { HistoryAction } from 'swup/dist/types/modules/navigate';

export function addUrlFragment(name: string, historyAction?: HistoryAction) {
  const { pathname, search } = location;
  swup.navigateHistoryRecord(`${pathname}${search}#${name}`, historyAction);
}

export function removeUrlFragment(historyAction?: HistoryAction) {
  const { pathname, search } = location;
  const url = `${pathname}${search}`;
  swup.navigateHistoryRecord(url, historyAction);
}

export function toggleUrlFragment(name: string, historyAction?: HistoryAction) {
  location.hash === `#${name}`
    ? removeUrlFragment(historyAction)
    : addUrlFragment(name, historyAction);
}
