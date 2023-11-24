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
