import type Color from "../Color";
import Coordinate from "../Coordinate";
import Board from "../Board";

interface Piece {
    color(): Color;
    coordinate(): Coordinate;

    isLegalMove(board: Board,
                coordinate: Coordinate): boolean;
}

export default Piece;
