import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'EDB Directory';
   signupForm!:FormGroup;
   fullName :string='';
   mobileNumber!: number;
   userName:string='';
   password:any;
   loginForm: any;
   submitted = true;
  constructor(private fb:FormBuilder,private http: HttpClient , private router:Router) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      
      fullName:['',[Validators.required, Validators.pattern('[A-Z]{1}[A-Z a-z]*')]],
      mobileNumber:['',[Validators.required,Validators.pattern('[0-9+]*'),Validators.minLength(10)]],
      userName:['',[Validators.required, Validators.pattern('[A-Z]{1}[A-Z a-z]*')]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  

  signUp(){
    this.http.get<any>("http://localhost:3000/signupUsers",this.signupForm.value).subscribe((_res)=>{
      alert("Signup Successful");
      this.signupForm.reset();
      this.router.navigate(["login"]);
    },_err=>{
      alert("Something went wrong")
    })
   
  }
  
}