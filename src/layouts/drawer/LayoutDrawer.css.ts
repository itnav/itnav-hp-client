import styles, { css, style } from '@/styles';
import type { StyleRule } from '@/styles';

export default css.instantiate(
  class {
    drawer = style([
      styles.font.constant.robotoMono,
      styles.layout.class.sectionPaddingX,
      styles.utils.class.disabledScrollbar,
      {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 16,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        minHeight: '100%',
        maxHeight: '100%',
        paddingTop: '96px',
        paddingBottom: '56px',
        overflowY: 'auto',
        color: styles.theme.constant.inverseOnSurface,
        pointerEvents: 'none',
        backgroundColor: styles.theme.constant.inverseSurface,
        opacity: 0,
        transition: `opacity ${styles.animations.easing.constant.emphasized} ${styles.animations.duration.constant.short3}`,

        '@media': {
          [styles.mediaQuery.selector.pc]: {
            paddingTop: '104px',
            paddingBottom: '64px',
          },
        },
      },
    ]);

    drawerWhenOpen = style({
      pointerEvents: 'auto',
      opacity: 1,
    });

    nav = style([
      styles.layout.class.sectionPaddingX,
      {
        display: 'flex',
        flexWrap: 'wrap-reverse',
        height: '100%',
        padding: 0,
        marginBottom: '24px',

        '@media': {
          [styles.mediaQuery.selector.pc]: {
            flexGrow: 1,
          },
        },
      },
    ]);

    leftLinks = style({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: '24px',

      '@media': {
        [styles.mediaQuery.selector.pc]: {
          alignItems: 'stretch',
          width: 'auto',
          marginRight: '24px',
        },
      },
    });

    rightLinks = style({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'space-between',
      padding: 0,
      margin: 0,
      textDecoration: 'none',
      textOverflow: 'ellipsis',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      listStyle: 'none',

      '@media': {
        [styles.mediaQuery.selector.pc]: {
          alignItems: 'end',
        },
      },
    });

    rightLink = style([
      styles.components.overlay.class.afterPseudoElement,
      styles.theme.class.primaryTextColorTransitionOnHover,
      {
        position: 'relative',
        marginBottom: '24px',
        fontSize: '32px',
        fontWeight: 'bold',
        letterSpacing: '2.4px',

        '@media': {
          [styles.mediaQuery.selector.pc]: {
            marginBottom: 0,
            fontSize: '72px',

            ':after': {
              animationDirection: 'reverse',
            },
          },
        },

        selectors: {
          [`${this.drawerWhenOpen} &`]: {
            ...styles.animations.waveAcross.mixin.withHiddenText(),
          },

          [`${this.drawerWhenOpen} &:after`]: {
            ...styles.animations.waveAcross.mixin.leftToRight(),
            backgroundColor: styles.theme.constant.inverseOnSurface,
          },

          ...(() => {
            const selectors: StyleRule['selectors'] = {};

            for (let i = 0; i < 5; i++) {
              const selector = `&:nth-child(${i + 1})`;
              selectors[`${selector}, ${selector}:after`] = {
                animationDelay: `${80 * i}ms`,
              };
            }

            return selectors;
          })(),
        },
      },
    ]);

    bottomLink = style([
      styles.theme.class.primaryTextColorTransitionOnHover,
      {
        flexShrink: 0,
        alignSelf: 'flex-start',
        color: styles.theme.constant.surfaceVariant,
        textDecoration: 'none',
      },
    ]);
  },
);
