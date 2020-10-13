import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../Coordinate';
import Board from '../board/Board';

class Knight implements Piece {
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
        return true;
    }

    isLegalMove(board: Board,
                coordinate: Coordinate): boolean {
        if(board && coordinate) {
            return true;
        }

        return true;
    }
}

