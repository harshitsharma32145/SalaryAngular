import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';

import { GetComponent } from './get/get.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './update/update.component';
import { SalaryslipComponent } from './salaryslip/salaryslip.component';

const routes: Routes = [
  {
    component:AddRecordComponent,
    path:'add'
  },
  
  {
    component:GetComponent,
    path:'get'
  },
  {
    component:NavbarComponent,
    path:'nav'
  },
  {
    component:UpdateComponent,
    path:'update'
  },
  {
    component:SalaryslipComponent,
    path:'salaryslip'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
