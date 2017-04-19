import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Account } from '../../models/account';
import { TableService } from '../../services/table.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {SelectItem} from 'primeng/primeng';

@Component({
    selector: 'app-table',
    providers: [TableService],
    template: require('./table.component.html'),
    styles: [require('./table.component.scss').toString()]
})

export class TableComponent implements OnInit {

  private componentName:string = 'TableComponent';
  public elementClass: any;

  @Input() elements: any;
  @Input() type: string;
  @Input() settings: any = {};

  displayDialog: boolean;
  element : any = {};
  selectedElement: any;
  newElement: boolean;
  modalHeader: string;


  constructor (private tableService: TableService) {}

  ngOnInit() {

      this.modalHeader = this.type + ' Details'

      switch(this.type) {
        case 'User':
            this.elementClass = User;
            break;
        case 'Account':
            this.elementClass = Account;
            break;
      }
  }

  showDialogToAdd() {
    this.newElement = true;
    this.element = new this.elementClass();
    this.displayDialog = true;
  }

  save(item) {
      if(this.newElement){
        this.tableService.createRow(this.element).subscribe(
          data => {
            this.elements.push(data);
            return true;
          },
          error => {
            console.error("Error creating row!");
            return Observable.throw(error);
          }
        );
      }
      else{
        this.elements[this.findSelectedElementIndex()] = this.element;
        this.tableService.updateRow(item).subscribe(
          data => {
            console.log("update", data)
            return true;
          },
          error => {
            console.error("Error editing row!");
            return Observable.throw(error);
          }
        );
      }

      this.element = null;
      this.displayDialog = false;
  }

  delete(id) {
      this.elements.splice(this.findSelectedElementIndex(), 1);
      this.element = null;
      this.displayDialog = false;

      this.tableService.deleteRow(id).subscribe(
        data => {
          console.log("delete", data)
          return true;
        },
        error => {
          console.error("Error deleting row!");
          return Observable.throw(error);
        }
      );
  }

  onRowSelect(event: any) {
      this.newElement = false;
      this.element = this.cloneElement(event.data);

      console.log(this.element)
      this.displayDialog = true;

  }

  cloneElement(u: Object): Object {
      let element = new this.elementClass();
      for(let prop in u) {
          element[prop] = u[prop];
      }
      return element;
  }

  findSelectedElementIndex(): number {
      return this.elements.indexOf(this.selectedElement);
  }


}
