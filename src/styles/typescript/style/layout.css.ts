import { style } from '@vanilla-extract/css';
import { css } from '../core';
import type { Style } from '../core';
import mediaQueryStyle from './media-query.css';

const constant = css.instantiate(
  class {
    readonly pagePaddingTop = 120;
    readonly pagePaddingBottom = 128;

    readonly outerPaddingMpX = 24;
    readonly outerPaddingPcLeft = 64;
    readonly outerPaddingPcRight = this.outerPaddingPcLeft * 2;

    readonly innerPaddingMpX = 24;
    readonly innerPaddingPcX = 0;

    readonly sectionPaddingMpX = this.outerPaddingMpX + this.innerPaddingMpX;

    readonly sectionPaddingPcLeft =
      this.outerPaddingPcLeft + this.innerPaddingPcX;

    readonly sectionPaddingPcRight =
      this.outerPaddingPcRight + this.innerPaddingPcX;
  },
);

const source = css.instantiate(
  class {
    page = style({
      boxSizing: 'border-box',
      height: '100%',
    });

    pagePaddingY = style({
      boxSizing: 'border-box',
      paddingTop: constant.pagePaddingTop,
      paddingBottom: constant.pagePaddingBottom,

      '@media': {
        [mediaQueryStyle.selector.pc]: {
          paddingTop: 160,
          paddingBottom: 240,
        },
      },
    });

    outerPaddingX = style({
      boxSizing: 'border-box',
      paddingRight: constant.outerPaddingMpX,
      paddingLeft: constant.outerPaddingMpX,

      '@media': {
        [mediaQueryStyle.selector.pc]: {
          paddingRight: constant.outerPaddingPcRight,
          paddingLeft: constant.outerPaddingPcLeft,
        },
      },
    });

    innerPaddingX = style({
      boxSizing: 'border-box',
      paddingRight: constant.innerPaddingMpX,
      paddingLeft: constant.innerPaddingMpX,

      '@media': {
        [mediaQueryStyle.selector.pc]: {
          paddingRight: constant.innerPaddingPcX,
          paddingLeft: constant.innerPaddingPcX,
        },
      },
    });

    sectionPaddingX = style({
      boxSizing: 'border-box',
      paddingRight: constant.sectionPaddingMpX,
      paddingLeft: constant.sectionPaddingMpX,

      '@media': {
        [mediaQueryStyle.selector.pc]: {
          paddingRight: constant.sectionPaddingPcRight,
          paddingLeft: constant.sectionPaddingPcLeft,
        },
      },
    });
  },
);

export default (<const>{
  class: source,
  constant,
}) satisfies Style;
