import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-set-new-array-root',
    templateUrl: './set-new-array-root.component.html',
    styleUrls: ['./set-new-array-root.component.scss'],
})
export class SetNewArrayRootComponent {
    arr: Array<string>;
    setCallCounter = 0;

    @Input() set array(a: Array<string>) {
        this.arr = a;
        this.setCallCounter += 1;
    }
}
