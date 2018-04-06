import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIndicatorComponent } from './time-indicator.component';

describe('TimeIndicatorComponent', () => {
  let component: TimeIndicatorComponent;
  let fixture: ComponentFixture<TimeIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
