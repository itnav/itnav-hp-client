export * from './route.d';

import base from './base';
import type { Route } from './route';

const routes = (<const>{
  ...base,
}) satisfies Record<string, Route>;

export default routes;
