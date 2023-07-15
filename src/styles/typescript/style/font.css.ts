import { css } from '../core';
import type { Style } from '../core';

const _constant = css.instantiate(
  class {
    readonly murecho = 'murecho-font-family';
    readonly robotoMono = 'roboto-mono-font-family';
  },
);

export default (<const>{
  constant: _constant,
}) satisfies Style;
