import type Piece from './Piece';

class Pawn implements Piece {
    isLegalMove(row, column) {
        return false;
    }
}

