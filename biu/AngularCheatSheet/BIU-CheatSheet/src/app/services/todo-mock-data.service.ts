import {Injectable} from '@angular/core';
import {TodoItem} from '../models/TodoItem';

@Injectable({
    providedIn: 'root'
})
export class TodoMockDataService {

    private todoItems: TodoItem[] = [
        new TodoItem('First item', 'Ala ma kota'),
        new TodoItem('Second item', 'Ala ma psa'),
        new TodoItem('Fourth item', 'Ala ma lame'),
        new TodoItem('Fifth item', 'Ala ma chomika'),
    ];

    constructor() {
    }

    public getTodoItems(): TodoItem[] {
        return this.todoItems;
    }
}
