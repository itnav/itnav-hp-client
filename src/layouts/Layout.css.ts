import { APP_PAGE_ANIMATION_CLASS } from '@/constants/app';
import styles, { css, style } from '@/styles';
import LayoutHeaderCss from './header/LayoutHeader.css';

export default css.instantiate(
  class {
    main = style([
      APP_PAGE_ANIMATION_CLASS,
      {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        minHeight: ['100vh', '100svh'],
        paddingTop: LayoutHeaderCss.VIEW_HEIGHT_MP,
        opacity: 1,
        transition: `opacity ${styles.animations.easing.constant.standardAccelerate} ${styles.animations.duration.constant.medium1}`,

        '@media': {
          [styles.mediaQuery.selector.pc]: {
            paddingTop: LayoutHeaderCss.VIEW_HEIGHT_PC,
          },
        },

        selectors: {
          [styles.swup.selector.animating]: {
            opacity: 0,
          },
        },
      },
    ]);
  },
);
