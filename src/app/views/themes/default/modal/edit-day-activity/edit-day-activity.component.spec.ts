import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDayActivityComponent } from './edit-day-activity.component';

describe('EditDayActivityComponent', () => {
  let component: EditDayActivityComponent;
  let fixture: ComponentFixture<EditDayActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDayActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDayActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
