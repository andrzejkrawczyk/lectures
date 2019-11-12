import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSetZmianaTablicyComponent } from './input-set-zmiana-tablicy.component';

describe('InputSetZmianaTablicyComponent', () => {
  let component: InputSetZmianaTablicyComponent;
  let fixture: ComponentFixture<InputSetZmianaTablicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSetZmianaTablicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSetZmianaTablicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
