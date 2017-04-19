import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-team',
  providers: [TeamService],
  template: require('./team.component.html'),
  styles: [require('./team.component.scss').toString()]
})
export class TeamComponent {
  private componentName:string = 'TeamComponent';
  private team:any = [];
  private error:boolean = false;


  constructor(_service:TeamService) {

    _service.getData().subscribe(
      data => { this.team = data; },
      err => { this.error = true }
    );

  }

}
