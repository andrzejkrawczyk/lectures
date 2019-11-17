import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent {
    @Input() array: Array<string> = [];
}
