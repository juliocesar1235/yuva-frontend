import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryServiceComponent } from './history-service.component';

describe('HistoryServiceComponent', () => {
  let component: HistoryServiceComponent;
  let fixture: ComponentFixture<HistoryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryServiceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HistoryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
