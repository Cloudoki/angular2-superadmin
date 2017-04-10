import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { UsersService } from '../users/users.service';

@Component({
    selector: 'app-dashboard',
    providers: [DashboardService, UsersService],
    template: require('./dashboard.component.html'),
    styles: [require('./dashboard.component.scss').toString()]
})
export class DashboardComponent {
  private componentName:string = 'DashboardComponent';
  private panels:any = [];
  private users:any = [];
  private error:boolean = false;

  constructor(_service:DashboardService, _userservice: UsersService) {

    _service.getData().subscribe(
      data => { this.panels = data; },
      err => { this.error = true }
    );

    _userservice.getData().subscribe(
      data => { this.users = data; },
      err => { this.error = true }
    );

  }


}
