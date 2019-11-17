import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrayComponent } from './new-array.component';

describe('NewArrayComponent', () => {
  let component: NewArrayComponent;
  let fixture: ComponentFixture<NewArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
