import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class TicketaddService {

  private _url: string = 'apidata/employeedata.json';
 // private _createurl: string = 'https://api.spotify.com/v1/search?q=s&type=artist';
  private _ticket_create_url: string = 'http://godigitell.in/cmmsoutsourse/ticket.php?action=add';
  private _ticket_edit_url: string = 'http://godigitell.in/cmmsoutsourse/ticket.php?action=finaledit';
  private _ticket_list_url: string = 'http://godigitell.in/cmmsoutsourse/ticket.php?action=list';
  private _ticket_resolved_url: string = 'http://godigitell.in/cmmsoutsourse/ticket.php?action=resolved';

  public spaceScreensone: Array<any>;


  constructor(private _http: Http) {
  }

  getEmployees() {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

  addTicket(food) {
    let body = JSON.stringify(food);
    return this._http.post(this._ticket_create_url, body).map((response: Response) => {
      return {
        /*
         status: "Ready",
         id: response.json().id,*/
      };
    });
  }

  newTickets() {

      this._http.get(this._ticket_list_url)
      .map(response => response.json())
      .subscribe(
        data => this.spaceScreensone = data,
        err => this.logError(err),
        () => console.log(this.spaceScreensone)
      );

    return this._http.get(this._ticket_list_url)
      .map(response => response.json());

  }
  resolvedTickets() {

    return this._http.get(this._ticket_resolved_url)
      .map(response => response.json());

  }

  editTickets(id: any) {
    let ticket_edit_url = 'http://godigitell.in/cmmsoutsourse/ticket.php?action=edit&id='+id;
    console.log(this._http.get(ticket_edit_url)
      .map(response => response.json()));
    return this._http.get(ticket_edit_url)
      .map(response => response.json());

  }

logError(err) {
  console.error('error in app' + err);
}


  editFinalTicket(finaledit) {
    let body = JSON.stringify(finaledit);
    return this._http.post(this._ticket_edit_url, body).map((response: Response) => {
      return {
        /*
         status: "Ready",
         id: response.json().id,*/
      };
    });


  }

  deleteTickets(id: any) {
  let ticket_delete_url = 'http://godigitell.in/cmmsoutsourse/ticket.php?action=delete&id='+id;
    return this._http.get(ticket_delete_url)
      .map(response => response.json());

  }

}

