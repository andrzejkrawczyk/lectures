import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TodoItem} from "../models/TodoItem";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todo-list-template-form',
  templateUrl: './todo-list-template-form.component.html',
  styleUrls: ['./todo-list-template-form.component.scss']
})
export class TodoListTemplateFormComponent implements OnInit {

    titleInput: string = "";
    descriptionInput: string = "";
    todoForm: NgForm;


    @Output() onNewTodoItem: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

    constructor() {
    }

    ngOnInit() {
    }


    addNewItem(title: string, body: string) {
        this.onNewTodoItem.emit(new TodoItem(title, body));
    }

    onSubmit() {
        this.addNewItem(this.titleInput, this.descriptionInput);
        this.onReset();
    }

    onReset() {
        this.todoForm.resetForm();
    }
}
