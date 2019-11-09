import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XkcdApiComponent } from './xkcd-api.component';

describe('XkcdApiComponent', () => {
  let component: XkcdApiComponent;
  let fixture: ComponentFixture<XkcdApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XkcdApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XkcdApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
