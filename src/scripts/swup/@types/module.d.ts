import type * as SwupCore from 'swup';
import type { HistoryAction } from 'swup/dist/types/modules/navigate';

declare module 'swup' {
  export default class Swup {
    core: typeof SwupCore;

    navigateHistoryRecord: (
      url: string,
      action?: HistoryAction,
      customData?: Record<string, unknown>,
    ) => void;
  }
}

export {};
