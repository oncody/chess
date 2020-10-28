import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';
import Player from '../Player';

export default class Bishop implements Piece {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    getColor(): Color {
        return this.color;
    }

    canMoveThroughPieces(): boolean {
        return false;
    }

    isLegalCaptureAndMove(player: Player, source: Coordinate, destination: Coordinate): boolean {
        return source.isDiagnol(destination);
    }

    isLegalMoveWithoutCapturing(player: Player, source: Coordinate, destination: Coordinate): boolean {
        return this.isLegalCaptureAndMove(player, source, destination);
    }
}

