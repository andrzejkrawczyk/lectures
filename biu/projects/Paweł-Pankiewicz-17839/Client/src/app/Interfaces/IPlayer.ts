import { Player } from '../Models/Player';

export interface IPlayer {
    init(p: Player, n?: number): void;
}
