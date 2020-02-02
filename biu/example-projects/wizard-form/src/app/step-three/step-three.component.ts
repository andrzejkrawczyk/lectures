import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  stepForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepForm = this.formBuilder.group({
      mattressSize: ['', Validators.required],
      coverSize: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      firm: ['', Validators.required],
      cost: [0],
    }, { validators: this.sizeMatchValidator });
    this.stepForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  sizeMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const mattressSize = control.get('mattressSize');
    const coverSize = control.get('coverSize');
    return mattressSize.value !== coverSize.value
      ? { 'sizesMismatch': true } : null;
  }

  getErrorMessage(control) {
    let message: string;
    if (control.invalid && (control.dirty || control.touched)) {
      if (control.hasError('required')) { message = 'You must enter a value'; }
      if (control.hasError('sizesMismatch')) { message = 'Cover size must match the mattress size'; }
      return message;
    }
  }

  patchCost() {
    let value = 23;
    switch (this.stepForm.value.mattressSize) {
      case 'S': { value *= 3; } break;
      case 'L': { value *= 5; } break;
      case 'M': { value *= 4; } break;
    }
    switch (this.stepForm.value.type) {
      case 'Lateksowy': { value += 45; } break;
      case 'Piankowy': { value += 35; } break;
      case 'Kieszeniowy': { value += 55; } break;
    }
    this.stepForm.patchValue({
      cost: value
    });
  }
}
