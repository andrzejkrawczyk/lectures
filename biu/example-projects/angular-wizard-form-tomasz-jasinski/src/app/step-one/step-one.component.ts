import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  stepForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      phone: ['', Validators.compose([
        Validators.required, Validators.pattern('\\+48([0-9]{9})')
      ])]
    });
    this.stepForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  getErrorMessage(control) {
    let message: string;
    if (control.invalid && (control.dirty || control.touched)) {
      if (control.hasError('required')) { message = 'You must enter a value'; }
      if (control.hasError('email')) { message = 'Wrong email address'; }
      if (control.hasError('pattern')) { message = 'Wrong value format'; }
    }
    return message;
  }
}
