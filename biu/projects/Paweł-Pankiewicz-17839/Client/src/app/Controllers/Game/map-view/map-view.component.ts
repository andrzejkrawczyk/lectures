import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { GameModes } from 'src/app/Enums/GameModes';
import { Point } from 'src/app/Models/Point';
import { TurtlePiece } from 'src/app/Models/TurtlePiece';
import { GameService } from 'src/app/Servces/game.service';

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
    TILE_NUMBER = 10;
    TurtleSize = 10;
    TileSize = 20;
    debugFillStyles = ['red', 'yellow', 'blue', 'lightGreen', 'magenta'];

    ctx: CanvasRenderingContext2D;
    points: Array<Point> = [];

    turtlePositions: Array<TurtlePiece>;
    constructor(private gs: GameService) {}

    @ViewChild('map', { static: true }) map: ElementRef<HTMLCanvasElement>;

    @HostListener('window:resize', [''])
    onResize() {
        this.points = [];
        this.ctx.canvas.width = window.innerWidth - 400;
        this.ctx.canvas.height = window.innerHeight - 600;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        let temp = Math.PI / 2;
        const piece = -Math.PI / 3;
        const start = new Point(10, 10);
        const stop = new Point(this.ctx.canvas.width - 10, this.ctx.canvas.height - 10);

        if (this.ctx.canvas.width >= this.ctx.canvas.height) {
            for (let i = 0; i < this.TILE_NUMBER; i++) {
                temp += piece;
                this.points.push(
                    new Point((stop.x / this.TILE_NUMBER) * i + start.x, (Math.sin(temp) * stop.y) / 5 + stop.y / 2.5)
                );
            }
        } else {
            for (let i = 0; i < this.TILE_NUMBER; i++) {
                temp += piece;
                this.points.push(
                    new Point((Math.sin(temp) * stop.x) / 5 + stop.x / 2.5, (stop.y / this.TILE_NUMBER) * i + start.y)
                );
            }
        }
        this.render();
    }

    ngOnInit() {
        this.ctx = this.map.nativeElement.getContext('2d');
        // this.turtlePositions = this.gs.turtlePositions;
        if (this.gs.currentGamemode === GameModes.MULTIPLAYER) {
            this.turtlePositions = [];
            (this.gs.turtlePositions as Promise<TurtlePiece[]>).then(result => {
                this.turtlePositions = result;
                this.render();
            });
        } else {
            this.turtlePositions = this.gs.turtlePositions as TurtlePiece[];
        }

        this.onResize();
        this.gs.mapUpdates$.subscribe((data: TurtlePiece[]) => {
            this.turtlePositions = data;
            this.render();
        });
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // pola
        this.ctx.fillStyle = 'green';
        this.points.forEach(e => {
            this.ctx.fillRect(e.x, e.y, this.TileSize, this.TileSize);
        });

        let debugIterator = 0;
        this.turtlePositions.forEach(e => {
            // landscape
            if (this.ctx.canvas.width >= this.ctx.canvas.height) {
                if (e.mapPosition === 0) {
                    // pozycje startowe
                    const x = this.points[e.mapPosition].x + 10 - this.TurtleSize / 2;
                    const y = this.points[e.mapPosition].y + (this.TurtleSize + 5) * e.colour - this.TurtleSize * 2.5;

                    this.ctx.fillStyle = this.debugFillStyles[debugIterator++];
                    this.ctx.fillRect(x, y, this.TurtleSize, this.TurtleSize);
                } else {
                    // reszta pól
                    const x = this.points[e.mapPosition].x + this.TurtleSize / 2;
                    const y = this.points[e.mapPosition].y + this.TurtleSize / 2 - e.verticalPositon * this.TurtleSize;

                    this.ctx.fillStyle = this.debugFillStyles[debugIterator++];
                    this.ctx.fillRect(x, y, this.TurtleSize, this.TurtleSize);
                }
                // portrait
            } else {
                // pozycje startowe
                if (e.mapPosition === 0) {
                    const x =
                        this.points[this.TILE_NUMBER - 1 - e.mapPosition].x +
                        this.TurtleSize / 2 +
                        (e.colour * (this.TurtleSize + 5) - this.TurtleSize * 2.5);
                    const y = this.points[this.TILE_NUMBER - 1 - e.mapPosition].y + this.TurtleSize / 2;

                    this.ctx.fillStyle = this.debugFillStyles[debugIterator++];
                    this.ctx.fillRect(x, y, this.TurtleSize, this.TurtleSize);
                    // reszta pól
                } else {
                    const x = this.points[this.TILE_NUMBER - 1 - e.mapPosition].x + this.TurtleSize / 2;
                    const y =
                        this.points[this.TILE_NUMBER - 1 - e.mapPosition].y +
                        this.TurtleSize / 2 -
                        e.verticalPositon * this.TurtleSize;

                    this.ctx.fillStyle = this.debugFillStyles[debugIterator++];
                    this.ctx.fillRect(x, y, this.TurtleSize, this.TurtleSize);
                }
            }
        });
    }
}
