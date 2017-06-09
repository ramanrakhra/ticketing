import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { PagerService } from './_services/index';


import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [ AppComponent, routingComponents ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
	BrowserAnimationsModule,
	MaterialModule,
    AlertModule.forRoot()
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

