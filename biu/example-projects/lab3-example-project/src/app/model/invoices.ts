import {Invoice, InvoiceType} from "./invoice";

const ZUS_SPOLECZNY: number = 904.6;
const ZUS_ZDROWOTNY: number = 342.32;

export class Invoices {

    private incomeTaxRate: number = 0.19;
    public elements: Invoice[] = [];

    constructor() {
    }

    get incomeNetto(): number {
        const costInvoice = this.elements.filter((elem) => elem.type == InvoiceType.INCOME);
        return this.sumNetto(costInvoice);
    }

    get costNetto(): number {
        const costInvoice = this.elements.filter((elem) => elem.type == InvoiceType.COST);
        return this.sumNetto(costInvoice);
    }

    get vat(): number {
        return this.sumVatIncome - this.sumVatCost;
    }

    get incomeTax(): number {
        return (this.incomeNetto - this.costNetto - ZUS_SPOLECZNY) * this.incomeTaxRate;
    }

    get finalIncome(): number {
        return this.incomeNetto - this.costNetto - ZUS_SPOLECZNY - ZUS_ZDROWOTNY - this.incomeTax
    }

    get cost(): number {
        return this.costNetto;
    }

    push(item: Invoice) {
        this.elements.push(item);
    }

    private sumNetto(invoices: Invoice[]) {
        let result = 0;
        for (let invoice of invoices) {
            result = result + invoice.netto;
        }
        return result;
    }

    private get sumVatIncome(): number {
        const costInvoice = this.elements.filter((elem) => elem.type == InvoiceType.INCOME);
        return this.sumVat(costInvoice);
    }

    private get sumVatCost(): number {
        const costInvoice = this.elements.filter((elem) => elem.type == InvoiceType.COST);
        return this.sumVat(costInvoice);
    }

    private sumVat(invoices: Invoice[]) {
        let result = 0;
        for (let invoice of invoices) {
            result = result + invoice.vat;
        }
        return result;
    }
}
