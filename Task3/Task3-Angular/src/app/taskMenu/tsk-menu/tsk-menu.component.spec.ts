import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TskMenuComponent } from './tsk-menu.component';

describe('TskMenuComponent', () => {
  let component: TskMenuComponent;
  let fixture: ComponentFixture<TskMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TskMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TskMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
