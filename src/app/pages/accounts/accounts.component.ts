import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../models/account';
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
      {field: 'id', header: 'ID', type: 'readonly'},
      {field: 'slug', header: 'Unique Name', type: 'input'},
      {field: 'name', header: 'Name', type: 'input'},
      {field: 'users', header: 'Users', type: 'input'},
      {field: 'active', header: 'Active', type: 'input'}
  ];

  constructor(_service:AccountsService) {

    _service.getData().subscribe(
      data => { this.accounts = data; },
      err => { this.error = true }
    );

  }

}
