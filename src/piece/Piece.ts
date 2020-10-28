import type {Color} from '../Color';
import Coordinate from '../board/Coordinate';
import Player from '../Player';

export interface Piece {
    getColor(): Color;
    canMoveThroughPieces(): boolean;
    isLegalCaptureAndMove(player: Player, source: Coordinate, destination: Coordinate): boolean;
    isLegalMoveWithoutCapturing(player: Player, source: Coordinate, destination: Coordinate): boolean;
}
