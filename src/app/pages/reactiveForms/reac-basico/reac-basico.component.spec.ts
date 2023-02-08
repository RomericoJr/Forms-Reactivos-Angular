import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacBasicoComponent } from './reac-basico.component';

describe('ReacBasicoComponent', () => {
  let component: ReacBasicoComponent;
  let fixture: ComponentFixture<ReacBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
