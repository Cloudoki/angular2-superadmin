import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './auth/login/login.component';
import { MenuComponent }  from './components/menu/menu.component';
import { UsersComponent }  from './pages/users/users.component';
import { DashboardComponent }  from './pages/dashboard/dashboard.component';
import { TableComponent }  from './components/table/table.component';
import { AccountsComponent }  from './pages/accounts/accounts.component';
import { TeamComponent }  from './pages/team/team.component';
import { DropdownComponent }  from './components/dropdown/dropdown.component';

import { AUTH_PROVIDERS } from './auth/login/login.routes';

import { AppRoutingModule } from './app.routes'

import { DataTableModule,SharedModule, DialogModule, ButtonModule, InputTextModule, DropdownModule } from 'primeng/primeng';
import {SelectModule} from 'ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    DropdownModule,
    SelectModule
  ],
  declarations: [ AppComponent, LoginComponent, MenuComponent, UsersComponent, DashboardComponent, TableComponent, AccountsComponent, TeamComponent, DropdownComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AUTH_PROVIDERS ]
})
export class AppModule { }
