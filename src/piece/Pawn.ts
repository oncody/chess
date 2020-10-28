import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';
import Player from '../Player';

export default class Pawn implements Piece {
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

    // todo: pawns cannot capture forward
    // todo: they can capture diagnolly but othewrwise not move diagnolly
    // todo: en passant
    isLegalCaptureAndMove(player: Player, source: Coordinate, destination: Coordinate): boolean {
        return source !== null && destination != null;
    }

    isLegalMoveWithoutCapturing(player: Player, source: Coordinate, destination: Coordinate): boolean {
        return source !== null && destination != null;
    }
}

