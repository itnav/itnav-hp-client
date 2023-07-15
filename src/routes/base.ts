import type { Route } from './route';

export default (<const>{
  top: {
    variant: 'internal',
    href: '/',
    label: 'Top',
    ariaLabel: 'Topページへ遷移する',
  },

  about: {
    variant: 'internal',
    href: '/about',
    label: 'About',
    ariaLabel: 'Aboutページへ遷移する',
  },

  services: {
    variant: 'internal',
    href: '/services',
    label: 'Services',
    ariaLabel: 'Servicesページへ遷移する',
  },

  members: {
    variant: 'internal',
    href: '/members',
    label: 'Members',
    ariaLabel: 'Membersページへ遷移する',
  },

  blogs: {
    variant: 'internal',
    href: '/blogs',
    label: 'News&Reports',
    ariaLabel: 'News&Reportsページへ遷移する',
  },

  blog: {
    variant: 'internal',
    getHref: (id: string) => `/blogs/${id}`,
    label: 'News&Report',
    ariaLabel: 'News&Reportページへ遷移する',
  },

  contact: {
    variant: 'external',
    href: 'https://forms.gle/fB1XMDEJjVGGBGX76',
    label: 'Contact',
    ariaLabel: 'Contactページへ遷移する',
  },

  privacy: {
    variant: 'internal',
    href: '/privacy',
    label: 'Privacy Policy',
    ariaLabel: 'Privacyページへ遷移する',
  },

  terms: {
    variant: 'internal',
    href: '/terms',
    label: 'Terms',
    ariaLabel: 'Termsページへ遷移する',
  },

  recruit: {
    variant: 'external',
    href: 'https://recruit.itnav.co.jp',
    label: 'Recruit',
    ariaLabel: 'Recruitページへ遷移する',
  },

  recruitInfo: {
    variant: 'external',
    href: 'https://recruit.itnav.co.jp/information',
    label: 'Recruit Info',
    ariaLabel: 'Recruitページへ遷移する',
  },
}) satisfies Record<string, Route>;
