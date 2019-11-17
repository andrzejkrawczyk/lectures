import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewArrayRootAndChildComponent } from './set-new-array-root-and-child.component';

describe('SetNewArrayRootAndChildComponent', () => {
  let component: SetNewArrayRootAndChildComponent;
  let fixture: ComponentFixture<SetNewArrayRootAndChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNewArrayRootAndChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewArrayRootAndChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
