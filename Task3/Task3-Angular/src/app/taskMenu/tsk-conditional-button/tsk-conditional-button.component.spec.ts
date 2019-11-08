import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TskConditionalButtonComponent } from './tsk-conditional-button.component';

describe('TskConditionalButtonComponent', () => {
  let component: TskConditionalButtonComponent;
  let fixture: ComponentFixture<TskConditionalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TskConditionalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TskConditionalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
