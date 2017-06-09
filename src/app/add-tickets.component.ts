import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TicketaddService } from './ticketadd.service';
@Component({
  selector: 'add-tickets',
  templateUrl: './add-tickets.component.html',
  providers: [TicketaddService]
})
export class AddTicketsComponent implements OnInit {
  userForm: FormGroup;
  public  errorMessage: string;
  constructor(public _ticketaddservice: TicketaddService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      ticket_summary: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      device: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    })
  }
  onSubmit() {
    this._ticketaddservice.addTicket(this.userForm.value).subscribe();
    this.errorMessage = 'User has been created sucessfully';
    console.log(this.userForm.value);
  }




}
