import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactDetailComponent} from "./contact-detail/contact-detail.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactAddComponent} from "./contact-add/contact-add.component";

const routes: Routes = [
  {path: 'detail/:id', component: ContactDetailComponent},
  {path: '', component: ContactListComponent},
  {path: 'add', component: ContactAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
