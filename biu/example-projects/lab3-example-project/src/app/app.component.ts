import {Component} from '@angular/core';
import {Invoices} from "./model/invoices";
import {Invoice} from "./model/invoice";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public invoices: Invoices = new Invoices();

    onNewInvoice(item: Invoice) {
        this.invoices.push(item);
    }
}
