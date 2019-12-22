export class ToDoItem {

    constructor(id, name, desc, type, icon, state) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.type = type;
        this.icon = icon;
        this.state = state;
    }

}

export var ToDoList = [
    new ToDoItem(0, 'Example to-do #1', 'This is example blue todo.', 'info', 'email' ,'COMPLETED'),
    new ToDoItem(1, 'Example to-do #2', 'This is example red todo.', 'danger', 'warning','PENDING')
];
