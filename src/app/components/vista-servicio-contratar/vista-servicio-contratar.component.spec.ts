import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaServicioContratarComponent } from './vista-servicio-contratar.component';

describe('VistaServicioContratarComponent', () => {
  let component: VistaServicioContratarComponent;
  let fixture: ComponentFixture<VistaServicioContratarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaServicioContratarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaServicioContratarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
