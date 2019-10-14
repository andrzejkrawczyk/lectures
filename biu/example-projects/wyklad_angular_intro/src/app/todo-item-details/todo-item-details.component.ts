import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TodoMockDataService} from "../services/todo-mock-data.service";
import {switchMap} from "rxjs/operators";
import {TodoItem} from "../models/TodoItem";

@Component({
    selector: 'app-todo-item-details',
    templateUrl: './todo-item-details.component.html',
    styleUrls: ['./todo-item-details.component.scss']
})
export class TodoItemDetailsComponent implements OnInit {

    public item: TodoItem;
    public isInitialized: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _dataService: TodoMockDataService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.item = this._dataService.getTodo(+params['id']);
            this.isInitialized = true;
        });
    }

    onBack() {
        this.router.navigate(['/']);
    }
}
