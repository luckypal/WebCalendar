import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetActivityIconComponent } from './widget-activity-icon.component';

describe('WidgetActivityIconComponent', () => {
  let component: WidgetActivityIconComponent;
  let fixture: ComponentFixture<WidgetActivityIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetActivityIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetActivityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
