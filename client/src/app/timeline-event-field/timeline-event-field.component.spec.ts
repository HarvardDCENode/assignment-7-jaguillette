import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEventFieldComponent } from './timeline-event-field.component';

describe('TimelineEventFieldComponent', () => {
  let component: TimelineEventFieldComponent;
  let fixture: ComponentFixture<TimelineEventFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineEventFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEventFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
