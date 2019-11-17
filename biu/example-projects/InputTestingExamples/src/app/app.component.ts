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

    setPushChildNewArrayArray = ['setPushChildNewArray 0'];
    setPushChildNewArrayIterator = 1;
    setPushChildNewArray() {
        this.setPushChildNewArrayArray.push(
            `setPushChildNewArray ${this.setPushChildNewArrayIterator++}`
        );
    }

    SetNewArrayRoot1Array = ['SetNewArrayRoot 0'];
    SetNewArrayRoot1ArrayIterator = 0;
    SetNewArrayRoot2Array = this.SetNewArrayRoot1Array;
    setNewArrayRoot() {
        this.SetNewArrayRoot1Array.push(
            `SetNewArrayRoot ${this.SetNewArrayRoot1ArrayIterator++}`
        );
        this.SetNewArrayRoot2Array = [];
        this.SetNewArrayRoot1Array.forEach(e => {
            this.SetNewArrayRoot2Array.push(e);
        });
    }

    setNewArrayRootAndChild() {}

    // pipes
    pipePush() {}

    pipeNewAray() {}
}
