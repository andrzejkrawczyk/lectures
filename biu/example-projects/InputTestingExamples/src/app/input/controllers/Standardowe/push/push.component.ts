import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-push',
    templateUrl: './push.component.html',
    styleUrls: ['./push.component.scss'],
})
export class PushComponent {
    @Input() array: Array<string>;
}
