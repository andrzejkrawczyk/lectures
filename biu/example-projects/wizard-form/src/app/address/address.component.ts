import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      street: ['', Validators.required],
      zipcode: ['', Validators.compose([
        Validators.required, Validators.pattern('[0-9]{2}\\-([0-9]{3})')
      ])],
      city: ['', Validators.required]
    });
    this.parentFormGroup.registerControl('address', this.addressForm);
  }
  getErrorMessage(control) {
    let message: string;
    if (control.invalid && (control.dirty || control.touched)) {
      if (control.hasError('required')) { message = 'You must enter a value'; }
      if (control.hasError('pattern')) { message = 'Wrong value format'; }
      return message;
    }
  }
}
