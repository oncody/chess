import type {Piece} from './Piece';
import type {Color} from '../Color';
import CoordinatePair from "../board/CoordinatePair";

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

    isLegalMove(coordinatePair: CoordinatePair): boolean {
        if(coordinatePair) {
            return false;
        }

        return true;
    }
}

