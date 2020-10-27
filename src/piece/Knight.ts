import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';

export default class Knight implements Piece {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    getColor(): Color {
        return this.color;
    }

    canMoveThroughPieces(): boolean {
        return true;
    }

    isLegalMove(source: Coordinate, destination: Coordinate): boolean {
        // Both the column and the row need to be less than 3 distance away
        // The row distance + column distance need to equal 3
        if (source.columnsBetween(destination) > 2) {
            return false;
        }

        if(source.rowsBetween(destination) > 2) {
            return false;
        }

        return source.orthognalDistanceBetween(destination) === 3;
    }
}

