import { globalStyle } from '@vanilla-extract/css';
import style from './typescript/style';

/** @see https://tailwindcss.com/docs/preflight */

globalStyle(':root', {
  fontWeight: 500,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  lineHeight: 1.6,
  color: style.theming.constant.onBackground,
  tabSize: 4,
  colorScheme: style.theming.constant.schema,
  backgroundColor: style.theming.constant.background,
  fontSynthesis: 'none',
  textSizeAdjust: '100%',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('body', {
  margin: 0,
  overflowY: 'scroll',
  lineHeight: 'inherit',
});

globalStyle('svg', {
  fill: 'currentColor',
});

globalStyle('a, button', {
  cursor: 'pointer',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  font: 'inherit',
  appearance: 'none',
  background: 'inherit',
  border: 'none',
});
