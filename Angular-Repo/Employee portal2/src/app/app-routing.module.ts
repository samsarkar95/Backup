import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp/edit-emp.component';
import { ListEmpComponent } from './list-emp/list-emp/list-emp.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'list-emp', component: ListEmpComponent },
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'edit-emp', component: EditEmpComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
