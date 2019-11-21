import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentScreen = 1;
    changeScreen(i: number) {
        this.currentScreen = i;
    }

    // bez Set
    pushArray = ['Element 1'];
    pushArrayIterator = 2;
    push() {
        this.pushArray.push(`Element ${this.pushArrayIterator++}`);
    }

    newArray1Array = ['Element  1'];
    newArray1ArrayIterator = 2;
    newArray2Array = this.newArray1Array;
    newArray() {
        this.newArray1Array.push(`Element  ${this.newArray1ArrayIterator++}`);
        this.newArray2Array = [];
        this.newArray1Array.forEach(e => {
            this.newArray2Array.push(e);
        });
    }
}
