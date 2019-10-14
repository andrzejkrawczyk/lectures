import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Invoice, InvoiceType} from "../model/invoice";

@Component({
    selector: 'app-invoice-form',
    templateUrl: './invoice-form.component.html',
    styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
    @ViewChild('nettoInput', {static: false}) nettoInput;
    @ViewChild('descriptionInput', {static: false}) descriptionInput;
    @ViewChild('isCostInput', {static: false}) isCostInput;
    @ViewChild('isVat23', {static: false}) isVat23;
    @ViewChild('isVat8', {static: false}) isVat8;

    @Output() onNewInvoice: EventEmitter<Invoice> = new EventEmitter<Invoice>();

    constructor() {
    }

    ngOnInit() {
    }

    onAddInvoice(
        nettoInput: string,
        descriptionInput: string,
        isCostInput: boolean,
        isVat23: boolean,
        isVat8: boolean
    ): void {
        let type: InvoiceType = isCostInput ? InvoiceType.COST : InvoiceType.INCOME;
        let netto: number = Number(nettoInput);
        let vatType: number = isVat23 ? 0.23 : 0.08;

        let invoice = new Invoice(type, netto, vatType, descriptionInput);

        this.onNewInvoice.emit(invoice);
        this.reset();
    }

    reset(): void {
        this.nettoInput.value = '';
        this.descriptionInput.value = '';
        this.isCostInput.checked = false;
        this.isVat23.checked = false;
        this.isVat8.checked = false;
    }

}
