import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Offer } from '../offer/offer.component';
import { MatDialog} from '@angular/material';
import {OffersViewDetailsDialogComponent} from './offers-view-details-dialog/offers-view-details-dialog.component';

@Component({
  selector: 'app-offers-view',
  templateUrl: './offers-view.component.html',
  styleUrls: ['./offers-view.component.css']
})
export class OffersViewComponent implements OnInit {

  @Input() offersList: Array<Offer>;
  @Output() clickEmitter = new EventEmitter<Event>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDetailsDialog(offerToView: Offer) {
    this.dialog.open(OffersViewDetailsDialogComponent, {
      data: {
        offer: offerToView
      }
    });
  }
}
