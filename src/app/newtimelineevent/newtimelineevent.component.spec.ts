import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtimelineeventComponent } from './newtimelineevent.component';

describe('NewtimelineeventComponent', () => {
  let component: NewtimelineeventComponent;
  let fixture: ComponentFixture<NewtimelineeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtimelineeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtimelineeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
