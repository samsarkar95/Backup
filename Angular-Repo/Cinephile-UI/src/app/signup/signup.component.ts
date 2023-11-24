import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePageService } from '../home-page/home-page.service';
import { SignupService } from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm :FormGroup;
  constructor(private formbuilder:FormBuilder,private hs:HomePageService, private ss:SignupService) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      email:['',[Validators.required, Validators.pattern(/^[A-z][A-z0-9._]+@[A-z]+[.][A-z]{2,4}$/)]],
      name:['',[Validators.required, Validators.pattern(/^(?!\s*$)[-a-zA-Z]*$/)]],
      number:['',[Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      password:['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,20}$/)]]
    })
  }
register(){
  this.hs.register(this.registerForm.value).subscribe(
    (data)=>{alert('Registration successful')},
    (error)=>{alert('Registration Failed')}
  )
}
}
