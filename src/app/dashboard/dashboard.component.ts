import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { UsersService } from '../users/users.service';
import { MenuComponent } from '../menu/menu.component';
// import { User } from '../users/user';


@Component({
    selector: 'app-dashboard',
    providers: [DashboardService, UsersService],
    // directives: [MenuComponent],
    template: require('./dashboard.component.html'),
    styles: [require('./dashboard.component.scss').toString()]
})
export class DashboardComponent {
  private componentName:string = 'DashboardComponent';
  private panels:any = [];
  private users:any = [];
  private error:boolean = false;


  //  *******************************************************************************

  // displayDialog: boolean;
  // user: User = new User();
  // // car: Car = new PrimeCar();
  // selectedUser: User;
  // newUser: boolean;
  // // cars: Car[];

  // settings = [
  //     {field: 'id', header: 'ID'},
  //     {field: 'name', header: 'Name'},
  //     {field: 'email', header: 'Email'},
  //     {field: 'phone', header: 'Phone'}
  // ];

  // showDialogToAdd() {
  //   this.newUser = true;
  //   this.user = new User();
  //   this.displayDialog = true;
  // }
  //
  // save() {
  //     if(this.newUser)
  //         this.users.push(this.user);
  //     else
  //         this.users[this.findSelectedUserIndex()] = this.user;
  //
  //     this.user = null;
  //     this.displayDialog = false;
  // }
  //
  // delete() {
  //     this.users.splice(this.findSelectedUserIndex(), 1);
  //     this.user = null;
  //     this.displayDialog = false;
  // }
  //
  // onRowSelect(event) {
  //     this.newUser = false;
  //     this.user = this.cloneUser(event.data);
  //     this.displayDialog = true;
  // }
  //
  // cloneUser(u: User): User {
  //     let user = new User();
  //     for(let prop in u) {
  //         user[prop] = u[prop];
  //     }
  //     return user;
  // }
  //
  // findSelectedUserIndex(): number {
  //     return this.users.indexOf(this.selectedUser);
  // }

  //  *******************************************************************************


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
