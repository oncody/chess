import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';

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

    // pawns cannot capture forward
    // they can capture diagnolly but othewrwise not move diagnolly
    // en passant
    isLegalMove(source: Coordinate, destination: Coordinate): boolean {
        return true;
    }
}

