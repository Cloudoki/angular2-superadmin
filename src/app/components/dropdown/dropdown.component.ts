import { Application } from '../../common/application';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dropdown',
    template: require('./dropdown.component.html'),
    styles: [require('./dropdown.component.scss').toString()]
})
export class DropdownComponent {

  accounts: Array<any>;
  @Input() selected: any;

  ngOnInit() {

      // TODO: GET the accounts from DB 
      this.accounts = [
         {label:'Cloudoki', value: 'Cloudoki'},
         {label:'DonderLab', value:'DonderLab'},
         {label:'Savvy', value:'Savvy'}
     ]

  }

}
