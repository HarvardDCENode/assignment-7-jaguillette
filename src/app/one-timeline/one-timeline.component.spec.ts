import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimelineComponent } from './one-timeline.component';

describe('OneTimelineComponent', () => {
  let component: OneTimelineComponent;
  let fixture: ComponentFixture<OneTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
