import type { Route } from './route';

export default (<const>{
  top: {
    type: 'internal',
    href: '/',
    label: 'Top',
    ariaLabel: 'Topページへ遷移する',
  },
}) satisfies Record<string, Route>;
