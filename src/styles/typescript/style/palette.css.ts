import { css } from '../core';
import type { Style } from '../core';

const constant = css.instantiate(
  class {
    readonly facebook = '#3b5998';
    readonly twitter = '#1da1f2';
  },
);

export default (<const>{
  constant,
}) satisfies Style;
