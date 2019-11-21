import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe-display',
    templateUrl: './pipe-display.component.html',
    styleUrls: ['./pipe-display.component.scss'],
})
export class PipeDisplayComponent {
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
