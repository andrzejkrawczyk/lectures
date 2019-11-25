import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-standardowe-display',
    templateUrl: './standardowe-display.component.html',
    styleUrls: ['./standardowe-display.component.scss'],
})
export class StandardoweDisplayComponent {
    // bez Set
    pushArray = ['Element 1'];
    iterator = 2;

    newArray1Array = ['Element  1'];
    newArray2Array = this.newArray1Array;

    push() {
        this.pushArray.push(`Element ${this.iterator++}`);
    }

    newArray() {
        this.newArray1Array.push(`Element  ${this.iterator++}`);
        this.newArray2Array = [];
        this.newArray1Array.forEach(e => {
            this.newArray2Array.push(e);
        });
    }
}
