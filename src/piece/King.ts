import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../Coordinate';
import Board from '../Board';

class King implements Piece {
    color: Color;
    coordinate: Coordinate;

    constructor(color: Color, coordinate: Coordinate) {
        this.color = color;
        this.coordinate = coordinate;
    }

    getColor(): Color {
        return this.color;
    }

    getCoordinate(): Coordinate {
        return this.coordinate;
    }

    canMoveThroughPieces(): boolean {
        return false;
    }

    isLegalMove(board: Board,
                coordinate: Coordinate): boolean {
        if(board && coordinate) {
            return true;
        }

        return true;
    }
}

