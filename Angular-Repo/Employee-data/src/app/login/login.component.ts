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
  loginForm!:FormGroup;
  login: any;
  users: any;
  valid!: boolean;
  submitted=false;
  
  constructor(private router:Router, private formBuilder:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:['',[Validators.required],[Validators.pattern("^[a-z0-9]+@[a-z]+[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;
  this.http.get<any>("http://localhost:3000/Users/").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password
  });
  if(user){
    alert("Login Successful!!");
    this.loginForm.reset();
    this.router.navigate(['list-emp'])
  }
  else{
    alert("user not found");
  }
})

}

}
