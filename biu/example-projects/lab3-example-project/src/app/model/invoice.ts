export enum InvoiceType {
    COST,
    INCOME
}


export class Invoice {
    type: InvoiceType;
    description: string;
    netto: number;
    vatTaxRate: number;

    constructor(type: InvoiceType, netto: number, vatTaxRate: number, description: string) {
        this.type = type;
        this.netto = netto;
        this.vatTaxRate = vatTaxRate;
        this.description = description;
    }

    get brutto(): number {
        return this.netto + this.vat;
    }

    get vat(): number {
        return this.netto * this.vatTaxRate;
    }
}
