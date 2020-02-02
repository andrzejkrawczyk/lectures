import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  stepForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepForm = this.formBuilder.group({
      purchase: ['', Validators.required],
      area: ['', Validators.compose([
        Validators.required, Validators.min(1)
      ])],
      forMeterCost: ['', Validators.compose([
        Validators.required, Validators.min(1)
      ])],
      floor: ['', Validators.compose([
        Validators.required, Validators.min(0)
      ])],
      status: ['', Validators.required],
      cost: [0]
    });
    this.stepForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  getErrorMessage(control) {
    let message: string;
    if (control.invalid && (control.dirty || control.touched)) {
      if (control.hasError('required')) { message = 'You must enter a value'; }
      if (control.hasError('min')) { message = 'Value is too small'; }
      return message;
    }
  }

  patchCost() {
    this.stepForm.patchValue({
      cost: this.stepForm.value.area * this.stepForm.value.forMeterCost
    });
  }
}
