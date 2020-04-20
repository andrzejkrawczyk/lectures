import * as express from 'express';
import { Subscription } from 'rxjs';
import * as socketio from 'socket.io';
import { Events } from './Events';
import { Game } from './game';
import { Card } from './Utils/Card';
import { Move } from './Utils/Move';
import { Player } from './Utils/Player';
import { PlayerTypes } from './Utils/PlayerTypes';
import { TurtlePiece } from './Utils/TurtlePiece';

const app = express();
app.set('port', process.env.PORT || 3000);
const http = require('http').Server(app);
const io = require('socket.io')(http);

const game = new Game();

const args = process.argv.slice(2);
if (args.length !== 2) {
    console.log('USAGE:');
    console.log('ts-node server.ts <HUMAN_AMMOUNT> <AI_AMMOUNT>');
    process.exit();
} else {
    if (+args[0] > 0 && +args[0] <= 5) {
        const spotsForAi = 5 - +args[0];
        if (+args[1] >= 0 && +args[1] <= spotsForAi) {
            game.setup(+args[0], +args[1]);
        }
    }
}

const unsubList: Subscription[] = [];

io.on('connection', (socket: socketio.Socket) => {
    const ip = socket.handshake.address.replace(/^[\:f]+/, '');
    console.log(`Connected ${ip}`);

    // client testing for access
    socket.on(Events.checkIfAvailable, (callback: (data: { available: boolean; spotsLeft: number }) => void) => {
        callback({ available: game.available, spotsLeft: game.spotsLeft });
    });

    // as soon as client connects | in lobby
    socket.on(Events.getPlayer, (type: PlayerTypes, callback: (p: Player, no: number) => void) => {
        const player = game.getPlayer(type);
        callback(player, game.gameState.players.findIndex(e => e.id === player.id) + 1);
    });

    // begin game
    unsubList.push(
        game.gamePreparing$.subscribe(() => {
            const temp = new Promise(res => {
                io.sockets.emit(Events.gamepreparingStatus, true);
                setTimeout(() => {
                    game.startGame();
                }, 3000);
            });
        })
    );

    // after lobby
    socket.on(
        Events.getInitialPlayerBarData,
        (
            callback: (
                data: Array<{
                    n: number;
                    id: number;
                    type: PlayerTypes;
                    card: undefined;
                    highlighted: boolean;
                    discarded: boolean;
                }>
            ) => void
        ) => {
            callback(game.getInitialPlayerBarData());
        }
    );

    // During gameplay
    socket.on(Events.getTurtlePositions, (callback: (data: TurtlePiece[]) => void) => {
        callback(game.getTurtlePositions());
    });
    socket.on(Events.getAiAmmount, () => {});
    socket.on(Events.getHuAmmount, () => {});
    socket.on(Events.playerMove, (m: Move, callback: (c: Card[]) => void) => {
        console.log('PlayerMove', m);
        game.playerMove(m, callback);
    });

    // observables
    unsubList.push(
        game.playerBarCardUpdates$.subscribe((data: { id: number; card: Card | null }) => {
            io.sockets.emit(Events.playerBarUpdates$, data);
            // console.log('PlayerBarUpdates$', data);
        })
    );
    unsubList.push(
        game.currentTurn$.subscribe(id => {
            io.sockets.emit(Events.currentTurn$, id);
            // console.log('CurrentTurn$', id);
        })
    );
    unsubList.push(
        game.mapUpdates$.subscribe((data: TurtlePiece[]) => {
            io.sockets.emit(Events.mapUpdates$, data);
            // console.log('mapUpdates$', data);
        })
    );

    unsubList.push(
        game.gameEndStatus$.subscribe(data => {
            io.sockets.emit(Events.gameEndStatus$, data);
            game.setup();
        })
    );

    socket.on('disconnect', reason => {
        console.log(`Disconnected ${ip}, reason: ${reason}`);
        unsubList.forEach(e => {
            e.unsubscribe();
        });
        if (io.engine.clientsCount <= 0) {
            game.setup();
        }
    });
});

const server = http.listen(1234, () => {
    console.log('TestServer Started on 1234');
});
