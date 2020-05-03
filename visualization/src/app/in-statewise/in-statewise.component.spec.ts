import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InStatewiseComponent } from './in-statewise.component';

describe('InStatewiseComponent', () => {
  let component: InStatewiseComponent;
  let fixture: ComponentFixture<InStatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InStatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InStatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
