import {Component, Input, OnInit} from '@angular/core';
import {Invoices} from "../model/invoices";

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
    @Input() invoices: Invoices;

    constructor() {
    }

    ngOnInit() {
    }

}
