import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input-set',
    templateUrl: './input-set.component.html',
    styleUrls: ['./input-set.component.scss'],
})
export class InputSetComponent implements OnInit {
    @Input() set arr(a: Array<number>) {
        this.arr1 = [];
        a.forEach(e => {
            this.arr1.push(e);
        });
        console.log('InputSet');
    }
    arr1: Array<number>;

    constructor() {}

    ngOnInit() {}
}
