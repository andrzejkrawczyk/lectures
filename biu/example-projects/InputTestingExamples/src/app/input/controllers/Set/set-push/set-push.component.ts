import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-set-push',
    templateUrl: './set-push.component.html',
    styleUrls: ['./set-push.component.scss'],
})
export class SetPushComponent {
    arr: Array<string>;
    setCallCounter = 0;

    @Input() set array(a: Array<string>) {
        this.arr = a;
        this.setCallCounter += 1;
    }
}
