import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Employee Portal';
   signupForm!:FormGroup;
   fullName :string='';
   mobileNumber!: number;
   userName:string='';
   password:any;
   loginForm: any;
   submitted = true;
  constructor(private fb:FormBuilder,private http: HttpClient , private router:Router, private empService: EmployeeService) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      
      userName:['',[Validators.required]],
      fullName:['',[Validators.required]],
      mobileNumber:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  

  signUp(){
    // this.http.get<any>("http://localhost:3000/signupUsers",this.signupForm.value).subscribe((_res)=>{
    //   alert("Signup Successful");
    //   this.signupForm.reset();
    //   this.router.navigate(["login"]);
    // },_err=>{
    //   alert("Something went wrong")
    // })
    this.empService.confirmation=true;
    console.log('Create fire');

    
    
    
  this.http.post<any>("http://localhost:3000/Users/",{
     ...this.signupForm.value,
     id: uuid()
    }).subscribe({
      next: (data)=>{
        
        this.router.navigate(['login']);
      },
      error: (err) => {
        alert("Something went wrong!!");
      }
      });
  }
  
}