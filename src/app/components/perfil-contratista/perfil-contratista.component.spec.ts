import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContratistaComponent } from './perfil-contratista.component';

describe('PerfilContratistaComponent', () => {
  let component: PerfilContratistaComponent;
  let fixture: ComponentFixture<PerfilContratistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilContratistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilContratistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
