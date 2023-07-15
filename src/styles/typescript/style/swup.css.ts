import { css } from '../core';
import type { Style } from '../core';

const _selector = css.instantiate(
  class {
    readonly changing = '.is-changing &';
    readonly animating = '.is-animating &';
    readonly leaving = '.is-leaving &';
    readonly rendering = '.is-rendering &';
    readonly popstate = '.is-popstate &';
  },
);

export default (<const>{
  selector: _selector,
}) satisfies Style;
