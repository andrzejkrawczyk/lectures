import {Component, Input, OnInit} from '@angular/core';
import {Invoices} from "../model/invoices";

@Component({
    selector: 'app-invoices-list',
    templateUrl: './invoices-list.component.html',
    styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
    @Input() invoices: Invoices = new Invoices();

    constructor() {
    }

    ngOnInit() {
    }

}
