import { Component, OnInit, ViewChild } from '@angular/core';
import { VerbService } from '../verb.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddRecordComponent } from '../add-record/add-record.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { query } from '@angular/animations';
import { UpdateComponent } from '../update/update.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  constructor(private service: VerbService, private route: Router, public dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  Salaryslip(id: number) {
    this.route.navigate(['salaryslip'], { queryParams: { id: id } })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddRecordComponent, {
      width: '70%',
      height: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDialog2(data: string,): void {
    this.dialog.open(UpdateComponent, {
       
      width: '70%',
      height: '80%',
      
     
    });
  }



  @ViewChild(MatPaginator) private paginator!: MatPaginator
  @ViewChild(MatSort) private sort!: MatSort
  displayedColumns: any = [] = ['emplopyeeId', 'employeeName', 'designation', 'doj', 'Action'];
  value: any
  dataSource: any;

  ngOnInit(): void {
    this.getdata()
  }


  deleteSalary(id: any) {
    console.warn(id);
    if
      (confirm("Are you sure to delete " + id.firstName + "?")) {

      this.service.DeleteRecord(id).subscribe((result) => {

        this.snackBar.open('Deleted Succesfully', 'Undo', {
          duration: 3000
        });
        this.getdata()
      })
    }
    else {

      this.snackBar.open('Not Deleted', 'ok', {
        duration: 1000
      });
    }


  }


  // Update(id: any) {
  //   this.route.navigate(['update'], { queryParams: { id: id } })
  //   this.getdata()

  // }


  getdata() {
    this.service.userdata().subscribe((res) => {
      this.value = res
      this.dataSource = new MatTableDataSource<any>(this.value)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort

    })
  }

  search(event: Event) {
    const data = (event?.target as HTMLInputElement).value
    this.dataSource.filter = data

  }
}
