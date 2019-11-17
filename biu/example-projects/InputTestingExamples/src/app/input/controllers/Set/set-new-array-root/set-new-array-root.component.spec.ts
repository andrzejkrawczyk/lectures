import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewArrayRootComponent } from './set-new-array-root.component';

describe('SetNewArrayRootComponent', () => {
  let component: SetNewArrayRootComponent;
  let fixture: ComponentFixture<SetNewArrayRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNewArrayRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewArrayRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
