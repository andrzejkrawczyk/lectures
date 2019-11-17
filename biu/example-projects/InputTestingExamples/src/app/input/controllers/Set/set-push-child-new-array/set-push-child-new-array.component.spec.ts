import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPushChildNewArrayComponent } from './set-push-child-new-array.component';

describe('SetPushChildNewArrayComponent', () => {
  let component: SetPushChildNewArrayComponent;
  let fixture: ComponentFixture<SetPushChildNewArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPushChildNewArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPushChildNewArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
