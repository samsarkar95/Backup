import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisuEmpComponent } from './lisu-emp.component';

describe('LisuEmpComponent', () => {
  let component: LisuEmpComponent;
  let fixture: ComponentFixture<LisuEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LisuEmpComponent]
    });
    fixture = TestBed.createComponent(LisuEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
