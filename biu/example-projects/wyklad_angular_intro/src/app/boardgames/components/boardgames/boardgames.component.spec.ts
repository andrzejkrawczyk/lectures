import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamesComponent } from './boardgames.component';

describe('BoardgamesComponent', () => {
  let component: BoardgamesComponent;
  let fixture: ComponentFixture<BoardgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
