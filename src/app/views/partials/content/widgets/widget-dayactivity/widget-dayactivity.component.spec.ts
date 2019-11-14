import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDayactivityComponent } from './widget-dayactivity.component';

describe('WidgetDayactivityComponent', () => {
  let component: WidgetDayactivityComponent;
  let fixture: ComponentFixture<WidgetDayactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDayactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDayactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
