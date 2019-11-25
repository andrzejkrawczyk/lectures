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
        const temp = [];
        a.forEach(e => {
            temp.push(e);
        });
        this.arr = temp;
        this.setCallCounter += 1;
    }
}
