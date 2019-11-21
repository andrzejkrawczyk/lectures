import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDisplayComponent } from './pipe-display.component';

describe('PipeDisplayComponent', () => {
  let component: PipeDisplayComponent;
  let fixture: ComponentFixture<PipeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
