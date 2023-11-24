import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  empformlabel = 'Edit Employee Details';
  empformbtn = 'Update';
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) { }
  editForm: FormGroup | any;
  addForm: FormGroup | any;
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],
      employee_age: ['', [Validators.required, Validators.maxLength(3)]]
    });
    this.addForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],
      employee_age: ['', [Validators.required, Validators.maxLength(3)]]
    });
    
  }
  onUpdate() {

    console.log('Update fire');
    this.empService.updateEmployee(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-emp']);
    },
      error => {
        alert(error);
      });
  }

}
