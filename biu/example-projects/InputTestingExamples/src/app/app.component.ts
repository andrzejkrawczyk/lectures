import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    arr1: Array<number> = [1];
    arr2: Array<number> = [2];

    arr3: Array<number> = [3];
    arrPassed: Array<number> = this.arr3;
    adder = 1;
    click1() {
        this.adder += 1;
        this.arr1.push(this.adder);
    }
    click2() {
        this.adder += 1;
        this.arr2.push(this.adder);
    }
    click3() {
        this.adder += 1;
        this.arr3.push(this.adder);

        const temp = [];
        this.arr3.forEach(e => {
            temp.push(e);
        });
        this.arrPassed = temp;
    }
}
