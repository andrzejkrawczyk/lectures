import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../models/TodoItem";
import {TodoMockDataService} from "../services/todo-mock-data.service";

@Component({
  selector: 'app-todo-list-template-form-view',
  templateUrl: './todo-list-template-form-view.component.html',
  styleUrls: ['./todo-list-template-form-view.component.scss']
})
export class TodoListTemplateFormViewComponent implements OnInit {

    dataService: TodoMockDataService;

    // noinspection TsLint
    constructor(
        private _dataService: TodoMockDataService
    ) {
        this.dataService = this._dataService;
    }

    ngOnInit() {
    }

    onNewTodoItem(item: TodoItem) {
        this.dataService.addTodoItem(item);
    }
}
