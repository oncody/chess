import type {Piece} from './Piece';
import type {Color} from '../Color';
import CoordinatePair from '../board/CoordinatePair';

class Bishop implements Piece {
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

    isLegalMove(coordinatePair: CoordinatePair): boolean {
        return true;
    }
}

