import { Route } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';

export const appRoutes: Route[] = [
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: 'new',
        component: ServerEditComponent,
      },
    ],
  },
];
