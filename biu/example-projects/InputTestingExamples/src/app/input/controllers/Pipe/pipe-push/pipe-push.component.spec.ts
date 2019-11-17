import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PipePushComponent } from './pipe-push.component';


describe('PipePushComponent', () => {
  let component: PipePushComponent;
  let fixture: ComponentFixture<PipePushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
