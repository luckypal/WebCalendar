import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundUIModalComponent } from './background-uimodal.component';

describe('BackgroundUIModalComponent', () => {
  let component: BackgroundUIModalComponent;
  let fixture: ComponentFixture<BackgroundUIModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundUIModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundUIModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
