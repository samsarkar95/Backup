import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { EmployeeService } from './service/employee.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const routerMock = {
    navigateByUrl: jasmine.createSpy("navigate"),
  }
  let empService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerMock },
        HttpClient,
        HttpHandler,
        OrderPipe

      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    empService = TestBed.inject(EmployeeService);
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EDB Directory'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EDB Directory');
  });

  // xit('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('EDB Directory app is running!');
  // });

  // it('should execute ngOnInit', () => {
  //   const data = [
  //     {
  //         "id": 1,
  //         "employee_name": "Shital Desai",
  //         "designation": "SE",
  //         "department": "Finacle",
  //         "emailid": "shittal.desai@gmail.com"
  //     },
  //     {
  //         "id": 2,
  //         "employee_name": "Priti Deokar",
  //         "designation": "SE",
  //         "department": "IVS",
  //         "emailid": "priti.01@gmail.com"
  //     },
  //     {
  //         "id": 3,
  //         "employee_name": "Shruti Patil",
  //         "designation": "SE",
  //         "department": "SAP",
  //         "emailid": "shruti@gmail.com"
  //     },
  //     {
  //         "id": 4,
  //         "employee_name": "Shubhangi Kamble",
  //         "designation": "SE",
  //         "department": "ENG",
  //         "emailid": "shubhangi@gmail.com"
  //     },
  //     {
  //         "id": 5,
  //         "employee_name": "Aditya",
  //         "designation": "SE",
  //         "department": "ADM",
  //         "emailid": "aditya@gmail.com"
  //     },
  //     {
  //         "id": 6,
  //         "employee_name": "Aman",
  //         "designation": "SE",
  //         "department": "ADM",
  //         "emailid": "aman@gmail.com"
  //     },
  //     {
  //         "id": 7,
  //         "employee_name": "Priti",
  //         "designation": "SE",
  //         "department": "ADM",
  //         "emailid": "priti@gmail.com"
  //     },
  //     {
  //         "id": 8,
  //         "employee_name": "Sourabh",
  //         "designation": "SE",
  //         "department": "ADM",
  //         "emailid": "sourabh@gmail.com"
  //     }
  // ]
  //   const spymethod = spyOn(component, 'ngOnInit');
  //   spyOn(empService, 'getEmployees').and.returnValue(of(data));
  //   component.ngOnInit();
  //   expect(spymethod).toHaveBeenCalled();
  // });
  // xit('should execute addEmp', () => {
  //   component.addEmp();
  // });
});
