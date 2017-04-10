import { Application } from '../common/application';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  template: require('./menu.component.html'),
  styles: [require('./menu.component.scss').toString()]
})
export class MenuComponent {
  componentName = 'MenuComponent';
  menus: Array<any>;
  active:string = '';

  constructor(private router:Router, private _application:Application) {

    this.menus = [
      { name: 'users', target: 'users' },
      { name: 'accounts', target: 'accounts' },
      { name: 'manage', target: 'manage' }
    ];
  }

  ngOnInit() {
    // remove hash from router name
    this.active = this.router.url.replace(/[^A-Z0-9]+/ig, "");
    console.log("active", this.active)
  }

  ngOnDestroy() {}

  menuSelect(name:string) {}

  logout() {
    this._application.session.logout();
  }

}
