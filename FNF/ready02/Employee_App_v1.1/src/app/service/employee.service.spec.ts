import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Employee } from '../model/employee.model';

describe('EmployeeService', () => {
  let service: EmployeeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        HttpClient,
        HttpHandler,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should execute getUser', () => { 
    service.getUser();
   });

   it('should execute deleteEmployees', () => { 
    service.deleteEmployees(0);
   });
   it('should execute updateEmployee', () => { 
   const  employee = new Employee
    service.updateEmployee( employee);
   });
   it('should execute createUser', () => { 
    const  employee = new Employee
     service.createUser( employee);
    });
   it('should execute getEmployeeById', () => { 
    service. getEmployeeById(0);
   });
});
