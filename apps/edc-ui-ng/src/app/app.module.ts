import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { ServerCardComponent } from './servers/server-card/server-card.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';

@NgModule({
  declarations: [AppComponent, ServersComponent, HeaderComponent, ServerCardComponent, ServerEditComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false, initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
