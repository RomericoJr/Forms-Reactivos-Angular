import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacAutoComponent } from './reac-auto.component';

describe('ReacAutoComponent', () => {
  let component: ReacAutoComponent;
  let fixture: ComponentFixture<ReacAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
