import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input-set-zmiana-tablicy',
    templateUrl: './input-set-zmiana-tablicy.component.html',
    styleUrls: ['./input-set-zmiana-tablicy.component.scss'],
})
export class InputSetZmianaTablicyComponent implements OnInit {
    @Input() set arr(a: Array<number>) {
        this.arr1 = [];
        a.forEach(e => {
            this.arr1.push(e);
        });
        console.log('InputSetZmianaTablicy');
    }
    arr1: Array<number>;
    constructor() {}

    ngOnInit() {}
}
