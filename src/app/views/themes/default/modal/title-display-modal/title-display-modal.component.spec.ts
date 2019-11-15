import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDisplayModalComponent } from './title-display-modal.component';

describe('TitleDisplayModalComponent', () => {
  let component: TitleDisplayModalComponent;
  let fixture: ComponentFixture<TitleDisplayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleDisplayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
