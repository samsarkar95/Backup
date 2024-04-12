import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 
@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css'],
})
export class ConfirmdialogComponent implements OnInit {
   //alertswitch2:boolean=false;
 // alertswitch2:any;
  deleteid: number;
  constructor(
    public empService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.alertswitch2=empService.alertswitch2;
    this.deleteid = empService.deleteid;
  }
 
  ngOnInit(): void {}
 
  deleteEmployee() {
    let id = this.data.id;
    this.empService.alertswitch2 = true;
    this.empService.deleteEmployees(id).subscribe((data) => {
      location.replace('/list-emp');
    });
  }
}