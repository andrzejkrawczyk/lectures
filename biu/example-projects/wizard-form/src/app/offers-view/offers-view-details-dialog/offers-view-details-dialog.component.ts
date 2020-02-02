import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-offers-view-details-dialog',
  templateUrl: './offers-view-details-dialog.component.html',
  styleUrls: ['./offers-view-details-dialog.component.css']
})
export class OffersViewDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
