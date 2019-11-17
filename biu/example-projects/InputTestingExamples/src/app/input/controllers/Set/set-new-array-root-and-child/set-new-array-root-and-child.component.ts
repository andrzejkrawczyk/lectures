import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-set-new-array-root-and-child',
    templateUrl: './set-new-array-root-and-child.component.html',
    styleUrls: ['./set-new-array-root-and-child.component.scss'],
})
export class SetNewArrayRootAndChildComponent {
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
