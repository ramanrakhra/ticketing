import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTicketsComponent } from './add-tickets.component';
import { ResolvedTicketsComponent } from './resolved-tickets.component';
import { NewTicketsComponent } from './new-tickets.component';
import { EditTicketsComponent } from './edit-tickets.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-tickets', pathMatch: 'full'},
/*  { path: '', redirectTo: '/', pathMatch: 'full' },*/
  { path: 'new-tickets', component: NewTicketsComponent },
  { path: 'resolved-tickets', component: ResolvedTicketsComponent},
  { path: 'add-tickets', component: AddTicketsComponent},
  { path: 'edit-tickets/:id', component: EditTicketsComponent},
  { path: '**', component: PageNotFoundComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const routingComponents = [PageNotFoundComponent, NewTicketsComponent, AddTicketsComponent,
  ResolvedTicketsComponent, EditTicketsComponent];

