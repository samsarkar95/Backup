import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp/add-emp.component';
import { ListEmpComponent } from './list-emp/list-emp/list-emp.component';




const routes: Routes = [
  { path: '', component: AddEmpComponent, pathMatch: 'full' },
  { path: 'add-emp', component:AddEmpComponent},
  { path: 'list-emp', component: ListEmpComponent },
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
