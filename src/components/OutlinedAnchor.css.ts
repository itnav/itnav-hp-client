import styles, { css, style } from '@/styles';

export default css.instantiate(
  class {
    container = style([
      styles.components.overlay.class.afterPseudoElement,
      {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 32px',
        marginBottom: '16px',
        overflow: 'hidden',
        fontSize: '14px',
        fontWeight: 'bold',
        textDecoration: 'none',
        textTransform: 'uppercase',
        letterSpacing: '1.2px',
        border: '2px solid currentColor',

        '@media': {
          [styles.mediaQuery.selector.pc]: {
            padding: '40px 104px',
            fontSize: '16px',
          },
        },

        selectors: {
          '&:after': {
            mixBlendMode: 'difference',
          },

          '&:hover:after': {
            ...styles.animations.waveAcross.mixin.leftToRight(),
            animationDuration: styles.animations.duration.constant.long5,
          },
        },
      },
    ]);

    suffix = style({
      marginLeft: 'auto',

      '@media': {
        [styles.mediaQuery.selector.pc]: {
          marginLeft: '12px',
        },
      },
    });

    suffixInternalIcon = style({
      width: '20px',
      height: '20px',

      '@media': {
        [styles.mediaQuery.selector.pc]: {
          width: '28px',
          height: '28px',
        },
      },
    });

    suffixExternalIcon = style({
      width: '18px',
      height: '18px',
      marginTop: '2px',

      '@media': {
        [styles.mediaQuery.selector.pc]: {
          width: '26px',
          height: '26px',
          marginTop: '3px',
        },
      },
    });
  },
);
