import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpComponent } from './edit-emp.component';
// import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormBuilder } from '@angular/forms';

describe('EditEmpComponent', () => {
  let component: EditEmpComponent;
  let fixture: ComponentFixture<EditEmpComponent>;
  let empService: any;
  // const mockFormBuilder = new UntypedFormBuilder();
  const routerMock = {
   navigate : jasmine.createSpy("navigate"),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [ 
        // {provide : UntypedFormBuilder , useValue:mockFormBuilder},
        {provide : Router , useValue:routerMock},
        HttpClient,
        HttpHandler,
        FormBuilder
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpComponent);
    component = fixture.componentInstance;
    empService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnInit', () => {
    component.ngOnInit();
  });
  
 it('should execute onUpdate', () => { 
  component.editForm = {
    id: '',
    employee_name: '',
    designation: '',
    department: '',
    emailid: '',
    skills: '',
    mobileNumber: '',
  };
  spyOn(empService, 'updateEmployee').and.returnValue(of(component.editForm));
    component.onUpdate();
   });
  /*  it('should execute onReset', () => {
    const employee_name = 'PRITI'
    component.editForm.get(employee_name).setValue(empService.employee_name);
    component.onReset();
  }); */
});
