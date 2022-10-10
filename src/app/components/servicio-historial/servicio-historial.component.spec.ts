import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHistorialComponent } from './servicio-historial.component';

describe('ServicioHistorialComponent', () => {
  let component: ServicioHistorialComponent;
  let fixture: ComponentFixture<ServicioHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
