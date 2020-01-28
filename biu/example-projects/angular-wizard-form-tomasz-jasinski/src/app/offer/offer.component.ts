import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class Offer implements OnInit {

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


  constructor(offerData: FormGroup) {
    this.personalData = offerData.value.personalData;
    this.appartmentDetails = offerData.value.appartmentDetails;
    if (offerData.value.withMattress) {
      this.mattressDetails = offerData.value.mattressDetails;
    }
    if (offerData.value.additionalData) {
      this.additionalData = offerData.value.additionalData;
    }
    this.totalCost = offerData.value.totalCost;
  }

  ngOnInit() {
  }

}
