export interface StaticRoute {
  variant: 'internal' | 'external';
  href: string;
  label: string;
  ariaLabel: string;
}

export interface DynamicRoute extends Omit<StaticRoute, 'href'> {
  getHref: (...params: any) => string;
}

export type Route = StaticRoute | DynamicRoute;
