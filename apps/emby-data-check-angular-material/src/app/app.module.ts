import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MediaItemsComponent } from './media-items/media-items.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserStartComponent } from './users/user-start/user-start.component';
import { ServerStartComponent } from './servers/server-start/server-start.component';
import { ServerListComponent } from './servers/server-list/server-list.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServerDetailComponent } from './servers/server-detail/server-detail.component';
import { ServerCreateComponent } from './servers/server-create/server-create.component';
import { MediaItemStartComponent } from './media-items/media-item-start/media-item-start.component';
import { MediaItemListComponent } from './media-items/media-item-list/media-item-list.component';
import { MediaItemDetailComponent } from './media-items/media-item-detail/media-item-detail.component';
import { MediaTypeListComponent } from './media-items/media-type-list/media-type-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MediaItemsComponent,
    PageNotFoundComponent,
    ServersComponent,
    UsersComponent,
    UserStartComponent,
    UserListComponent,
    UserDetailComponent,
    ServerStartComponent,
    ServerListComponent,
    ServerEditComponent,
    ServerDetailComponent,
    ServerCreateComponent,
    MediaItemStartComponent,
    MediaItemListComponent,
    MediaItemDetailComponent,
    MediaTypeListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
