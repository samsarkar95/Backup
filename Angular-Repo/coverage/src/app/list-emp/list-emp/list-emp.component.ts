import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { OrderPipe } from 'ngx-order-pipe';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EditEmpComponent } from 'src/app/edit-emp/edit-emp/edit-emp.component';


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  title = 'EDB Directory';
  employees: Employee[] | any;
  searchText:any;
  order: string = 'salary';
  flag:boolean=true;
  displayedColumns: string[] = ['id', 'employee_name', 'department', 'designation', 'emailid', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private empService: EmployeeService, private router: Router , private orderPipe: OrderPipe) {
    console.log(this.orderPipe.transform(this.employees, this.order));
   }

   ngOnInit(): void {
    this.getAllEmployees();
  }
getAllEmployees(){
  this.empService.getEmployees()
  .subscribe({
    next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    },
    error:()=>{
      alert("Error while fetching the Record!!")
    }
  })
}
editEmp(employee: Employee | any): void {

  localStorage.removeItem('editEmpId');

  localStorage.setItem('editEmpId', employee.id.toString());

  this.router.navigate(['edit-emp']);

}

deleteEmployee(id : number){
  this.empService.deleteEmployees(id)
  .subscribe({
    next:(res)=>{
      alert("Employee deleted successfully");
      this.getAllEmployees();
    },
    error:()=>{
      alert("Error while deleting the Record!!")
    }
  })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
addEmp(): void {
  localStorage.removeItem('editEmpId');
  this.router.navigate(['add-emp']);
}
}