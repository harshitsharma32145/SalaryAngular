import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRecordComponent } from './add-record/add-record.component';
import { GetComponent } from './get/get.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalaryslipComponent } from './salaryslip/salaryslip.component';
import { UpdateComponent } from './update/update.component';

import { ReactiveFormsModule } from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from  '@angular/material/input'
import {MatGridListModule} from  '@angular/material/grid-list'
import {MatIconModule} from  '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import {MatButtonModule} from '@angular/material/button';

import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'
import {  MatToolbarModule} from '@angular/material/toolbar'
import { MatSortModule } from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    GetComponent,
    UpdateComponent,
   
    NavbarComponent,
    SalaryslipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
