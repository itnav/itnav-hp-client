import { style } from '@vanilla-extract/css';
import { css } from '../core';
import type { Style } from '../core';

const constant = css.instantiate(
  class {
    readonly breakpoint = 1024;

    readonly pc = this.breakpoint;
    readonly mp = this.pc - 1;
  },
);

const selector = css.instantiate(
  class {
    readonly pc = `(min-width: ${constant.pc}px)`;
    readonly mp = `(max-width: ${constant.mp}px)`;
  },
);

const source = css.instantiate(
  class {
    isMpOnly = style({
      '@media': {
        [selector.pc]: {
          display: 'none',
        },
      },
    });

    isPcOnly = style({
      '@media': {
        [selector.mp]: {
          display: 'none',
        },
      },
    });
  },
);

export default (<const>{
  class: source,
  constant,
  selector,
}) satisfies Style;
