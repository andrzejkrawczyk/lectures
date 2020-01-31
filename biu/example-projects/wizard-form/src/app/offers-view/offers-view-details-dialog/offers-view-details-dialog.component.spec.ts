import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewDetailsDialogComponent } from './offers-view-details-dialog.component';

describe('OffersViewDetailsDialogComponent', () => {
  let component: OffersViewDetailsDialogComponent;
  let fixture: ComponentFixture<OffersViewDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersViewDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
