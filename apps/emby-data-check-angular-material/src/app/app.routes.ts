import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaItemDetailComponent } from './media-items/media-item-detail/media-item-detail.component';
import { MediaItemListComponent } from './media-items/media-item-list/media-item-list.component';
import { MediaItemStartComponent } from './media-items/media-item-start/media-item-start.component';
import { MediaItemResolver } from './media-items/media-item.resolver';
import { MediaItemsComponent } from './media-items/media-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerCreateComponent } from './servers/server-create/server-create.component';
import { ServerDetailComponent } from './servers/server-detail/server-detail.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServerStartComponent } from './servers/server-start/server-start.component';
import { ServerResolver } from './servers/server.resolver';
import { ServersComponent } from './servers/servers.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserStartComponent } from './users/user-start/user-start.component';
import { UserResolver } from './users/user.resolver';
import { UsersComponent } from './users/users.component';

export const appRoutes: Route[] = [
  {
    path: 'mediaitems',
    component: MediaItemsComponent,
    children: [
      {
        path: '',
        component: MediaItemStartComponent,
        pathMatch: 'full',
      },
      {
        path: 'type/:mediatypeid',
        component: MediaItemListComponent,
      },
      {
        path: ':mediaitemid',
        component: MediaItemDetailComponent,
        resolve: {
          mediaitem: MediaItemResolver,
        },
      },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: '',
        component: ServerStartComponent,
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: ServerCreateComponent,
      },
      {
        path: ':serverid',
        component: ServerDetailComponent,
        resolve: {
          server: ServerResolver,
        },
      },
      {
        path: ':serverid/edit',
        component: ServerEditComponent,
      },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserStartComponent,
        pathMatch: 'full',
      },
      {
        path: ':userid',
        component: UserDetailComponent,
        resolve: {
          user: UserResolver,
        },
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
