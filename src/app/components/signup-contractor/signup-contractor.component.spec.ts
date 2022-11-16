import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupContractorComponent } from './signup-contractor.component';

describe('SignupContractorComponent', () => {
  let component: SignupContractorComponent;
  let fixture: ComponentFixture<SignupContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupContractorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
