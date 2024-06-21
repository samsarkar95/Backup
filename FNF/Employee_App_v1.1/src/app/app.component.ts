import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { OrderPipe } from 'ngx-order-pipe';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit {
  title = 'Employee Portal';
  employees: Employee[] | any;
  order: string = 'skills';
  searchText:any;
  displayedColumns: string[] = ['id', 'employeeName', 'department', 'designation', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;
  
  constructor(private empService: EmployeeService, private router: Router , private orderPipe: OrderPipe) {
    console.log(this.orderPipe.transform(this.employees, this.order));
   }

  ngOnInit(): void {
    this.empService.getEmployees()
      .subscribe((data: Employee[]) => {
        console.log(data , 'kkkk');
        this.employees = data;
      });
  
 }
 addEmp(): void {
  localStorage.removeItem('editEmpId');
  this.router.navigate(['add-emp']);
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
 }