import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninContractorComponent } from './signin-contractor.component';

describe('SigninContractorComponent', () => {
  let component: SigninContractorComponent;
  let fixture: ComponentFixture<SigninContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninContractorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
