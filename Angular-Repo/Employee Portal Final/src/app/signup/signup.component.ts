import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { v4 as uuid, validate} from 'uuid';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotificationService } from '../service/Notifiction.service';
import { NotificationMessage, NotificationType } from '../model/Notification';


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
    message : NotificationMessage;

  constructor(private fb:FormBuilder,private http: HttpClient , 
    private router:Router,private empService: EmployeeService,
    public SnackBar:MatSnackBar ,private notification : NotificationService) 
  {
    
  }
     

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      
      userName:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_-]{4,16}$/)]],
      fullName:['',[Validators.required,Validators.pattern("^[a-zA-Z\\s]*$")]],
      mobileNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password:['',[Validators.required]]
    })
  }
  
  signUp(){
    this.http.get<any>("http://localhost:3000/signupUsers",this.signupForm.value).subscribe(()=>{
      // alert("Signup Successful");
      // this.signupForm.reset();
      // this.router.navigate(["login"]);
       let msg= "Signup Successful";
      this.notification.sendMessage({
        message : msg,
        type : NotificationType.success
      })
    },_err=>{
      alert("Something went wrong")
    })
    console.log('Create fire');
      

    
  this.http.post<any>("http://localhost:3000/Users/",{
     ...this.signupForm.value,
     id: uuid()
    }).subscribe({
      next: (data)=>{
        this.router.navigate(['login']);
        
        this.SnackBar.open("User successfully signed-up", '', 
        { duration: 3000,
          horizontalPosition:'center',
          verticalPosition:'bottom',
          panelClass: 'successful'  }); 
        
        // alert("User successfully signed-up")
      },
      error: (err) => {
        // alert("Something went wrong!!");
        this.SnackBar.open("Something Went Wrong !!", '', 
        { duration: 3000,
          horizontalPosition:'center',
          verticalPosition:'bottom',
          panelClass: 'failed'   });
      }
      });
  }
  
}


