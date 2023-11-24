import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    /* Add the following formcontrols to the loginForm reactive form instance with 
    the given default values and validators for each form control
    1. emailId:- default:" ", Validators: required, email(It should be in correct email form)
    2.password:- default:" ", Validators: required, pattern- should have 1 capital, 1 lower, 1 number, 1 special character, minimum 8 characters. */
    this.loginForm = this.formbuilder.group({
      email:['',[Validators.required, Validators.pattern(/^[A-z][A-z0-9._]+@[A-z]+[.][A-z]{2,4}$/)]],
      password:['',[Validators.required, Validators.minLength(7), Validators.maxLength(20), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,20}$/)]]
    })

  }
  
// login method define and login validation 
logIn(){    
  this.http.get<any>('http://localhost:3000/users').subscribe((res)=>{
    const users=res.find((a:any)=>{
      return a.userId===this.loginForm.value.email && a.password===this.loginForm.value.password
    });
    if(users){
      alert('login successful');
      this.loginForm.reset();
      this.router.navigate['/reward']
    }
    else{
      alert('user not found')
    }
  })
 }
}
