import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityUIModalComponent } from './activity-uimodal.component';

describe('ActivityUIModalComponent', () => {
  let component: ActivityUIModalComponent;
  let fixture: ComponentFixture<ActivityUIModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityUIModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityUIModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
