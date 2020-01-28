import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StepOneComponent} from '../step-one/step-one.component';
import {StepTwoComponent} from '../step-two/step-two.component';
import {StepThreeComponent} from '../step-three/step-three.component';
import {StepFourComponent} from '../step-four/step-four.component';
import {Offer} from '../offer/offer.component';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent implements OnInit, AfterViewInit {

  @ViewChild(StepOneComponent, {static: false}) stepOneComponent: StepOneComponent;
  @ViewChild(StepTwoComponent, {static: false}) stepTwoComponent: StepTwoComponent;
  @ViewChild(StepThreeComponent, {static: false}) stepThreeComponent: StepThreeComponent;
  @ViewChild(StepFourComponent, {static: false}) stepFourComponent: StepFourComponent;
  @Output() offerEmitter = new EventEmitter<Offer>();

  offerForm: FormGroup;
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;
  stepFourForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.offerForm = this.formBuilder.group({
      withMattress: [false],
      totalCost: [0]
    });
    this.offerForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  ngAfterViewInit() {
    this.stepOneForm = this.stepOneComponent.stepForm;
    this.stepTwoForm = this.stepTwoComponent.stepForm;
    this.stepThreeForm = this.stepThreeComponent.stepForm;
    this.stepFourForm = this.stepFourComponent.stepForm;
  }

  patchTotalCost() {
    this.stepTwoComponent.patchCost();
    this.stepThreeComponent.patchCost();
    this.offerForm.patchValue({
      totalCost:
        (this.stepTwoForm.value.cost + (this.offerForm.value.withMattress ? this.stepThreeForm.value.cost : 0))
    });
  }

    makeOffer() {
      this.offerForm.addControl('personalData', this.stepOneForm);
      this.offerForm.addControl('appartmentDetails', this.stepTwoForm);
      if (this.offerForm.value.withMattress) {
        this.offerForm.addControl('mattressDetails', this.stepThreeForm);
      }
      if (this.stepFourForm.value.comment && this.stepFourForm.value.comment !== '') {
        this.offerForm.addControl('additionalData', this.stepFourForm);
      }
      const offer = new Offer(this.offerForm)
      this.sendOffer(offer);
      this.offerForm.reset();
    }

  sendOffer(offer) {
    this.offerEmitter.emit(offer);
    console.log('Offer emitted!', offer);
  }
}
