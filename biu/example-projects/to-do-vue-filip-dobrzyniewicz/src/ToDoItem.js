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
    new ToDoItem(0, 'Poznać komponenty', 'Komponenty to małe \'reusable\' fragmenty całej strony internetowej.', 'info', 'email' ,'COMPLETED'),
    new ToDoItem(1, 'Poznać serwisy', 'Serwisy są ważne gdy dodajemy w naszej aplikacji routing.', 'warning', 'warning','PENDING'),
    new ToDoItem(2, 'Poznać routing', 'Routing w SPA sprawia wrażenie poruszania się po wielu podstronach bez przeładowywania strony', 'success','eco','COMPLETED'),
    new ToDoItem(3, 'Poznać rxjs', 'Niezbyt rozumiem rxjs.', 'danger','alarm','PENDING')
];