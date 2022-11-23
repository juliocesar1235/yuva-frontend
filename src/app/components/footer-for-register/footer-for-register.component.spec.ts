import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterForRegisterComponent } from './footer-for-register.component';

describe('FooterForRegisterComponent', () => {
  let component: FooterForRegisterComponent;
  let fixture: ComponentFixture<FooterForRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterForRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterForRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
