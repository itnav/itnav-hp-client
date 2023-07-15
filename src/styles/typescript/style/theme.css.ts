import { style } from '@vanilla-extract/css';
import { css } from '../core';
import type { Style } from '../core';
import animations from './animations';

/** @see https://m3.material.io/theme-builder#/custom */
const _constant = css.instantiate(
  class {
    readonly schema = 'light';
    // readonly source = '#3e9f78';

    readonly primary = '#3e9f78';
    readonly onPrimary = '#ffffff';
    // readonly primaryContainer = '#89f8c6';
    // readonly onPrimaryContainer = '#002114';

    // readonly secondary = '#4d6357';
    // readonly onSecondary = '#ffffff';
    // readonly secondaryContainer = '#cfe9d9';
    // readonly onSecondaryContainer = '#0a1f16';

    // readonly readonly tertiary = '#3d6373';
    // readonly onTertiary = '#ffffff';
    // readonly tertiaryContainer = '#c1e9fb';
    // readonly onTertiaryContainer = '#001f29';

    readonly error = '#f44336';
    readonly onError = '#ffffff';
    // readonly errorContainer = '#ffdad6';
    // readonly onErrorContainer = '#410002';

    readonly background = '#fdfdfd';
    readonly onBackground = '#222222';

    readonly surface = '#fdfdfd';
    readonly onSurface = '#222222';

    readonly surfaceVariant = '#d0d0d0';
    readonly onSurfaceVariant = '#404040';

    // readonly outline = '#707973';
    // readonly outlineVariant = '#bfc9c1';

    // readonly inversePrimary = '#6cdbab';
    readonly inverseSurface = '#222222';
    readonly inverseOnSurface = '#fdfdfd';

    readonly shadow = '#000000';
    readonly surfaceTint = '#006c4c';
    readonly scrim = '#000000';
  },
);

const _class = css.instantiate(
  class {
    primaryTextColorTransitionOnHover = style({
      transition: `color ${animations.easing.constant.standard} ${animations.duration.constant.medium2}`,

      ':hover': {
        color: _constant.primary,
      },
    });
  },
);

export default (<const>{
  class: _class,
  constant: _constant,
}) satisfies Style;
