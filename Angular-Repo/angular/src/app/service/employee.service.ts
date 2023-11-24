import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/employees/';

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }
  createUser(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }
  getEmployeeById(id: number) {
    return this.http.get<Employee>(this.baseUrl + id);
  }
}
