import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()

export class TableService {

    result: Object;
    error: Object;

    url: string = 'http://dummydata.cloudoki.com/superadmin/';

    constructor(private http: Http) {

    }

    getData() {
      return this.http.get(this.url)
        .map(this.extractData)
        .catch(this.handleError);
    }

    deleteRow(userId: number) {
      return this.http.delete(this.url + userId)
                      .map(this.extractData)
                      .catch(this.handleError)
    }

    createRow(user : Object) {
      return this.http.post(this.url, user)
                      .map(this.extractData)
                      .catch(this.handleError)
    }

    updateRow(user : Object) {
      return this.http.put(this.url, user)
                      .map(this.extractData)
                      .catch(this.handleError)
    }

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
    }

    private handleError(error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }
}
