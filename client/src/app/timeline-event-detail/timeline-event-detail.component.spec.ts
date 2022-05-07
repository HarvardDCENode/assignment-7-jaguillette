import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEventDetailComponent } from './timeline-event-detail.component';

describe('TimelineEventDetailComponent', () => {
  let component: TimelineEventDetailComponent;
  let fixture: ComponentFixture<TimelineEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineEventDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
