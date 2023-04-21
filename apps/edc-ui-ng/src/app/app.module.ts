import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { ServerCreateComponent } from './servers/server-create/server-create.component';

@NgModule({
  declarations: [AppComponent, ServersComponent, HeaderComponent, ServerCreateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false, initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
