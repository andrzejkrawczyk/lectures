import {Injectable} from '@angular/core';
import {TodoItem} from '../models/TodoItem';

@Injectable({
    providedIn: 'root'
})
export class TodoMockDataService {

    private _todoItems: TodoItem[] = [
        new TodoItem('First item', 'Ala ma kota'),
        new TodoItem('Second item', 'Ala ma psa'),
        new TodoItem('Fourth item', 'Ala ma lame'),
        new TodoItem('Fifth item', 'Ala ma chomika'),
    ];

    constructor() {
    }

    get todoItems(): TodoItem[] {
        return this._todoItems;
    }

    public addTodoItem(item: TodoItem) {
        this._todoItems.push(item);
    }

    public getTodo(id: number) {
        for(let item of this._todoItems) {
            if (item.id === id) {
                return item;
            }
        }
    }
}
