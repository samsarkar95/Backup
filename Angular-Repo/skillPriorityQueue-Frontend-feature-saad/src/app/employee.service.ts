import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Change this URL based on your backend API
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee: Employee[]):Observable<object>{
    return this.http.post((this.baseURL), employee);
  }

  getEmployeeById(id: number):Observable<Employee[]>{
    let url = this.baseURL+'/'+id;
    return this.http.get<Employee[]>(url);
  }

  getSingleById(id: number):Observable<Employee>{
    let url = this.baseURL+'/'+id;
    return this.http.get<Employee>(url);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    let url = this.baseURL+'/'+id;
    return this.http.put(url, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    let url = this.baseURL+'/'+id;
    return this.http.delete(url);
  }
}
