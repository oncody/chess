import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';

export interface Piece {
    getColor(): Color;
    canMoveThroughPieces(): boolean;
    isLegalMove(source: Coordinate, destination: Coordinate): boolean;
}
