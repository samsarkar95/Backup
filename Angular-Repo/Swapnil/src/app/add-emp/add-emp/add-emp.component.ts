import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  empformlabel = 'Add Employee';
  empformbtn = 'Save';
  
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) { }
  addForm: FormGroup | any;
  btnvisibility = true;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],
      employee_age: ['', [Validators.required, Validators.maxLength(3)]]
    });
  }
  onSubmit() {
    console.log('Create fire');
    this.empService.createUser(this.addForm.value).subscribe(data => {
        this.router.navigate(['list-emp']);
      },
      error => {
        alert(error);
      });
  }
}
