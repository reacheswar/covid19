import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InDistrictwiseComponent } from './in-districtwise.component';

describe('InDistrictwiseComponent', () => {
  let component: InDistrictwiseComponent;
  let fixture: ComponentFixture<InDistrictwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InDistrictwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InDistrictwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
