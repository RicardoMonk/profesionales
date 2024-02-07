import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProfesionalComponent } from './detalle-profesional.component';

describe('DetalleProfesionalComponent', () => {
  let component: DetalleProfesionalComponent;
  let fixture: ComponentFixture<DetalleProfesionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProfesionalComponent]
    });
    fixture = TestBed.createComponent(DetalleProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
