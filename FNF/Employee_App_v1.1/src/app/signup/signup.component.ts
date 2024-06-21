import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
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
  USER_EXIST_ERRMSG='Current User Already Exists !!!'
  signupForm!:FormGroup;
   fullName :string='';
   mobileNumber!: number;
   userName:string='';
   password:any;
   loginForm: any;
   submitted = true;
   users : any;
   alertswitch5: boolean= false;
  constructor(private fb:FormBuilder,private http: HttpClient , private router:Router, private empService: EmployeeService) 
  {
    this.alertswitch5 = empService.alertswitch5;
  }

  ngOnInit(): void {
     this.getData()
     //setInterval(() => (this.alertswitch5 = false), 5000);
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
    console.log(this.users);
    let userMatch = this.users.find ((user: { userName: any; })=>this.signupForm.get("userName")?.value === user.userName)
    if(userMatch){
      // alert("Current User is already present")
      this.alertswitch5 = true;
      // location.href = '/signup';
      
    }
   
  else{
 
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
    console.log(this.signupForm.get("userName")?.value)
   
    
    
    
  // this.http.post<any>("http://localhost:3000/Users/",{
  //    ...this.signupForm.value,
  //    id: uuid()
  //   }).subscribe({
  //     next: (data)=>{
        
  //       this.router.navigate(['login']);
  //     },
  //     error: (err) => {
  //       alert("Something went wrong!!");
  //     }
  //     });
  }
  getData(){
    this.http.get<any>("http://localhost:3000/Users/").subscribe((data)=>{
      this.users = data
      console.log(this.users)
    })
  }
}