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

  title = 'Employee Portal';

  empformlabel = 'Edit Employee Details';

  empformbtn = 'Update';

  isDisabled : boolean=true;

 

  alertswitch : boolean=false;

 

  constructor(private formBuilder: FormBuilder, private router: Router, public empService: EmployeeService) { }

 

  editForm: FormGroup | any;

 

  addForm: FormGroup | any;

 

  ngOnInit(): void {

 

    this.editForm = this.formBuilder.group({

 

      id: [],

 

      employee_name: ['', Validators.required],

 

      designation: ['', Validators.required],

 

      department: ['', Validators.required],

 

      emailid: ['',Validators.required],

 

      skills: ['', [Validators.required]],

 

      mobileNumber: ['', [Validators.required]]

 

    });

 

    this.addForm = this.formBuilder.group({

 

      id: [],

 

      employee_name: ['', Validators.required],

 

      designation: ['', Validators.required],

 

      department: ['', Validators.required],

 

      emailid: ['', Validators.required],

 

      skills: ['', [Validators.required]],

 

      mobileNumber: ['', [Validators.required]]

 

    });

 

   

 

  }

 

  onUpdate() {
    this.empService.alertswitch = true;
    console.log('Update fire');
    this.empService.updateEmployee(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-emp']);

    });

 

  }

 

}