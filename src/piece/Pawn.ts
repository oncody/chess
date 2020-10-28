import type {Piece} from './Piece';
import Coordinate from '../board/Coordinate';
import Player from '../Player';
import {Row} from '../board/Row';
import {Color} from '../Color';

export default class Pawn implements Piece {
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

    // todo: test this
    // todo: en passant
    // todo: pawn promotion to a queen
    isLegalCaptureAndMove(player: Player, source: Coordinate, destination: Coordinate): boolean {
        if (source.columnsBetween(destination) !== 1) {
            return false;
        }

        if (!source.isMovingForward(player, destination)) {
            return false;
        }

        return source.rowsBetween(destination) === 1;
    }

    // todo: test this
    // todo: pawn promotion to a queen
    isLegalMoveWithoutCapturing(player: Player, source: Coordinate, destination: Coordinate): boolean {
        if (source.columnsBetween(destination) > 0) {
            return false;
        }

        if (!source.isMovingForward(player, destination)) {
            return false;
        }

        if (player.getColor() === Color.White) {
            if((source.getRow() === Row.ROW_2) &&
              (source.rowsBetween(destination) === 2)) {
                return true;
            }
        } else {
            if((source.getRow() === Row.ROW_7) &&
              (source.rowsBetween(destination) === 2)) {
                return true;
            }
        }

        return source.rowsBetween(destination) === 1;
    }
}

