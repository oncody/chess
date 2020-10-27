import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';

export default class King implements Piece {
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

    // todo: take castling into consideration
    isLegalMove(source: Coordinate, destination: Coordinate): boolean {
        return source.isAdjacent(destination);
    }
}

