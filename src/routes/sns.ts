import type { Route } from './route';

export default (<const>{
  facebook: {
    variant: 'external',
    href: 'https://www.facebook.com/itnavishinomaki',
    label: 'Facebook',
    ariaLabel: 'Facebookへ遷移する',
  },

  twitter: {
    variant: 'external',
    href: 'https://twitter.com/itnav_',
    label: 'Twitter',
    ariaLabel: 'Twitterへ遷移する',
  },
}) satisfies Record<string, Route>;
