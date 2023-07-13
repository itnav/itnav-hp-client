import type * as SwupCore from 'swup';
import type { PageLoadOptions } from 'swup/dist/types/modules/loadPage';

declare module 'swup' {
  interface GotoOption extends Omit<PageLoadOptions, 'url'> {
    shouldReloadOnEqualUrl?: boolean;
  }

  export default class Swup {
    core: typeof SwupCore;
    goto: (url: string, options?: GotoOption) => void;
  }
}

export {};
