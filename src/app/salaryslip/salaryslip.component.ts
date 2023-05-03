import { Component, OnInit } from '@angular/core';
import { VerbService } from '../verb.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-salaryslip',
  templateUrl: './salaryslip.component.html',
  styleUrls: ['./salaryslip.component.css']
})
export class SalaryslipComponent implements OnInit {
  salaryrecord!: FormGroup
  salaryid: any
  myDate = new Date();

  constructor(private service: VerbService, private formbuilder: FormBuilder, private actroute: ActivatedRoute) {
   }
  
  ngOnInit(): void {
    this.salaryrecord = this.formbuilder.group({
      companyName: new FormControl('',),
      companyddress: new FormControl('',),
      eMonth: new FormControl('',),
      eYear: new FormControl(0,),
      employeeName: new FormControl('78954',),
      uan: new FormControl('',),
      emplopyeeId: new FormControl('harshit',),
      pfno: new FormControl('',),
      designation: new FormControl(),
      esino: new FormControl('78954',),
      departmentId: new FormControl('',),
      bankName: new FormControl('harshit',),
      doj: new FormControl('',),
      bankAccountNo: new FormControl(),
      basicPay: new FormControl(),
      hra: new FormControl(),
      epf: new FormControl(),
      esi: new FormControl(),
      totalEarnings: new FormControl(),
      totalDeduction: new FormControl(),
      netSalary: new FormControl(),
    })
    this.actroute.queryParams.subscribe((params) => {
      this.salaryid = +params["id"];
      console.log(this.salaryid);
    })
    
    this.GetEmployeeById();

  }
  GetEmployeeById() {
    
    this.service.getByid(this.salaryid).subscribe((result: any) => {
      this.salaryrecord.patchValue(result);
    })
  }
}
