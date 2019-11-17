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
    pushArray = ['Push 1'];
    pushArrayIterator = 2;
    push() {
        this.pushArray.push(`Push ${this.pushArrayIterator++}`);
    }

    newArray1Array = ['New Array 1'];
    newArray1ArrayIterator = 2;
    newArray2Array = this.newArray1Array;
    newArray() {
        this.newArray1Array.push(`New Array ${this.newArray1ArrayIterator++}`);
        this.newArray2Array = [];
        this.newArray1Array.forEach(e => {
            this.newArray2Array.push(e);
        });
    }

    // z set
    setPushArray = ['SetPush 1'];
    setPushArrayIterator = 2;
    setPush() {
        this.setPushArray.push(`SetPush ${this.setPushArrayIterator++}`);
    }

    setPushChildNewArrayArray = ['setPushChildNewArray 1'];
    setPushChildNewArrayIterator = 2;
    setPushChildNewArray() {
        this.setPushChildNewArrayArray.push(
            `setPushChildNewArray ${this.setPushChildNewArrayIterator++}`
        );
    }

    SetNewArrayRoot1Array = ['SetNewArrayRoot 1'];
    SetNewArrayRoot1ArrayIterator = 2;
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

    setNewArrayRootAndChild1Array = ['setNewArrayRootAndChild 1'];
    setNewArrayRootAndChild1ArrayIterator = 2;
    setNewArrayRootAndChild2Array = this.setNewArrayRootAndChild1Array;
    setNewArrayRootAndChild() {
        this.setNewArrayRootAndChild1Array.push(
            `setNewArrayRootAndChild ${this
                .setNewArrayRootAndChild1ArrayIterator++}`
        );
        this.setNewArrayRootAndChild2Array = [];
        this.setNewArrayRootAndChild1Array.forEach(e => {
            this.setNewArrayRootAndChild2Array.push(e);
        });
    }

    // pipes
    pipePushArray = ['Pipe Push Array 1'];
    pipePushArrayIterator = 2;
    pipePush() {
        this.pipePushArray.push(
            `Pipe Push Array ${this.pipePushArrayIterator++}`
        );
    }

    pipeNewArray1Array = ['PipeNewArray 1'];
    pipeNewArray1ArrayIterator = 2;
    pipeNewArray2Array = this.pipeNewArray1Array;
    pipeNewAray() {
        this.pipeNewArray1Array.push(
            `PipeNewArray ${this.pipeNewArray1ArrayIterator++}`
        );
        this.pipeNewArray2Array = [];
        this.pipeNewArray1Array.forEach(e => {
            this.pipeNewArray2Array.push(e);
        });
    }
}
