import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../Models/Card';

@Component({
    selector: 'app-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
    cards: Array<Card> = [];
    @Input() set cardsInput(cards: Array<Card>) {
        this.cards = cards;
        // this.cards.push(
        //     new Card(CardTypes.COLOUR_ONE_BACK, TurtleColours.RAINBOW)
        // );
        // this.cards.push(
        //     new Card(CardTypes.COLOUR_ONE_FORWARD, TurtleColours.RAINBOW)
        // );
        // this.cards.push(
        //     new Card(CardTypes.COLOUR_TWO_FORWARD, TurtleColours.RAINBOW)
        // );
        // this.cards.push(
        //     new Card(CardTypes.LAST_ONE_FORWARD, TurtleColours.RAINBOW)
        // );
        // this.cards.push(
        //     new Card(CardTypes.LAST_TWO_FORWARD, TurtleColours.RAINBOW)
        // );
        // this.cards.push(new Card(CardTypes.COLOUR_ONE_BACK, TurtleColours.RED));
        // this.cards.push(new Card(CardTypes.COLOUR_ONE_FORWARD, TurtleColours.BLUE));
        // this.cards.push(new Card(CardTypes.COLOUR_TWO_FORWARD, TurtleColours.GREEN));
        // this.cards.push(new Card(CardTypes.LAST_ONE_FORWARD, TurtleColours.RAINBOW));
        // this.cards.push(new Card(CardTypes.LAST_TWO_FORWARD, TurtleColours.RAINBOW));
    }
    @Output() cardClicked: EventEmitter<{ card: Card; discard: boolean }> = new EventEmitter<{
        card: Card;
        discard: boolean;
    }>();

    onClickCard(card: Card) {
        this.cardClicked.emit({ card, discard: false });
    }

    discardCard(card: Card) {
        this.cardClicked.emit({ card, discard: true });
    }
}
