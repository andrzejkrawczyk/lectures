import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardTypes } from '../Enums/CardTypes';
import { GameModes } from '../Enums/GameModes';
import { PlayerTypes } from '../Enums/PlayerTypes';
import { TurtleColours } from '../Enums/TurtleColours';
import { IPlayer } from '../Interfaces/IPlayer';
import { AI } from '../Models/AI';
import { Card } from '../Models/Card';
import { GameState } from '../Models/GameState';
import { InitialPlayerBarData } from '../Models/InitialPlayerBarData';
import { Move } from '../Models/Move';
import { Player } from '../Models/Player';
import { TurtlePiece } from '../Models/TurtlePiece';
import shuffle from '../Utils/shuffle';
import { ClientService } from './client.service';
import { promise } from 'protractor';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    private gameState: GameState;
    private unassingedPlayers: Array<Player>;
    private deck: Array<Card>;

    private mapUpdateSubject = new Subject<TurtlePiece[]>();
    public mapUpdates$: Observable<TurtlePiece[]>;

    private currentTurnSubject = new ReplaySubject<number>();
    public currentTurn$: Observable<number>;
    private currentPlayerIndex = 0;
    private firstRound = true;

    private playerBarCardUpdatesSubject = new Subject<{ id: number; card: Card | null }>();
    public playerBarCardUpdates$: Observable<{ id: number; card: Card | null }>;

    private gameEndStatusSubject = new Subject<GameState>();
    public gameEndStatus$: Observable<GameState>;

    public lastGameResult: GameState | null = null;

    public wasSetupRun = false;
    public currentGamemode: GameModes;

    private aiPlayers: Array<IPlayer>;
    private initsToRun: Array<{ fun: (p: Player) => void; type: PlayerTypes }>;

    private endGameFlag = false;

    private aiNumber: number;
    private huNumber: number;
    unsubList: Subscription[] = [];

    constructor(private cs: ClientService) {
        this.initsToRun = [];
        this.aiPlayers = [];
        this.mapUpdates$ = this.mapUpdateSubject.asObservable();
        this.currentTurn$ = this.currentTurnSubject.asObservable();
        this.playerBarCardUpdates$ = this.playerBarCardUpdatesSubject.asObservable();
        this.gameEndStatus$ = this.gameEndStatusSubject.asObservable();
    }

    get turtlePositions(): Array<TurtlePiece> | Promise<TurtlePiece[]> {
        if (this.currentGamemode === GameModes.MULTIPLAYER) {
            const promis = this.cs.getTurtlePositions();
            promis.then(result => {
                this.gameState.turtles = result;
            });
            return promis;
        } else {
            return this.gameState.turtles;
        }
    }

    get aiAmmount(): number {
        return this.aiNumber;
    }
    get huAmmount(): number {
        return this.huNumber;
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

    private resetGameState() {
        this.wasSetupRun = false;
        this.unassingedPlayers = Array<Player>();
        this.mapUpdateSubject = new Subject<TurtlePiece[]>();
        this.currentTurnSubject = new ReplaySubject<number>();
        this.playerBarCardUpdatesSubject = new Subject<{ id: number; card: Card | null }>();
        this.currentPlayerIndex = 0;
        this.firstRound = true;

        this.initsToRun = [];
        this.aiPlayers = [];
        this.mapUpdates$ = this.mapUpdateSubject.asObservable();
        this.currentTurn$ = this.currentTurnSubject.asObservable();
        this.playerBarCardUpdates$ = this.playerBarCardUpdatesSubject.asObservable();
        this.gameEndStatus$ = this.gameEndStatusSubject.asObservable();
    }

    private subscribeToCSObservables() {
        this.unsubList.push(
            this.cs.playerBarCardUpdates$.subscribe(data => {
                this.playerBarCardUpdatesSubject.next(data);
            }),
            this.cs.currentTurn$.subscribe(id => {
                this.currentTurnSubject.next(id);
            }),
            this.cs.mapUpdates$.subscribe(data => {
                this.mapUpdateSubject.next(data);
                this.gameState.turtles = data;
            }),
            this.cs.gameEndStatus$.subscribe(data => {
                this.gameEndStatusSubject.next(data);
                this.lastGameResult = data;
                this.unsubList.forEach(e => {
                    e.unsubscribe();
                });
            })
        );
    }

    public setup(mode: GameModes, bonusInformation?: { hu?: number; url?: string }) {
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
        switch (mode) {
            case GameModes.AI:
                for (let i = 0; i < 4; i++) {
                    const rand: number = Math.floor(Math.random() * availableTurtleColours.length);
                    const colour: TurtleColours = availableTurtleColours.splice(rand, 1)[0];
                    const pl = new Player(PlayerTypes.AI, colour);
                    this.aiPlayers.push(new AI(this));
                    players.push(pl);
                    this.unassingedPlayers.push(pl);
                }
                const pla = new Player(PlayerTypes.HUMAN, availableTurtleColours[0]);
                players.push(pla);
                this.unassingedPlayers.push(pla);
                players.forEach((e, i) => {
                    const cards = this.dealCard(5);
                    e.cards = cards;
                    this.unassingedPlayers[i].cards = cards;
                });

                this.aiPlayers.forEach(e => {
                    e.init(this.getPlayer(PlayerTypes.AI));
                });

                players = shuffle(players);

                const turtles: Array<TurtlePiece> = [];
                for (let i = 0; i < 5; i++) {
                    turtles.push(new TurtlePiece(i, 0, 0));
                    // turtles.push(new TurtlePiece(i, 9, i));
                }
                this.gameState = new GameState(players, turtles);
                this.currentGamemode = GameModes.AI;
                this.triggerNextTurn();
                break;

            case GameModes.HOT_SEAT:
                if (bonusInformation && bonusInformation.hu > 0 && bonusInformation.hu <= 5) {
                    this.aiNumber = 5 - bonusInformation.hu;
                    this.huNumber = bonusInformation.hu;
                    for (let i = 0; i < this.aiNumber; i++) {
                        const rand: number = Math.floor(Math.random() * availableTurtleColours.length);
                        const colour: TurtleColours = availableTurtleColours.splice(rand, 1)[0];
                        const pl = new Player(PlayerTypes.AI, colour);
                        this.aiPlayers.push(new AI(this));
                        players.push(pl);
                        this.unassingedPlayers.push(pl);
                    }

                    for (let i = 0; i < bonusInformation.hu; i++) {
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
                        // turtles.push(new TurtlePiece(i, 9, i));
                    }
                    this.gameState = new GameState(players, turtleHS);
                    this.currentGamemode = GameModes.HOT_SEAT;
                    this.triggerNextTurn();
                }
                break;

            case GameModes.MULTIPLAYER:
                this.cs.connect(bonusInformation.url);
                this.currentGamemode = GameModes.MULTIPLAYER;
                this.subscribeToCSObservables();
                this.gameState = new GameState([], []);
        }
        this.wasSetupRun = true;
        this.initsToRun.forEach(e => {
            e.fun(this.getPlayer(e.type));
        });
        delete this.initsToRun;
    }

    public registerPlayer(p: IPlayer, type: PlayerTypes) {
        if (this.currentGamemode === GameModes.MULTIPLAYER) {
            this.cs.getPlayer(type, p.init.bind(p));
        } else {
            if (this.wasSetupRun) {
                const player = this.getPlayer(type);
                p.init(player, this.gameState.players.findIndex(e => e.id === player.id) + 1);
            } else {
                this.initsToRun.push({ fun: p.init, type });
            }
        }
    }

    public getPlayer(type: PlayerTypes) {
        const playerId = this.unassingedPlayers.findIndex(e => e.playerType === type);
        const player = this.unassingedPlayers[playerId];
        this.unassingedPlayers.splice(playerId, 1);
        return player;
    }

    public getInitialPlayerBarData(): Array<InitialPlayerBarData> | Promise<InitialPlayerBarData[]> {
        if (this.currentGamemode === GameModes.MULTIPLAYER) {
            return this.cs.getInitialPlayerBarData();
        } else {
            const ret = [];
            this.gameState.players.forEach((e, i) => {
                ret.push({
                    n: i + 1,
                    id: e.id,
                    type: e.playerType,
                    card: undefined,
                    highlighted: false,
                    discarded: false,
                });
            });
            return ret;
        }
    }

    public playerMove(m: Move, callback?) {
        if (this.currentGamemode === GameModes.MULTIPLAYER) {
            this.cs.playerMove(m, callback);
        } else {
            if (m.playerId === this.gameState.players[this.currentPlayerIndex].id) {
                const player = this.gameState.players.find(e => e.id === m.playerId);
                const cardIndex = player.cards.findIndex(e => e.compare(m.card));

                // put card randomly into deck, give one from the top
                const card = new Card(player.cards[cardIndex].type, player.cards[cardIndex].colour);
                player.cards.splice(cardIndex, 1);
                this.deck.splice(Math.floor(Math.random() * this.deck.length - 1), 0, card);
                player.cards.push(...this.dealCard());

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
    }

    private checkGameEnds() {
        if (environment.production) {
            const turtles = this.gameState.turtles.filter(e => e.mapPosition >= 9);
            return turtles.length > 0;
        } else {
            if (this.endGameFlag) {
                return true;
            }
            this.endGameFlag = false;
            return false;
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
        this.currentTurnSubject.next(this.gameState.players[this.currentPlayerIndex].id);
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
}
