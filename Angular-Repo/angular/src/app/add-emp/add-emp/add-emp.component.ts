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
  empformbtn = 'Save';
  
  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) { }
  addForm: FormGroup | any;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: ['',[Validators.required]],
      employee_name: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      department: ['', [Validators.required]],
      emailid:['',[Validators.required]]
    });
  }
  onSubmit() {
    console.log('Create fire');
    this.empService.createUser(this.addForm.value).subscribe(data => {
        this.router.navigate(['list-emp']);
        alert("Sucessfully added the employee details")
      },
      error => {
        alert(error);
      });
  }
}
