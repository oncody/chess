import type {Color} from '../Color';
import Coordinate from '../Coordinate';
import Board from '../Board';

export interface Piece {
    getColor(): Color;
    getCoordinate(): Coordinate;

    isLegalMove(board: Board,
                coordinate: Coordinate): boolean;
}
