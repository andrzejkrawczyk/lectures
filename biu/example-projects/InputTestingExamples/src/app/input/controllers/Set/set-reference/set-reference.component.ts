import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-set-reference',
    templateUrl: './set-reference.component.html',
    styleUrls: ['./set-reference.component.scss'],
})
export class SetReferenceComponent {
    arr: Array<string>;
    setCallCounter = 0;

    @Input() set array(a: Array<string>) {
        this.arr = a;
        this.setCallCounter += 1;
    }
}
