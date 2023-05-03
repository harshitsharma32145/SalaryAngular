import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor(private http: HttpClient) { }

  userdata() {
    return this.http.get("https://localhost:7054/api/Salary/GetSalary");
  }

  DeleteRecord(val:any)
  {
    return this.http.delete("https://localhost:7054/api/Salary/DeleteSalary" + '?id=' + val)
  }

  
  getByid(id: any) {
    return this.http.get('https://localhost:7054/api/Salary/GetSalaryRecordById?id=' + id)
  }

  UpdateRecord(val:any)
  {
    return this.http.put("https://localhost:7054/api/Salary/UpdateSalary", val)
  }

  SaveRecord(val:any)
  {
    return this.http.post("https://localhost:7054/api/Salary/SaveSalary", val)
  }
  
  getdepartment()
  {
    return this.http.get("https://localhost:7054/api/Salary/GetDepartment")
  }

  getdepartmentByid(id:number)
  {
    return this.http.get("https://localhost:7054/api/Salary/GetDepartmentById?id="+id)
  }
}
