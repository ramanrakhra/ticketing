import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TicketaddService } from './ticketadd.service';

@Component({
  selector: 'department-list',
  templateUrl: './edit-tickets.component.html',
  providers: [TicketaddService]
})
export class EditTicketsComponent implements OnInit {

  public selectedId;
  public ticketDetails;
  public allItems: any[];
  userForm: FormGroup;
  public  errorMessage : string;z

  constructor(private route: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder, public _ticketaddservice: TicketaddService){}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.selectedId = id;
    });
    this._ticketaddservice.editTickets(this.selectedId)
      .subscribe(results => {
        // set items to json response
        this.allItems = results;
        (<FormControl>this.userForm.controls['ticket_summary']).setValue(this.allItems[0].ticket_summary, { onlySelf: true });
        (<FormControl>this.userForm.controls['device']).setValue(this.allItems[0].device, { onlySelf: true });
        (<FormControl>this.userForm.controls['description']).setValue(this.allItems[0].description, { onlySelf: true });
        (<FormControl>this.userForm.controls['id']).setValue(this.allItems[0].id, { onlySelf: true });
          });
  this.userForm = this._formBuilder.group({
      id: [null, [Validators.minLength(0)]],
      ticket_summary: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      device: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    this._ticketaddservice.editFinalTicket(this.userForm.value).subscribe();
    this.errorMessage = 'User has been edited sucessfull';
    console.log(this.userForm.value);
  }

}
