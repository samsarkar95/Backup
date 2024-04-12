import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title = 'Employee Portal';
  alertswitch3: boolean=false;

  constructor(public empService: EmployeeService, private router: Router) {
    this.alertswitch3 = empService.alertswitch3;
   }

  ngOnInit(): void {
  }

  onClose(){
    this.empService.alertswitch3 = false;
    this.router.navigate(['list-emp']);
  }
}
