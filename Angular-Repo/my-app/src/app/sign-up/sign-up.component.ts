import { Component } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
registerForm!: FormGroup;
submitted!:boolean;
alert: boolean = false;

constructor(public snackBar: MatSnackBar, public formbuilder: FormBuilder) {}


ngOnInit(): void {
 this.registerForm=this.formbuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    // mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
  })
}

// SnackBar(message: string, action: string) {
//   this.snackBar.open(message, action, {
//     duration: 1000,
//   });
// }

onSubmit()
   { 
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
    this.alert=true;
    this.registerForm.reset({});
   }
   closealert()
   {
    this.alert=false;
   }

// updateProfile()
//   {
//     this.registerForm.patchValue({
//       firstName: 'Nancy',
//       lastName: 'Watson'
//     });
//   }

  }