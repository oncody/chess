import type {Piece} from './Piece';
import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';
import {moveCursor} from 'readline';

export default class Queen implements Piece {
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

    isLegalCaptureAndMove(source: Coordinate, destination: Coordinate): boolean {
        return source.isDiagnol(destination) || source.isOrthogonal(destination);
    }

    isLegalMoveWithoutCapturing(source: Coordinate, destination: Coordinate): boolean {
        return this.isLegalCaptureAndMove(source, destination);
    }
}

