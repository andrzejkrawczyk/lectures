export class TodoItem {
    id: number;
    title: string;
    description: string;

    constructor(title: string, description: string) {
        this.id = Math.trunc(Math.random() * 100000);
        this.title = title;
        this.description = description;
    }
}

export class TodoItemChange {
    id: number;
    checked: boolean;

    constructor(id: number, checked: boolean) {
        this.id = id;
        this.checked = checked;
    }

    static fromTodo(todoItem: TodoItem, checked: boolean): TodoItemChange {
        return new TodoItemChange(todoItem.id, checked);
    }
}
