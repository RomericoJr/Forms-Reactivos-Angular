import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacDinamicoComponent } from './reac-dinamico.component';

describe('ReacDinamicoComponent', () => {
  let component: ReacDinamicoComponent;
  let fixture: ComponentFixture<ReacDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
