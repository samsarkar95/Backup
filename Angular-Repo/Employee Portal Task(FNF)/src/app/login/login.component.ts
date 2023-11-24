import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Employee Portal';
  loginForm!:FormGroup;
  login: any;
  users: any;
  valid!: boolean;
  submitted=false;
  confirmation:boolean=false;
  alertswitch4:boolean=false;

  
  constructor(public empService: EmployeeService, private router:Router, private formBuilder:FormBuilder, private http:HttpClient) {
    this.confirmation=empService.confirmation,this.alertswitch4=empService.alertswitch4;
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    setTimeout(()=> this.alertswitch4=false,4000);
  }

  onSubmit() {
    this.submitted = true;
  this.http.get<any>("http://localhost:3000/Users/").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password
  });
  if(user){
    // alert("Login Successful!!");
    this.empService.userName=this.loginForm.value.userName;
    this.loginForm.reset();
    this.empService.alertswitch3=true;
    this.router.navigate(['list-emp'])
  }
  else{
    // alert("user not found");
    this.empService.alertswitch4=true;
    this.loginForm.reset();
   
  }
})

}
}
