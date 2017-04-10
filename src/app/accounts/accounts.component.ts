import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';
import { Account } from './account';
import * as _ from 'lodash';

@Component({
  selector: 'app-accounts',
  providers: [AccountsService],
  template: require('./accounts.component.html'),
  styles: [require('./accounts.component.scss').toString()]
})
export class AccountsComponent {
  private componentName:string = 'AccountsComponent';
  private accounts:any = [];
  private error:boolean = false;

  settings = [
      {field: 'id', header: 'ID'},
      {field: 'slug', header: 'Unique Name'},
      {field: 'name', header: 'Name'},
      {field: 'users', header: 'Users'},
      {field: 'active', header: 'Active'}
  ];

  constructor(_service:AccountsService) {

    _service.getData().subscribe(
      data => { this.accounts = data; },
      err => { this.error = true }
    );

  }

}
