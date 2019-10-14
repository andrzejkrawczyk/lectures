import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem, TodoItemChange} from '../models/TodoItem';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

    @Input() todoItem: TodoItem;
    @Output() onTodoItemChange: EventEmitter<TodoItemChange> = new EventEmitter<TodoItemChange>();

    public isProtected: boolean = false;

    constructor() {
        this.isProtected = Math.random() > 0.5;
    }

    ngOnInit() {
    }

    onChange($event) {
        const change = TodoItemChange.fromTodo(this.todoItem, $event.target.checked);
        this.onTodoItemChange.emit(change);
    }
}
