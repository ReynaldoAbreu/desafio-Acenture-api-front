import { CompanyFormComponent } from './company-form/company-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  { path: 'company-form', component: CompanyFormComponent},
  { path: 'company-form/:id', component: CompanyFormComponent},
  {path: 'company-list', component: CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
