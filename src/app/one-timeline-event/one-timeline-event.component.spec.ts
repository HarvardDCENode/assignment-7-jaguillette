import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimelineEventComponent } from './one-timeline-event.component';

describe('OneTimelineEventComponent', () => {
  let component: OneTimelineEventComponent;
  let fixture: ComponentFixture<OneTimelineEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTimelineEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimelineEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
