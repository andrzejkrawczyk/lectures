import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../models/TodoItem';

@Component({
    selector: 'app-todo-list-view',
    templateUrl: './todo-list-view.component.html',
    styleUrls: ['./todo-list-view.component.scss']
})
export class TodoListViewComponent implements OnInit {

    @Input() todoList: TodoItem[];

    constructor() {
    }

    ngOnInit() {
    }

}
