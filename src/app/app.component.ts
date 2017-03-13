import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { Application } from './common/application';

require('css/manifest.js');

@Component({
  selector: 'my-app',
  // directives: [ROUTER_DIRECTIVES],
  providers: [Application],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss').toString()]
})
export class AppComponent {
  constructor(_application:Application) {}
}
