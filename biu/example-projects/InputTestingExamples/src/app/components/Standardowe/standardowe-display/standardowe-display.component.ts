import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-standardowe-display',
    templateUrl: './standardowe-display.component.html',
    styleUrls: ['./standardowe-display.component.scss'],
})
export class StandardoweDisplayComponent {
    // bez Set
    pushArray = ['Element 1'];
    pushArrayIterator = 2;

    newArray1Array = ['Element  1'];
    newArray1ArrayIterator = 2;
    newArray2Array = this.newArray1Array;

    push() {
        this.pushArray.push(`Element ${this.pushArrayIterator++}`);
    }

    newArray() {
        this.newArray1Array.push(`Element  ${this.newArray1ArrayIterator++}`);
        this.newArray2Array = [];
        this.newArray1Array.forEach(e => {
            this.newArray2Array.push(e);
        });
    }
}
