import type {Color} from '../Color';
import CoordinatePair from '../board/CoordinatePair';

export interface Piece {
    getColor(): Color;
    canMoveThroughPieces(): boolean;
    isLegalMove(coordinatePair: CoordinatePair): boolean;
}
