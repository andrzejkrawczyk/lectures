import { Observable, ReplaySubject, Subject } from 'rxjs';
import { AI } from './AI';
import { Card } from './Utils/Card';
import { CardTypes } from './Utils/CardTypes';
import { GameState } from './Utils/GameState';
import { Move } from './Utils/Move';
import { Player } from './Utils/Player';
import { PlayerTypes } from './Utils/PlayerTypes';
import shuffle from './Utils/shuffle';
import { TurtleColours } from './Utils/TurtleColours';
import { TurtlePiece } from './Utils/TurtlePiece';

export class Game {
    public gameState: GameState;
    deck: Card[];
    private aiNumber: number;
    private huNumber: number;
    aiPlayers: AI[];
    unassingedPlayers: Player[];

    private currentTurnSubject = new ReplaySubject<number>();
    public currentTurn$: Observable<number>;
    private currentPlayerIndex = 0;
    private firstRound = true;

    private playerBarCardUpdatesSubject = new Subject<{ id: number; card: Card | null }>();
    public playerBarCardUpdates$: Observable<{ id: number; card: Card | null }>;

    private mapUpdateSubject = new Subject<TurtlePiece[]>();
    public mapUpdates$: Observable<TurtlePiece[]>;

    private gameEndStatusSubject = new Subject<GameState>();
    public gameEndStatus$: Observable<GameState>;

    private gamePreparingStatus = new Subject<void>();
    public gamePreparing$ = this.gamePreparingStatus.asObservable();

    public spotsLeft: number;
    public available = false;

    wasSetupRun: boolean;
    lastGameResult: GameState;

    lastSetupArgs: { hu: number; ai: number } = { hu: 0, ai: 0 };

    constructor() {
        this.aiPlayers = [];
        this.unassingedPlayers = [];

        this.mapUpdates$ = this.mapUpdateSubject.asObservable();
        this.currentTurn$ = this.currentTurnSubject.asObservable();
        this.playerBarCardUpdates$ = this.playerBarCardUpdatesSubject.asObservable();
        this.gameEndStatus$ = this.gameEndStatusSubject.asObservable();
    }
    getTurtlePositions(): Array<TurtlePiece> {
        return this.gameState.turtles;
    }

    private setupDeck() {
        this.deck = [];
        // coloured cards
        for (let i = 0; i < 5; i++) {
            // move 2
            const card1: Card = new Card();
            card1.colour = i;
            card1.type = CardTypes.COLOUR_TWO_FORWARD;
            this.deck.push(card1);

            // move 1
            for (let j = 0; j < 5; j++) {
                const card2: Card = new Card();
                card2.colour = i;
                card2.type = CardTypes.COLOUR_ONE_FORWARD;
                this.deck.push(card2);
            }

            // move 1 back
            for (let j = 0; j < 2; j++) {
                const card2: Card = new Card();
                card2.colour = i;
                card2.type = CardTypes.COLOUR_ONE_BACK;
                this.deck.push(card2);
            }
        }
        // rainbow cards
        // 2 forward
        for (let i = 0; i < 3; i++) {
            const card1: Card = new Card();
            card1.colour = TurtleColours.RAINBOW;
            card1.type = CardTypes.LAST_TWO_FORWARD;
            this.deck.push(card1);
        }
        // 1 forward
        for (let i = 0; i < 7; i++) {
            const card1: Card = new Card();
            card1.colour = TurtleColours.RAINBOW;
            card1.type = CardTypes.LAST_ONE_FORWARD;
            this.deck.push(card1);
        }
        this.deck = shuffle(this.deck);
    }

    private dealCard(ammount: number = 1): Array<Card> {
        const ret: Array<Card> = [];

        for (let i = 0; i < ammount; i++) {
            const card: Card = this.deck.pop();
            ret.push(card);
        }
        return ret;
    }

    public getPlayer(type: PlayerTypes) {
        const playerId = this.unassingedPlayers.findIndex(e => e.playerType === type);
        const player = this.unassingedPlayers[playerId];
        if (type === PlayerTypes.HUMAN) {
            this.unassingedPlayers.splice(playerId, 1);
        } else {
            this.unassingedPlayers.splice(playerId, 1);
        }
        this.spotsLeft = this.unassingedPlayers.length;
        if (this.spotsLeft <= 0) {
            this.gamePreparingStatus.next();
        }
        return player;
    }

    public setup(hu?: number, ai?: number) {
        if (hu !== undefined) {
            this.lastSetupArgs.hu = hu;
        } else {
            hu = this.lastSetupArgs.hu;
        }

        if (ai !== undefined) {
            this.lastSetupArgs.ai = ai;
        } else {
            ai = this.lastSetupArgs.ai;
        }
        this.huNumber = hu;
        this.aiNumber = ai;
        this.resetGameState();
        this.setupDeck();
        let players = Array<Player>();
        const availableTurtleColours = [
            TurtleColours.RED,
            TurtleColours.YELLOW,
            TurtleColours.BLUE,
            TurtleColours.GREEN,
            TurtleColours.VIOLET,
        ];
        if (hu > 0 && hu <= 5) {
            if (ai !== undefined) {
                this.aiNumber = ai;
            } else {
                this.aiNumber = 5 - hu;
            }
            this.huNumber = hu;
            for (let i = 0; i < this.aiNumber; i++) {
                const rand: number = Math.floor(Math.random() * availableTurtleColours.length);
                const colour: TurtleColours = availableTurtleColours.splice(rand, 1)[0];
                const pl = new Player(PlayerTypes.AI, colour);
                this.aiPlayers.push(new AI(this));
                players.push(pl);
                this.unassingedPlayers.push(pl);
            }

            for (let i = 0; i < hu; i++) {
                const rand: number = Math.floor(Math.random() * availableTurtleColours.length);
                const colour: TurtleColours = availableTurtleColours.splice(rand, 1)[0];
                const pl = new Player(PlayerTypes.HUMAN, colour);
                players.push(pl);
                this.unassingedPlayers.push(pl);
            }

            players.forEach((e, i) => {
                const cards = this.dealCard(5);
                e.cards = cards;
                this.unassingedPlayers[i].cards = cards;
            });

            this.aiPlayers.forEach(e => {
                e.init(this.getPlayer(PlayerTypes.AI));
            });
            players = shuffle(players);

            const turtleHS: Array<TurtlePiece> = [];
            for (let i = 0; i < 5; i++) {
                turtleHS.push(new TurtlePiece(i, 0, 0));
                // turtleHS.push(new TurtlePiece(i, 9, i));
            }
            this.gameState = new GameState(players, turtleHS);
        }
    }

    public startGame() {
        if (this.available) {
            this.available = false;
            this.triggerNextTurn();
        }
    }

    private triggerNextTurn() {
        if (this.firstRound) {
            this.firstRound = false;
        } else {
            this.currentPlayerIndex += 1;
        }
        if (this.currentPlayerIndex >= this.gameState.players.length) {
            this.currentPlayerIndex = 0;
        }
        console.log(
            this.gameState.players[this.currentPlayerIndex].id,
            this.gameState.players[this.currentPlayerIndex].playerType
        );
        this.currentTurnSubject.next(this.gameState.players[this.currentPlayerIndex].id);
    }

    private checkGameEnds() {
        const turtles = this.gameState.turtles.filter(e => e.mapPosition >= 9);
        return turtles.length > 0;
    }

    public getInitialPlayerBarData(): Array<{
        n: number;
        id: number;
        type: PlayerTypes;
        card: undefined;
        highlighted: boolean;
        discarded: boolean;
    }> {
        const ret = [];
        this.gameState.players.forEach((e, i) => {
            ret.push({ n: i + 1, id: e.id, type: e.playerType, card: undefined, highlighted: false, discarded: false });
        });
        return ret;
    }

    public playerMove(m: Move, callback?: (c: Card[]) => void) {
        if (m.playerId === this.gameState.players[this.currentPlayerIndex].id) {
            const player = this.gameState.players.find(e => e.id === m.playerId);
            const cardIndex = player.cards.findIndex(e => e.compare(m.card));

            // put card randomly into deck, give one from the top
            const card = new Card(player.cards[cardIndex].type, player.cards[cardIndex].colour);
            player.cards.splice(cardIndex, 1);
            this.deck.splice(Math.floor(Math.random() * this.deck.length - 1), 0, card);
            player.cards.push(...this.dealCard());

            if (callback) {
                callback(player.cards);
            }

            if (!m.discard) {
                if (this.validateMove(m)) {
                    this.processMove(m);
                    this.playerBarCardUpdatesSubject.next({ id: m.playerId, card: m.card });
                }
                this.mapUpdateSubject.next(this.gameState.turtles);
            } else {
                this.playerBarCardUpdatesSubject.next({ id: m.playerId, card: null });
            }

            if (this.checkGameEnds()) {
                this.gameEndStatusSubject.next(this.gameState);
                this.lastGameResult = this.gameState;

                this.mapUpdateSubject.complete();
                this.currentTurnSubject.complete();
                this.playerBarCardUpdatesSubject.complete();
            } else {
                this.triggerNextTurn();
            }
        }
    }

    private processMove(m: Move) {
        const cardTurtle = this.gameState.turtles.find(e => {
            if (m.selectedTurtleColour === undefined) {
                return m.card.colour === e.colour;
            } else {
                return m.selectedTurtleColour === e.colour;
            }
        });

        const turtlesOnTop = this.gameState.turtles.filter(
            e => cardTurtle.mapPosition === e.mapPosition && e.verticalPositon > cardTurtle.verticalPositon
        );
        const turtlesToAlter = [cardTurtle, ...turtlesOnTop];

        let turtlesOnTargetTile: TurtlePiece[];
        switch (m.card.type) {
            case CardTypes.COLOUR_ONE_BACK:
                turtlesOnTargetTile = this.gameState.turtles.filter(e => e.mapPosition === cardTurtle.mapPosition - 1);
                turtlesToAlter.forEach(e => {
                    e.mapPosition -= 1;
                });
                break;
            case CardTypes.COLOUR_ONE_FORWARD:
                turtlesOnTargetTile = this.gameState.turtles.filter(e => e.mapPosition === cardTurtle.mapPosition + 1);
                turtlesToAlter.forEach(e => {
                    e.mapPosition += 1;
                });
                break;
            case CardTypes.COLOUR_TWO_FORWARD:
                turtlesOnTargetTile = this.gameState.turtles.filter(e => e.mapPosition === cardTurtle.mapPosition + 2);
                turtlesToAlter.forEach(e => {
                    e.mapPosition += 2;
                });
                break;
            case CardTypes.LAST_ONE_FORWARD:
                turtlesOnTargetTile = this.gameState.turtles.filter(e => e.mapPosition === cardTurtle.mapPosition + 1);
                turtlesToAlter.forEach(e => {
                    e.mapPosition += 1;
                });
                break;
            case CardTypes.LAST_TWO_FORWARD:
                turtlesOnTargetTile = this.gameState.turtles.filter(e => e.mapPosition === cardTurtle.mapPosition + 2);
                turtlesToAlter.forEach(e => {
                    e.mapPosition += 2;
                });
                break;
            default:
                break;
        }
        // jeżeli nie ma innych żółwi na polu
        if (turtlesOnTargetTile.length <= 0) {
            const turtles = this.gameState.turtles.filter(e => e.mapPosition === cardTurtle.mapPosition);
            const min = Math.min(...turtles.map(e => e.verticalPositon));
            turtles.forEach(e => {
                e.verticalPositon -= min;
            });
        } else {
            const verticalPos = Math.max(...turtlesOnTargetTile.map(e => e.verticalPositon));
            const min = Math.min(...turtlesToAlter.map(e => e.verticalPositon));
            turtlesToAlter.forEach(e => {
                e.verticalPositon -= min;
                e.verticalPositon += verticalPos + 1;
            });
        }
    }

    private resetGameState() {
        this.spotsLeft = this.huNumber + this.aiNumber;
        this.available = true;
        this.wasSetupRun = false;
        this.unassingedPlayers = Array<Player>();
        this.mapUpdateSubject = new Subject<TurtlePiece[]>();
        this.currentTurnSubject = new ReplaySubject<number>();
        this.playerBarCardUpdatesSubject = new Subject<{ id: number; card: Card | null }>();
        this.currentPlayerIndex = 0;
        this.firstRound = true;

        this.aiPlayers = [];
        this.mapUpdates$ = this.mapUpdateSubject.asObservable();
        this.currentTurn$ = this.currentTurnSubject.asObservable();
        this.playerBarCardUpdates$ = this.playerBarCardUpdatesSubject.asObservable();
        this.gameEndStatus$ = this.gameEndStatusSubject.asObservable();
    }

    public validateMove(m: Move): boolean {
        const turtle = this.gameState.turtles.find(e => {
            if (m.selectedTurtleColour === undefined) {
                return m.card.colour === e.colour;
            } else {
                return m.selectedTurtleColour === e.colour;
            }
        });
        const lastPos = Math.min(...this.gameState.turtles.map(e => e.mapPosition));
        switch (m.card.type) {
            case CardTypes.COLOUR_ONE_BACK:
                if (turtle.mapPosition > 1) {
                    return true;
                } else {
                    return false;
                }
            case CardTypes.COLOUR_ONE_FORWARD:
                if (turtle.mapPosition < 9) {
                    return true;
                } else {
                    return false;
                }
            case CardTypes.COLOUR_TWO_FORWARD:
                if (turtle.mapPosition < 8) {
                    return true;
                } else {
                    return false;
                }
            case CardTypes.LAST_ONE_FORWARD:
                if (turtle.mapPosition < 9 && turtle.mapPosition === lastPos) {
                    return true;
                } else {
                    return false;
                }
            case CardTypes.LAST_TWO_FORWARD:
                if (turtle.mapPosition < 8 && turtle.mapPosition === lastPos) {
                    return true;
                } else {
                    return false;
                }
            default:
                break;
        }
    }
}
