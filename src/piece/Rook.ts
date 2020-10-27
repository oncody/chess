import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';

export default class Rook implements Piece {
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

    isLegalMove(source: Coordinate, destination: Coordinate): boolean {
        if (source && destination) {
            return false;
        }

        return true;
    }
}

