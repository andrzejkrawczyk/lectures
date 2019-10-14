import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTemplateFormComponent } from './todo-list-template-form.component';

describe('TodoListTemplateFormComponent', () => {
  let component: TodoListTemplateFormComponent;
  let fixture: ComponentFixture<TodoListTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
