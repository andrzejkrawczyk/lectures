import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TodoItem} from "../models/TodoItem";

@Component({
    selector: 'app-todo-list-form',
    templateUrl: './todo-list-form.component.html',
    styleUrls: ['./todo-list-form.component.scss']
})
export class TodoListFormComponent implements OnInit {

    @ViewChild('title', {static: false}) titleInput;
    @ViewChild('body', {static: false}) bodyInput;

    @Output() onNewTodoItem: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

    constructor() {
    }

    ngOnInit() {
    }


    onAddTodoClick(title: string, body: string) {
        this.onNewTodoItem.emit(new TodoItem(title, body));
        this.onClearClick();
    }

    onClearClick() {
        this.titleInput.nativeElement.value = '';
        this.bodyInput.nativeElement.value = '';
    }
}
