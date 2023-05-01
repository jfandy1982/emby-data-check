import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { ServerCreateComponent } from './servers/server-create/server-create.component';

@NgModule({
  declarations: [AppComponent, ServersComponent, HeaderComponent, ServerCreateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false, initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
