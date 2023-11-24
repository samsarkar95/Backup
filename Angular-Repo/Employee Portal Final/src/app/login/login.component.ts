import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';



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
  
  constructor(public empService: EmployeeService,private router:Router,
   private formBuilder:FormBuilder, private http:HttpClient,public SnackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
  this.http.get<any>("http://localhost:3000/Users/").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password
  });
  if(user){
    // alert("Login Successful!!");
   
    this.SnackBar.open("User Logged-In", '', { 
    duration: 3000,
    horizontalPosition:'center',
    verticalPosition:'bottom',
    panelClass: 'successful'  });
    this.empService.userName=this.loginForm.value.userName;
    this.loginForm.reset();
    this.router.navigate(['list-emp'])
  }
  else{
    // alert("user not found");\
    this.SnackBar.open("User Not Found !!!", '', { 
    duration: 3000,
    horizontalPosition:'center',
    verticalPosition:'bottom',
    panelClass: 'failed'
    });
    this.loginForm.reset();
  }
})

}
}
