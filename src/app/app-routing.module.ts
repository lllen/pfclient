import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PensionersComponent} from "./pensioners/pensioners.component";
import {PensionerComponent} from "./pensioner/pensioner.component";
import {PensionerAddFormComponent} from "./pensioner-add-form/pensioner-add-form.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {
    path: 'pensioner/add',
    component: PensionerAddFormComponent,
  },
  {
    path: 'pensioners',
    component: PensionersComponent,
  },
  {
    path: 'pensioner/:id',
    component: PensionerComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
