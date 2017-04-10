import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './auth/login/login.component';
import { MenuComponent }  from './menu/menu.component';
import { UsersComponent }  from './users/users.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { TableComponent }  from './table/table.component';
import { AccountsComponent }  from './accounts/accounts.component';
import { TeamComponent }  from './team/team.component';

import { AUTH_PROVIDERS } from './auth/login/login.routes';

import { AppRoutingModule } from './app.routes'

// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule,SharedModule, DialogModule, ButtonModule, InputTextModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    // AUTH_PROVIDERS,
    HttpModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule
    // Ng2SmartTableModule
  ],
  declarations: [ AppComponent, LoginComponent, MenuComponent, UsersComponent, DashboardComponent, TableComponent, AccountsComponent, TeamComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AUTH_PROVIDERS ]
})
export class AppModule { }
