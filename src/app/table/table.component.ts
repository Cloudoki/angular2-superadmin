import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users/user';
import { Account } from '../accounts/account';


@Component({
    selector: 'app-table',
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

  ngOnInit() {
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

  save() {
      if(this.newElement)
          this.elements.push(this.element);
      else
          this.elements[this.findSelectedElementIndex()] = this.element;

      this.element = null;
      this.displayDialog = false;
  }

  delete() {
      this.elements.splice(this.findSelectedElementIndex(), 1);
      this.element = null;
      this.displayDialog = false;
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
