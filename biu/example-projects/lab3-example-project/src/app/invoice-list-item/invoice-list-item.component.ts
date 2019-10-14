import {Component, Input, OnInit} from '@angular/core';
import {Invoice, InvoiceType} from "../model/invoice";

@Component({
    selector: 'app-invoice-list-item',
    templateUrl: './invoice-list-item.component.html',
    styleUrls: ['./invoice-list-item.component.scss']
})
export class InvoiceListItemComponent implements OnInit {

    @Input() invoice: Invoice;

    constructor() {
    }

    ngOnInit() {
    }

    get typeSign(): string {
        if (this.invoice.type == InvoiceType.COST) {
            return "-";
        }

        if (this.invoice.type == InvoiceType.INCOME) {
            return "+";
        }
    }
}
