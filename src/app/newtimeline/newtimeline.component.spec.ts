import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtimelineComponent } from './newtimeline.component';

describe('NewtimelineComponent', () => {
  let component: NewtimelineComponent;
  let fixture: ComponentFixture<NewtimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
