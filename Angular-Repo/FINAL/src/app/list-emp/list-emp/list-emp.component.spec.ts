import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpComponent } from './list-emp.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { of } from 'rxjs';

describe('ListEmpComponent', () => {
  let component: ListEmpComponent;
  let fixture: ComponentFixture<ListEmpComponent>;
  const mockFormBuilder = new FormBuilder();
  let empService:any;
  let router: any;
  let event:Event;
  const routerMock = {
   navigate : jasmine.createSpy("navigate"),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [ 
        {provide : FormBuilder , useValue:mockFormBuilder},
        {provide : Router , useValue:routerMock},
        HttpClient,
        HttpHandler,
        OrderPipe
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpComponent);
    component = fixture.componentInstance;
    empService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnInit()', () => { 
    component.ngOnInit();
   });

  it('should execute getAllEmployees', () => { 
    const data = [
      {
          "id": 1,
          "employee_name": "Priti Deokar",
          "designation": "Technology lead",
          "department": "DX",
          "emailid": "priti@gmail.com",
          "salary": 70000,
          "mobileNumber": "9845678438"
      },
      {
          "id": 2,
          "employee_name": "Mansi Sharma",
          "designation": "Associate Consultant",
          "department": "Oracle",
          "emailid": "mansi.sharma@gmail.com",
          "salary": 50000,
          "mobileNumber": 8954328912
      },
      {
          "id": 4,
          "employee_name": "Shubhangi Kamble",
          "designation": "SSE",
          "department": "SAP",
          "emailid": "shubhangi15@gmail.com",
          "salary": 700000,
          "mobileNumber": 6789543210
      }
  ]
    spyOn(empService, 'getEmployees').and.returnValue(of(data));
    component.getAllEmployees();
   });

   xit('should execute deleteEmployee', () => { 
    const data = {}
    spyOn(empService, 'deleteEmployees').and.returnValue(of(data));
    component.deleteEmployee(0);
   });

   it('should execute editEmp', () => { 
    component.editEmp('');
   });

   it('should execute detailsEmp', () => { 
    component.detailsEmp('');
   });

   it('should execute addEmp', () => { 
    component.addEmp();
   });

  
});
