import type {Color} from './Color';
import Coordinate from './Coordinate';
import type {Piece} from './piece/Piece';

export default class Square {
    color: Color;
    coordinate: Coordinate;
    piece?: Piece;

    constructor(color: Color, coordinate: Coordinate) {
        this.color = color;
        this.coordinate = coordinate;
    }

    getColor(): Color {
        return this.color;
    }

    getCoordinate(): Coordinate {
        return this.coordinate;
    }

    getPiece(): Piece | undefined {
        return this.piece;
    }

    addPiece(piece: Piece): void {
        this.piece = piece
    }

    removePiece(piece: Piece): void {
        this.piece = undefined;
    }
}
