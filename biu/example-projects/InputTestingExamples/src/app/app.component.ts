import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentScreen = 2;
    changeScreen(i: number) {
        this.currentScreen = i;
    }

    // bez Set
    pushArray = ['Push 0'];
    pushArrayIterator = 1;
    push() {
        this.pushArray.push(`Push ${this.pushArrayIterator++}`);
    }

    newArray1Array = ['New Array 0'];
    newArray1ArrayIterator = 1;
    newArray2Array = this.newArray1Array;
    newArray() {
        this.newArray1Array.push(`New Array ${this.newArray1ArrayIterator++}`);
        this.newArray2Array = [];
        this.newArray1Array.forEach(e => {
            this.newArray2Array.push(e);
        });
    }

    // z set
    setPushArray = ['SetPush 0'];
    setPushArrayIterator = 1;
    setPush() {
        this.setPushArray.push(`SetPush ${this.setPushArrayIterator++}`);
    }

    setPushChildNewArray() {}

    setNewArrayRoot() {}

    setNewArrayRootAndChild() {}

    // pipes
    pipePush() {}

    pipeNewAray() {}
}
