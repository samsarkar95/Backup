import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent implements OnInit {
  title = 'Employee Portal';
  empformbtn = 'Save';
  
  constructor(private formBuilder: FormBuilder, 
  private router: Router, private empService: EmployeeService,private SnackBar: MatSnackBar) { }
  addForm: FormGroup | any;
  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      id: ['',[Validators.required]],
      employee_name: ['', [Validators.required,Validators.pattern("^[a-zA-Z\\s]*$")]],
      designation: ['', [Validators.required]],
      department: ['', [Validators.required]],
      emailid:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileNumber: ['', Validators.compose([Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])]
    });

  }

  onSubmit() {

    console.log('Create fire');

    this.empService.createUser(this.addForm.value).subscribe(data => {

        this.router.navigate(['list-emp']);

        // alert("Sucessfully added the employee details")
        this.SnackBar.open("Sucessfully added the Employee Details", '', 
        { duration: 3000,
          horizontalPosition:'center',
          verticalPosition:'bottom',
          panelClass: 'successful'  }); 

      },

      error => {

        this.SnackBar.open("Something Went Wrong !!", '', 
        { duration: 3000,
          horizontalPosition:'center',
          verticalPosition:'bottom',
          panelClass: 'failed'   });

      });

  }

}