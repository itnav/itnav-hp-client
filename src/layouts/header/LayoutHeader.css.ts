import styles, { css, keyframes, style } from '@/styles';

export default css.instantiate(
  class {
    title = style({
      fontSize: '12px',
      fontWeight: 'bold',
    });

    header = style({
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 24,
      width: '100%',
      pointerEvents: 'none',
      filter: 'invert(100%)',
      mixBlendMode: 'exclusion',

      '@media': {
        [styles.mediaQuery.selector.pc]: {
          height: '100%',
          padding: 0,
        },
      },
    });

    view = style([
      styles.layout.class.outerPaddingX,
      {
        position: 'relative',
        zIndex: 1,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '80px',
        paddingRight: '8px',

        '@media': {
          [styles.mediaQuery.selector.pc]: {
            height: '88px',
            paddingRight: 0,
          },
        },
      },
    ]);

    itnavLogoAnchor = style({
      display: 'inline-flex',
      pointerEvents: 'auto',
    });

    itnavLogo = style({
      width: '100%',
      height: '32px',

      '@media': {
        [styles.mediaQuery.selector.pc]: {
          height: '40px',
        },
      },
    });

    private _rightNavSlideKeyframes = keyframes({
      from: { transform: 'translateX(100%)' },
      to: { transform: 'translateX(0)' },
    });

    private _rightSlideNavAnimation = style({
      '@media': {
        [styles.mediaQuery.selector.pc]: {
          animation: `${this._rightNavSlideKeyframes} ${styles.animations.easing.constant.standard} ${styles.animations.duration.constant.long1} `,
        },
      },
    });

    rightActions = style([
      this._rightSlideNavAnimation,
      {
        display: 'flex',
        justifyContent: 'center',
        width: styles.layout.constant.outerPaddingPcLeft,
      },
    ]);

    rightNav = style([
      this._rightSlideNavAnimation,
      {
        position: 'fixed',
        top: 0,
        right: 0,
        boxSizing: 'content-box',
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: styles.layout.constant.outerPaddingPcLeft,
        height: '100%',
        pointerEvents: 'auto',
        borderLeft: `2px solid ${styles.theme.constant.inverseSurface}`,

        '@media': {
          [styles.mediaQuery.selector.pc]: {
            display: 'flex',
          },
        },
      },
    ]);

    menuIcon = style({
      position: 'relative',
      display: 'block',
      width: '40px',
      height: '40px',
      pointerEvents: 'auto',
    });

    menuIconWhenOpen = style({});

    menuIconLine = style({
      position: 'absolute',
      right: 0,
      left: 0,
      width: '24px',
      height: '2px',
      marginRight: 'auto',
      marginLeft: 'auto',
      backgroundColor: styles.theme.constant.inverseSurface,
      transitionTimingFunction: styles.animations.easing.constant.legacy,
      transitionDuration: styles.animations.duration.constant.short3,
      transitionProperty: 'transform, opacity, background-color',

      selectors: {
        [`${this.menuIcon}:hover &`]: {
          backgroundColor: styles.theme.constant.primary,
        },

        ...(() => {
          const whenOpen = this.menuIconWhenOpen;

          return {
            [`&:nth-child(1), &:nth-child(2)`]: {
              transform: 'translateY(7.2px)',
            },
            [`&:nth-child(4), &:nth-child(5)`]: {
              transform: 'translateY(-7.2px)',
            },

            [`${whenOpen} &:nth-child(1), ${whenOpen} &:nth-child(4)`]: {
              transform: 'rotate(45deg)',
            },
            [`${whenOpen} &:nth-child(2), ${whenOpen} &:nth-child(5)`]: {
              transform: 'rotate(-45deg)',
            },
            [`${whenOpen} &:nth-child(3)`]: {
              opacity: 0,
            },
          };
        })(),
      },
    });

    externalLink = style({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      marginBottom: '32px',
    });

    private _externalLinkIcon = style({
      width: '24px',
      height: '24px',
      fill: styles.theme.constant.inverseSurface,
      transition: `fill ${styles.animations.easing.constant.legacy} ${styles.animations.duration.constant.short3}`,
    });

    externalLinkFacebookIcon = style([
      this._externalLinkIcon,
      {
        selectors: {
          [`${this.externalLink}:hover &`]: {
            fill: styles.palette.constant.facebook,
          },
        },
      },
    ]);

    externalLinkTwitterIcon = style([
      this._externalLinkIcon,
      {
        selectors: {
          [`${this.externalLink}:hover &`]: {
            fill: styles.palette.constant.twitter,
          },
        },
      },
    ]);
  },
);
