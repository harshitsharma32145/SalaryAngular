import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VerbService } from '../verb.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private router: Router, private service: VerbService, private formbuilder: FormBuilder, private actroute: ActivatedRoute) { }
  reactive!: FormGroup;
  userId: any;
  // value!: any;

  ngOnInit(): void {
    this.reactive = this.formbuilder.group({
      id: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      companyddress: new FormControl('', [Validators.required]),
      eMonth: new FormControl('', [Validators.required,]),
      eYear: new FormControl(0, [Validators.required]),
      employeeName: new FormControl([Validators.required]),
      uan: new FormControl('', [Validators.required]),
     
      pfno: new FormControl('',),
      designation: new FormControl(),
      esino: new FormControl([Validators.required]),
      departmentId: new FormControl('', [Validators.required]),
      bankName: new FormControl([Validators.required]),
      doj: new FormControl(),
      bankAccountNo: new FormControl(),
      basicPay: new FormControl(),
      hra: new FormControl(),
      
    })

    this.actroute.queryParams.subscribe((params) => {
      this.userId = +params["id"];
      console.log(this.userId);
    })
    this.GetEmployeeById();
    this.getdepartment()
  }
  GetEmployeeById() {
    this.service.getByid(this.userId).subscribe((result: any) => {
      // this.value = result;
      this.reactive.patchValue(result);
     
    })
  }
  value: any = []
  id:any
  getdepartment() {

    this.service.getdepartment().subscribe((res) => {
      this.value = res
      console.warn(this.value);
      
    })
  }

  UpdateEmployee(data: any) {
    
    console.log(data)


    if (confirm("Confirm update Patient details?")) {
      this.service.UpdateRecord(data).subscribe((result: any) => {
        console.warn(result);
        alert("Patient record has been updated.")
        this.router.navigate(['get'])
      })
    }
  }

}
