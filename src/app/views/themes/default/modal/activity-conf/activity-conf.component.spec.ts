import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityConfComponent } from './activity-conf.component';

describe('ActivityConfComponent', () => {
  let component: ActivityConfComponent;
  let fixture: ComponentFixture<ActivityConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
