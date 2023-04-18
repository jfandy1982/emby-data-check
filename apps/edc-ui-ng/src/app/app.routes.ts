import { Route } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerCreateComponent } from './servers/server-create/server-create.component';

export const appRoutes: Route[] = [
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: 'new',
        component: ServerCreateComponent,
      },
    ],
  },
];
