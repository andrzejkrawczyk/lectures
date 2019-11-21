import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-set-display',
    templateUrl: './set-display.component.html',
    styleUrls: ['./set-display.component.scss'],
})
export class SetDisplayComponent {
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
}
