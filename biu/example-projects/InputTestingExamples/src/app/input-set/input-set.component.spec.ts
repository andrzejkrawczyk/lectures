import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSetComponent } from './input-set.component';

describe('InputSetComponent', () => {
  let component: InputSetComponent;
  let fixture: ComponentFixture<InputSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
