import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';

export interface Piece {
    getColor(): Color;
    canMoveThroughPieces(): boolean;
    isLegalCaptureAndMove(source: Coordinate, destination: Coordinate): boolean;
    isLegalMoveWithoutCapturing(source: Coordinate, destination: Coordinate): boolean;
}
