import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';
import Board from '../board/Board';

export interface Piece {
    getColor(): Color;
    getCoordinate(): Coordinate;
    canMoveThroughPieces(): boolean;
    isLegalMove(board: Board,
                coordinate: Coordinate): boolean;
}
