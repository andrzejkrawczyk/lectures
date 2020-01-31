import {FormGroup} from '@angular/forms';

export class Offer {

  Id: number;
  totalCost: number;
  withMattress: boolean;
  personalData: {
    firstName,
    lastName,
    email,
    phone,
    address: {
      street,
      zipcode,
      city
    }
  };
  appartmentDetails: {
    purchase: any,
    area: any,
    forMeterCost: any,
    floor: any,
    status: any,
    cost: any,
    address: {
      street: any,
      zipcode: any,
      city: any
    }
  };
  mattressDetails?: {
    mattressSize: any,
    coverSize: any,
    name: any,
    type: any,
    firm: any,
    cost: any
  };
  additionalData?: {
    comment: any
  };

  constructor(offerForm: FormGroup) {
    this.personalData = offerForm.value.personalData;
    this.appartmentDetails = offerForm.value.appartmentDetails;
    if (offerForm.value.withMattress) {
      this.mattressDetails = offerForm.value.mattressDetails;
    }
    if (offerForm.value.additionalData) {
      this.additionalData = offerForm.value.additionalData;
    }
    this.totalCost = offerForm.value.totalCost;
  }
}
