import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VerbService } from '../verb.service';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
  Addrecord!: FormGroup
  email: any;

  constructor(private service: VerbService, private formbuilder: FormBuilder, private route: Router,public dialogRef: MatDialogRef<AddRecordComponent>) { }
  // reactive!: FormGroup;
  userName: any;
    ngOnInit(): void {
    this.Addrecord = this.formbuilder.group({
      companyName: new FormControl('', [Validators.required]),
      companyddress: new FormControl('', [Validators.required]),
      eMonth: new FormControl('', [Validators.required,]),
      eYear: new FormControl('', [Validators.required]),
      employeeName: new FormControl('', [Validators.required]),
      uan: new FormControl('', [Validators.required]),
      emplopyeeId: new FormControl('', [Validators.required,Validators.minLength(3)]),
      pfno: new FormControl('', [Validators.required,Validators.minLength(3)]),
      designation: new FormControl('', Validators.required),
      esino: new FormControl('', [Validators.required]),
      departmentId: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      doj: new FormControl(''),
      bankAccountNo: new FormControl(' ', [Validators.required, Validators.minLength(10)]),
      isDeleted: new FormControl(),
      isActive: new FormControl(),
      basicPay: new FormControl(),
      hra: new FormControl(),
    })
    this.getdepartment()

  }
  get companyName() {
    return this.Addrecord.get("companyName")
  }
  get companyddress() {
    return this.Addrecord.get("companyddress")
  }
  get eMonth() {
    return this.Addrecord.get("eMonth")
  }
  get eYear() {
    return this.Addrecord.get("eYear")
  }
  get employeeName() {
    return this.Addrecord.get("employeeName")
  }
  get uan() {
    return this.Addrecord.get("uan")
  }

  get emplopyeeId() {
    return this.Addrecord.get("emplopyeeId")
  }
  get pfno() {
    return this.Addrecord.get("pfno")
  }
  get designation() {
    return this.Addrecord.get("designation")
  }

  get esino() {
    return this.Addrecord.get("esino")
  }

  get departmentName() {
    return this.Addrecord.get("departmentId")
  }
  get bankName() {
    return this.Addrecord.get("bankName")
  }

  get bankAccountNo() {
    return this.Addrecord.get("bankAccountNo")
  }
  get basicPay() {
    return this.Addrecord.get("doj")
  }
  get hra() {
    return this.Addrecord.get("hra")
  }
  postrecord(val: any) {

    val.doj = new Date()
    val.isDeleted = false
    val.isActive = true
    this.service.SaveRecord(val).subscribe((result: any) => {
      console.log(result);
      alert('Patient record is Added')
    })
    this.dialogRef.close();
    this.route.navigate(['get'])

  }

  value: any = []
  getdepartment() {
    this.service.getdepartment().subscribe((res) => {
      this.value = res
    })
  }
}


