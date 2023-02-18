import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MediaItemDetailComponent } from './media-items/media-item-detail/media-item-detail.component';
import { MediaItemListComponent } from './media-items/media-item-list/media-item-list.component';
import { MediaItemStartComponent } from './media-items/media-item-start/media-item-start.component';
import { MediaItemResolver } from './media-items/media-item.resolver';
import { MediaItemsComponent } from './media-items/media-items.component';
import { MediaItemsService } from './media-items/media-items.service';
import { MediaTypeListComponent } from './media-items/media-type-list/media-type-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerCreateComponent } from './servers/server-create/server-create.component';
import { ServerDetailComponent } from './servers/server-detail/server-detail.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServerListComponent } from './servers/server-list/server-list.component';
import { ServerStartComponent } from './servers/server-start/server-start.component';
import { ServerResolver } from './servers/server.resolver';
import { ServersComponent } from './servers/servers.component';
import { ServersService } from './servers/servers.service';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserStartComponent } from './users/user-start/user-start.component';
import { UserResolver } from './users/user.resolver';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserStartComponent,
    UserListComponent,
    UserDetailComponent,
    HeaderComponent,
    MediaItemsComponent,
    PageNotFoundComponent,
    ServersComponent,
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
  imports: [
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false, initialNavigation: 'enabledBlocking' }),
  ],
  providers: [MediaItemsService, MediaItemResolver, ServersService, ServerResolver, UsersService, UserResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
