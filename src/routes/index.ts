export * from './route.d';

import base from './base';
import type { Route } from './route';
import sns from './sns';

const routes = (<const>{
  ...base,
  ...sns,
}) satisfies Record<string, Route>;

export default routes;
