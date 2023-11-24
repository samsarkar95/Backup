import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  const mockFormBuilder = new FormBuilder();
  const routerMock = {
   navigateByUrl : jasmine.createSpy("navigate"),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should execute signUp', () => { 
   component.signUp();
  });
});
