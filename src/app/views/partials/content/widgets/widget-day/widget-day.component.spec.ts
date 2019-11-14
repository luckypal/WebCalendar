import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDayComponent } from './widget-day.component';

describe('WidgetDayComponent', () => {
  let component: WidgetDayComponent;
  let fixture: ComponentFixture<WidgetDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
