import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './auth/login/login.component';
import { MenuComponent }  from './menu/menu.component';
import { UsersComponent }  from './users/users.component';
import { DashboardComponent }  from './dashboard/dashboard.component';

import { AUTH_PROVIDERS } from './auth/login/login.routes';

import { AppRoutingModule } from './app.routes'

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    // AUTH_PROVIDERS,
    HttpModule,
    FormsModule
  ],
  declarations: [ AppComponent, LoginComponent, MenuComponent, UsersComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AUTH_PROVIDERS ]
})
export class AppModule { }
