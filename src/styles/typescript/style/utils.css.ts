import { style } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';
import { css } from '../core';
import type { Style } from '../core';

const mixin = css.instantiate(
  class {
    textShadow(fontSize: string, color: string): StyleRule {
      return {
        textShadow: [
          `${fontSize}px ${fontSize}px 0 ${color}`,
          `-${fontSize}px ${fontSize}px 0 ${color}`,
          `${fontSize}px -${fontSize}px 0 ${color}`,
          `-${fontSize}px -${fontSize}px 0 ${color}`,
        ],
      };
    }
  },
);

const source = css.instantiate(
  class {
    disabledScrollbar = style({
      '::-webkit-scrollbar': {
        display: 'none',
      },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
    });
  },
);

export default (<const>{
  class: source,
  mixin,
}) satisfies Style;
