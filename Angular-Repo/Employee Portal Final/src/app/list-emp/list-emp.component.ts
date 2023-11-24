import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { OrderPipe } from 'ngx-order-pipe';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EditEmpComponent } from 'src/app/edit-emp/edit-emp.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  title = 'Employee Portal';
  employees: Employee[] | any;
  searchText:any;
  order: string = 'skills';
  flag:boolean=true;
  displayedColumns: string[] = ['id', 'employee_name', 'department', 'designation', 'emailid', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public empService: EmployeeService, private router: Router , private orderPipe: OrderPipe,public snackBar:MatSnackBar) {
    console.log(this.orderPipe.transform(this.employees, this.order,));
    // this.SnackBar.open("User successfully Logged-out", '', { duration: 3000  });
   }
   openSnackBar() {
    this.snackBar.open('User Logged-Out','', {
    duration: 2000,
    horizontalPosition:'center',
    verticalPosition:'bottom',
    panelClass: 'logout'  });
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

  this.empService.id=employee.id;
  this.empService.employee_name=employee.employee_name;
  this.empService.department=employee.department;
  this.empService.designation=employee.designation;
  this.empService.emailid=employee.emailid;
  this.empService.skills=employee.skills;
  this.empService.mobileNumber=employee.mobileNumber;

 // this.empService.id=this.empService.getEmployeeById();
  this.router.navigate(['edit-emp']);

}

deleteEmployee(id : number){
  if (confirm("Are you sure to delete record?"))
  this.empService.deleteEmployees(id)
  .subscribe({
    next:(res)=>{
      console.log(res , 'test')
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
detailsEmp(employee: Employee | any): void {
  this.empService.id=employee.id;
  this.empService.employee_name=employee.employee_name;
  this.empService.department=employee.department;
  this.empService.designation=employee.designation;
  this.empService.emailid=employee.emailid;
  this.empService.skills=employee.skills;
  this.empService.mobileNumber=employee.mobileNumber;

  this.router.navigate(['details']);
  }
  
}