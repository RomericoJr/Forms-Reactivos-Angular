import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examen1Component } from './examen1.component';

describe('Examen1Component', () => {
  let component: Examen1Component;
  let fixture: ComponentFixture<Examen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Examen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Examen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
