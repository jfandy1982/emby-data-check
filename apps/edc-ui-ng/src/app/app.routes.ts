import { Route } from '@angular/router';
import { ServersComponent } from './servers/servers.component';

export const appRoutes: Route[] = [
  {
    path: 'servers',
    component: ServersComponent,
  },
];
