import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-new-array',
    templateUrl: './new-array.component.html',
    styleUrls: ['./new-array.component.scss'],
})
export class NewArrayComponent {
    @Input() array: Array<string>;
}
