import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-set-push-child-new-array',
    templateUrl: './set-push-child-new-array.component.html',
    styleUrls: ['./set-push-child-new-array.component.scss'],
})
export class SetPushChildNewArrayComponent {
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
