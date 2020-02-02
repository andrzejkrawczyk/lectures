import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {

  @Input() stepOneForm: FormGroup;
  @Input() stepTwoForm: FormGroup;
  @Input() stepThreeForm?: FormGroup;
  @Input() withMattress: boolean;
  @Input() totalCost: number;

  stepForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepForm = this.formBuilder.group({
      comment: [null],
    });
    this.stepForm.valueChanges.subscribe(newVal => console.log(newVal));
  }
}
