import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  employees: Employee[] | any;
  searchText:any;
  order: string = 'salary';
  flag:boolean=true;
  
  constructor(private empService: EmployeeService, private router: Router , private orderPipe: OrderPipe) {
    console.log(this.orderPipe.transform(this.employees, this.order));
   }

  ngOnInit(): void {
    this.empService.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }
  deleteEmp(employee: Employee | any): void {
    this.empService.deleteEmployees(employee.id)
      .subscribe(data => {
        this.employees = this.employees.filter((u: any) => u !== employee);
      });
  }
  editEmp(employee: Employee | any): void {
    localStorage.removeItem('editEmpId');
    localStorage.setItem('editEmpId', employee.id.toString());
    this.router.navigate(['update-emp']);
  }

  addEmp(): void {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['add-emp']);
  }

  sort=()=>{
    this.flag=!this.flag;
    this.employees?.sort((a:any,b:any):any=>{
      let ln1=a.id
      let ln2=b.id
       if (ln1==ln2){
        return
       }
       else if(this.flag){
        return ln1<ln2?1:-1
      }else{
        return ln1>ln2?1:-1
      }
    })
  }
    
  sortname(){
  this.flag=!this.flag;
  this.employees?.sort((a:any,b:any):any=>{
    let ln1=a.employee_name
    let ln2=b.employee_name
    if (ln1==ln2){
    return
    }
    else if(this.flag){
     return ln1<ln2?1:-1
    }
    else{
     return ln1>ln2?1:-1
    }
    
  })
}

}
