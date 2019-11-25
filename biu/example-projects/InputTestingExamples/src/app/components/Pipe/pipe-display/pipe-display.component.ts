import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipe-display',
    templateUrl: './pipe-display.component.html',
    styleUrls: ['./pipe-display.component.scss'],
})
export class PipeDisplayComponent {
    pipePushArray = ['Element 1', 'Element 2'];
    iterator = 2;

    pipeNewArray1Array = ['Element 1', 'Element 2'];
    pipeNewArray2Array = this.pipeNewArray1Array;

    pipePush() {
        this.pipePushArray.push(`Element ${this.iterator++}`);
    }

    pipeNewAray() {
        this.pipeNewArray1Array.push(`Element ${this.iterator++}`);
        this.pipeNewArray2Array = [];
        this.pipeNewArray1Array.forEach(e => {
            this.pipeNewArray2Array.push(e);
        });
    }
}
