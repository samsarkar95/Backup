import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp/edit-emp.component';
import { ListEmpComponent } from './list-emp/list-emp/list-emp.component';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule }from'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { OrderModule } from 'ngx-order-pipe';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    EditEmpComponent,
    ListEmpComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    OrderModule,
  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
