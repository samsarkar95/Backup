import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpComponent } from './edit-emp.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditEmpComponent', () => {
  let component: EditEmpComponent;
  let fixture: ComponentFixture<EditEmpComponent>;
  const mockFormBuilder = new FormBuilder();
  const routerMock = {
   navigateByUrl : jasmine.createSpy("navigate"),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [ 
        {provide : FormBuilder , useValue:mockFormBuilder},
        {provide : Router , useValue:routerMock},
        HttpClient,
        HttpHandler
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onUpdate', () => { 
    component.onUpdate();
   });
});
