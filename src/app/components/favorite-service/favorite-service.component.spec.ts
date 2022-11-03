import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteServiceComponent } from './favorite-service.component';

describe('FavoriteServiceComponent', () => {
  let component: FavoriteServiceComponent;
  let fixture: ComponentFixture<FavoriteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
