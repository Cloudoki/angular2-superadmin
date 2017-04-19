import { Component } from '@angular/core';
import { Application } from './common/application';

require('css/manifest.js');

@Component({
  selector: 'my-app',
  providers: [Application],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss').toString()]
})
export class AppComponent {
  constructor(_application:Application) {}
}
