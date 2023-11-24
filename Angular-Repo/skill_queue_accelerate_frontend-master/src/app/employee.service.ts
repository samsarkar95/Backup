import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //Change this URL based on your backend API
  private baseURL = 'http://localhost:5100';

  constructor(private http: HttpClient) {}

  // method to get all the skills from Backend on page load
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseURL + '/skills');
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  // method to save employee details
  createEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(this.baseURL + '/employee', employee);
  }

  getEmployeeById(id: number): Observable<Employee[]> {
    let url = this.baseURL + '/' + id;
    return this.http.get<Employee[]>(url);
  }

  getSingleById(id: number): Observable<Employee> {
    let url = this.baseURL + '/' + id;
    return this.http.get<Employee>(url);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    let url = this.baseURL + '/' + id;
    return this.http.put(url, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    let url = this.baseURL + '/' + id;
    return this.http.delete(url);
  }
}
