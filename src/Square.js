import type Color from "./Color";
import Coordinate from "./Coordinate";
import type Piece from "./piece/Piece";

class Square {
    color: Color;
    coordinate: Coordinate;
    piece: Piece;

    constructor(color: Color, coordinate: Coordinate) {
        this.color = color;
        this.coordinate = coordinate;
    }

    addPiece(piece: Piece) {
        this.piece = piece
    }

    removePiece(piece: Piece) {
        this.piece = null;
    }


}

export default Square;
