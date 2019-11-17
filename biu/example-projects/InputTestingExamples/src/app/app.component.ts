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

    // z set
    setPushArray = ['Element 1'];
    setPushArrayIterator = 2;
    setPush() {
        this.setPushArray.push(`Element ${this.setPushArrayIterator++}`);
    }

    setPushChildNewArrayArray = ['Element 1'];
    setPushChildNewArrayIterator = 2;
    setPushChildNewArray() {
        this.setPushChildNewArrayArray.push(
            `Element ${this.setPushChildNewArrayIterator++}`
        );
    }

    SetNewArrayRoot1Array = ['Element 1'];
    SetNewArrayRoot1ArrayIterator = 2;
    SetNewArrayRoot2Array = this.SetNewArrayRoot1Array;
    setNewArrayRoot() {
        this.SetNewArrayRoot1Array.push(
            `Element ${this.SetNewArrayRoot1ArrayIterator++}`
        );
        this.SetNewArrayRoot2Array = [];
        this.SetNewArrayRoot1Array.forEach(e => {
            this.SetNewArrayRoot2Array.push(e);
        });
    }

    setNewArrayRootAndChild1Array = ['Element 1'];
    setNewArrayRootAndChild1ArrayIterator = 2;
    setNewArrayRootAndChild2Array = this.setNewArrayRootAndChild1Array;
    setNewArrayRootAndChild() {
        this.setNewArrayRootAndChild1Array.push(
            `Element ${this.setNewArrayRootAndChild1ArrayIterator++}`
        );
        this.setNewArrayRootAndChild2Array = [];
        this.setNewArrayRootAndChild1Array.forEach(e => {
            this.setNewArrayRootAndChild2Array.push(e);
        });
    }

    // pipes
    pipePushArray = ['Element 1', 'Element 2'];
    pipePushArrayIterator = 2;
    pipePush() {
        this.pipePushArray.push(`Element ${this.pipePushArrayIterator++}`);
    }

    pipeNewArray1Array = ['Element 1', 'Element 2'];
    pipeNewArray1ArrayIterator = 2;
    pipeNewArray2Array = this.pipeNewArray1Array;
    pipeNewAray() {
        this.pipeNewArray1Array.push(
            `Element ${this.pipeNewArray1ArrayIterator++}`
        );
        this.pipeNewArray2Array = [];
        this.pipeNewArray1Array.forEach(e => {
            this.pipeNewArray2Array.push(e);
        });
    }
}
