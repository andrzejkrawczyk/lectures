import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {generateErrorMessage} from 'codelyzer/angular/styles/cssLexer';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  wantMattress = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      nameControl: ['', Validators.required],
      surnameControl: ['', Validators.required],
      emailControl: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      phoneControl: ['', Validators.compose([
        Validators.required, Validators.pattern('\\+48([0-9]{9})')
      ])],
      address: this.formBuilder.group({
        streetControl: ['', Validators.required],
        postcodeControl: ['', Validators.compose([
          Validators.required, Validators.pattern('[0-9]{2}\\-([0-9]{3})')
        ])],
        cityControl: ['', Validators.required]
      })
    });
    // @ts-ignore
    this.secondFormGroup = this.formBuilder.group({
      purchaseControl: ['', Validators.required],
      areaControl: ['', Validators.compose([
        Validators.required, Validators.min(0), Validators.pattern('\\d+')
      ])],
      formeterControl: ['', Validators.compose([
        Validators.required, Validators.min(0), Validators.pattern('\\d+')
      ])],
      floorControl: ['', Validators.compose([
        Validators.required, Validators.min(0), Validators.pattern('\\d+')
      ])],
      statusControl: ['', Validators.required],
      address: this.formBuilder.group({
        streetControl: ['', Validators.required],
        postcodeControl: ['', Validators.compose([
          Validators.required, Validators.pattern('[0-9]{2}\\-([0-9]{3})')
        ])],
        cityControl: ['', Validators.required]
      })
    });
    this.thirdFormGroup = this.formBuilder.group({
      mattressControl: ['', Validators.required],
      coverControl: ['', Validators.required],
      nameControl: ['', Validators.required],
      typeControl: ['', Validators.required],
      firmControl: ['', Validators.required],
      /*mattressCoverControl: ['', this.compatibilityValidator]*/
    });
    this.fourthFormGroup = this.formBuilder.group({
      commentControl: ['']
    });
  }

  compatibilityValidator(control: AbstractControl): { [key: string]: any }
  | null {
    const c = this.thirdFormGroup.value.coverControl;
    const m = this.thirdFormGroup.value.mattressControl;
    if ( m === c ) {
      return null;
    } else {
      return {errorMessage: false};
    }
  }
}
