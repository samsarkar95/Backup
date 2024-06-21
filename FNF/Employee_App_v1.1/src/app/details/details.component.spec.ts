import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
// import { UntypedFormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  // const mockFormBuilder = new UntypedFormBuilder();
  const routerMock = {
   navigateByUrl : jasmine.createSpy("navigate"),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [ 
        // {provide : UntypedFormBuilder , useValue:mockFormBuilder},
        {provide : Router , useValue:routerMock},
        HttpClient,
        HttpHandler
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should execute ngOnInit', () => {
    component.ngOnInit();
  });
});
