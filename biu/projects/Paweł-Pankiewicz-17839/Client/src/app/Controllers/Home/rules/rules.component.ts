import { Component, OnInit } from '@angular/core';
import { CardTypes } from '../../../Enums/CardTypes';
import { TurtleColours } from '../../../Enums/TurtleColours';
import { Card } from '../../../Models/Card';

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
    C1: Card = new Card();
    C2: Card = new Card();
    L1: Card = new Card();
    L2: Card = new Card();
    C_1: Card = new Card();

    step = 0;

    constructor() {}

    ngOnInit() {
        this.C1.type = CardTypes.COLOUR_ONE_FORWARD;
        this.C1.colour = Math.floor(Math.random() * 6);

        this.C2.type = CardTypes.COLOUR_TWO_FORWARD;
        this.C2.colour = Math.floor(Math.random() * 6);

        this.L1.type = CardTypes.LAST_ONE_FORWARD;
        this.L1.colour = TurtleColours.RAINBOW;

        this.L2.type = CardTypes.LAST_TWO_FORWARD;
        this.L2.colour = TurtleColours.RAINBOW;

        this.C_1.type = CardTypes.COLOUR_ONE_BACK;
        this.C_1.colour = Math.floor(Math.random() * 6);
    }

    setstep(i: number) {
        this.step = i;
    }
    nextstep() {
        this.step += 1;
    }
    prevstep() {
        this.step -= 1;
    }
}
