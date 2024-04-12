import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs';
describe('LoginComponent', () => {
  let component: LoginComponent;
  // httpService : HttpService
  let httpClient : HttpClient
  let fixture: ComponentFixture<LoginComponent>;
  const mockFormBuilder = new FormBuilder();
  const routerMock = {
   navigate : jasmine.createSpy("navigate"),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [ 
        {provide : FormBuilder , useValue:mockFormBuilder},
        {provide : Router , useValue:routerMock},
        HttpClient,
        HttpHandler,
        OrderPipe,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // httpService = new HttpService(httpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnInit', () => { 
    const spyonit = spyOn(component,'ngOnInit').and.callThrough()
    component.ngOnInit();
    expect(spyonit).toHaveBeenCalled();
   });
   /* it('should execute onSubmit', () => {
    spyOn (httpClient , 'get').and.returnValue(of(''));
    spyOn(component,'onSubmit').and.callThrough()
    component.onSubmit();
   }); */
  
});
