import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-set-new-array',
    templateUrl: './set-new-array.component.html',
    styleUrls: ['./set-new-array.component.scss'],
})
export class SetNewArrayComponent {
    arr: Array<string>;
    setCallCounter = 0;
    @Input() set array(a: Array<string>) {
        this.arr = [];
        a.forEach(e => {
            this.arr.push(e);
        });
        this.setCallCounter += 1;
    }
}
