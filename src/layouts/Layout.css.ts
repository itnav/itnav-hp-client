import styles, { css, style } from '@/styles';

export default css.instantiate(
  class {
    main = style([
      {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        minHeight: ['100vh', '100svh'],
        opacity: 1,
        transition: `opacity ${styles.transitionDuration.constant.medium1} ${styles.transitionEasing.constant.standardAccelerate}`,

        selectors: {
          [styles.swup.selector.animating]: {
            opacity: 0,
          },
        },
      },
    ]);
  },
);
