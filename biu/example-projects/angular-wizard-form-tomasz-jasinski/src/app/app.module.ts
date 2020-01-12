import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatSlideToggleModule, MatStepperModule, MatRadioModule, MatTabsModule, MatDialogModule, MatCardModule
} from '@angular/material';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { AddressComponent } from './address/address.component';
import { OfferComponent } from './offer/offer.component';
import { OffersViewComponent } from './offers-view/offers-view.component';
import { OffersViewDetailsDialogComponent } from './offers-view/offers-view-details-dialog/offers-view-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    AddressComponent,
    OfferComponent,
    OffersViewComponent,
    OffersViewDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OffersViewDetailsDialogComponent]
})
export class AppModule { }
