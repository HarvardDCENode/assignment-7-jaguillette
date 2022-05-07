import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineBriefComponent } from './timeline-brief.component';

describe('TimelineBriefComponent', () => {
  let component: TimelineBriefComponent;
  let fixture: ComponentFixture<TimelineBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
