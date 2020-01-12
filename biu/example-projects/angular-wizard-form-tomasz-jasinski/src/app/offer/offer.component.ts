import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  Id: number;
  totalCost: number;
  personalData: Array<{key: string, value: any}>;
  appartmentDetails: Array<{key: string, value: any}>;
  mattressDetails?: Array<{key: string, value: any}>;
  additionalData?: Array<{key: string, value: any}>;



  constructor(offerForm: FormGroup) {
    this.personalData = offerForm.value.personalData;
    this.appartmentDetails = offerForm.value.appartmentDetails;
    if (offerForm.value.withMattress) { this.mattressDetails = offerForm.value.mattressDetails; }
    if (offerForm.value.additionalData) { this.additionalData = offerForm.value.additionalData; }
    this.totalCost = offerForm.value.totalCost;
  }

  ngOnInit() {
  }

}
