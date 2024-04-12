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
  title = 'Employee Portal';
  empformbtn = 'Save';
  alertswitch: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, public empService: EmployeeService) { }
  addForm: FormGroup | any;
  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      employee_name: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      department: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      skills: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]]
    });

  }

  onSubmit() {
    this.empService.alertswitch1 = true;
    this.empService.alertswitch = false;
    this.empService.alertswitch2 = false;
    this.empService.alertswitch3 = false;
    console.log('Create fire');
    this.empService.createUser(this.addForm.value).subscribe(data => {
      this.router.navigate(['list-emp']);
      // alert("Sucessfully added the employee details")
    });
  }
}
