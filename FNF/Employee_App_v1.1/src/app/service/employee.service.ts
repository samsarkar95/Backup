import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { signUp } from '../model/signup';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  public alertswitch: any;
  public alertswitch1: any;
  public alertswitch2: any;
  public alertswitch3: any;
  public alertswitch5: any;
  public confirmation: any;
  public deleteid: any;
  public userName: any;
  public id: any;
  public employee_name: any;
  public department: any;
  public designation: any;
  public emailid: any;
  public skills: any;
  public mobileNumber: any;
  baseUrl = 'http://localhost:3000/employees/';
  // userUrl = 'http://localhost:3000/users/';

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }
  getUser() {
    return this.http.get<Employee[]>(this.baseUrl);
  }
  // addUser(signup: signUp) {
    // return this.http.post(this.userUrl, signup);
  // }
  deleteEmployees(id: number) {
    return this.http.delete<Employee[]>(this.baseUrl + id);
  }
  createUser(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }
  getEmployeeById(id: number) {
    return this.http.get<Employee>(this.baseUrl + id);
  }
  updateEmployee(employee: Employee) {
    return this.http.put(this.baseUrl + employee.id, employee);
  }
}
