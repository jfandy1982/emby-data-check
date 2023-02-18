import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { MediaItemResolver } from './media-items/media-item.resolver';
import { MediaItemsService } from './media-items/media-items.service';
import { ServerResolver } from './servers/server.resolver';
import { ServersService } from './servers/servers.service';
import { UserResolver } from './users/user.resolver';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, { enableTracing: false, initialNavigation: 'enabledBlocking' })],
  providers: [MediaItemsService, MediaItemResolver, ServersService, ServerResolver, UsersService, UserResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
