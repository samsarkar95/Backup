import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEmpComponent } from './add-emp.component';
// import { UntypedFormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('AddEmpComponent', () => {
  let component: AddEmpComponent;
  let fixture: ComponentFixture<AddEmpComponent>;
  let empService: any;
  // const mockFormBuilder = new UntypedFormBuilder();
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmpComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        // { provide: UntypedFormBuilder, useValue: mockFormBuilder },
        { provide: Router, useValue: routerMock },
        HttpClient,
        HttpHandler,
        FormBuilder
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpComponent);
    component = fixture.componentInstance;
    empService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onSubmit', () => {
    component.addForm = {
      id: '',
      employee_name: '',
      designation: '',
      department: '',
      emailid: '',
      skills: '',
      mobileNumber: '',
    };
    spyOn(empService, 'createUser').and.returnValue(of(component.addForm));
    component.onSubmit();
  });
  it('should execute ngOnInit', () => {
    component.ngOnInit();
  });
});
