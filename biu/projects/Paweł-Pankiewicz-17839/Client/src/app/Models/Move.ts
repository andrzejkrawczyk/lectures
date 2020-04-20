import { TurtleColours } from '../Enums/TurtleColours';
import { Card } from './Card';

export class Move {
    playerId: number;
    card: Card;
    selectedTurtleColour: TurtleColours;
    discard: boolean;
    constructor(i: number, c: Card, stc: TurtleColours, discard = false) {
        this.playerId = i;
        this.card = c;
        this.selectedTurtleColour = stc;
        this.discard = discard;
    }
}
