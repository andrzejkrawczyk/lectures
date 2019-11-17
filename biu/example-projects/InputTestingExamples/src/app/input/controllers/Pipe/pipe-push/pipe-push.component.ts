import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pipe-push',
    templateUrl: './pipe-push.component.html',
    styleUrls: ['./pipe-push.component.scss'],
})
export class PipePushComponent {
    @Input() array: Array<string> = [];
}
