import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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

   it('should execute getEmployeeById', () => { 
    service. getEmployeeById(0);
   });
});
