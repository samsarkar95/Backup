import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmdialogComponent } from './confirmdialog.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { EmployeeService } from '../service/employee.service';

describe('ConfirmdialogComponent', () => {
  let component: ConfirmdialogComponent;
  let fixture: ComponentFixture<ConfirmdialogComponent>;
  let empService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmdialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: {} },
        HttpClient,
        HttpHandler
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmdialogComponent);
    component = fixture.componentInstance;
    empService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnInit', () => {
    component.ngOnInit();
  });

 /*  it('should execute deleteEmployee', () => {
    spyOn(empService, 'deleteEmployees').and.returnValue(of(''));
    component.deleteEmployee();
  }); */
});
