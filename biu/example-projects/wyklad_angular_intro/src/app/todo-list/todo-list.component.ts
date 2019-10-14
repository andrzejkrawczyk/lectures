import {Component, OnInit, ViewChild} from '@angular/core';
import {TodoMockDataService} from "../services/todo-mock-data.service";
import {TodoItem} from "../models/TodoItem";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    public dataService: TodoMockDataService;

    // noinspection TsLint
    constructor(
        private _dataService: TodoMockDataService
    ) {
        this.dataService = this._dataService;
    }

    ngOnInit() {
    }

    onNewTodoItem(item: TodoItem) {
        this._dataService.addTodoItem(item);
    }

}
