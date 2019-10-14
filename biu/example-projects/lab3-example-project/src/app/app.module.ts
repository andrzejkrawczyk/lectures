import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SummaryComponent} from './summary/summary.component';
import {InvoicesListComponent} from './invoices-list/invoices-list.component';
import {InvoiceFormComponent} from './invoice-form/invoice-form.component';
import {InvoiceListItemComponent} from './invoice-list-item/invoice-list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        SummaryComponent,
        InvoicesListComponent,
        InvoiceFormComponent,
        InvoiceListItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
