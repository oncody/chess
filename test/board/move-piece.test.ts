import Board from '../../src/board/Board';
import Player from '../../src/Player';
import {Color} from '../../src/Color';
import Coordinate from '../../src/board/Coordinate';
import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import NeedToMoveToADifferentSquareException from '../../src/board/Exceptions/NeedToMoveToADifferentSquareException';
import NoPieceToMoveException from '../../src/board/Exceptions/NoPieceToMoveException';
import Knight from '../../src/piece/Knight';
import CannotMoveOpponentsPieceException from '../../src/board/Exceptions/CannotMoveOpponentsPieceException';
import CannotCaptureOwnPieceException from '../../src/board/Exceptions/CannotCaptureOwnPieceException';
import Rook from '../../src/piece/Rook';
import CannotMoveThroughPiecesException from '../../src/board/Exceptions/CannotMoveThroughPiecesException';
import Bishop from '../../src/piece/Bishop';

test('Moving to same square throws an exception', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_1)
    let destination = new Coordinate(Column.A, Row.ROW_1);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(NeedToMoveToADifferentSquareException);
});

test('Cannot move a square without a piece', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_1);
    let destination = new Coordinate(Column.A, Row.ROW_2);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(NoPieceToMoveException);
});

test('Cannot move opponent\'s piece', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_1);
    let destination = new Coordinate(Column.A, Row.ROW_2);
    let blackKnight = new Knight(Color.Black);
    board.getSquare(source).addPiece(blackKnight);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotMoveOpponentsPieceException);
});

test('Cannot capture your own piece', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_1);
    let destination = new Coordinate(Column.A, Row.ROW_2);
    let whiteKnight = new Knight(Color.White);
    board.getSquare(source).addPiece(whiteKnight);
    board.getSquare(destination).addPiece(whiteKnight);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotCaptureOwnPieceException);
});

test('Cannot move through pieces vertically up', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_1);
    let destination = new Coordinate(Column.A, Row.ROW_8);
    let a4 = new Coordinate(Column.A, Row.ROW_4);
    let whiteRook = new Rook(Color.White);

    board.getSquare(source).addPiece(whiteRook);
    board.getSquare(a4).addPiece(whiteRook);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotMoveThroughPiecesException);
});

test('Cannot move through pieces vertically down', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_8);
    let destination = new Coordinate(Column.A, Row.ROW_1);
    let a4 = new Coordinate(Column.A, Row.ROW_4);
    let whiteRook = new Rook(Color.White);

    board.getSquare(source).addPiece(whiteRook);
    board.getSquare(a4).addPiece(whiteRook);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotMoveThroughPiecesException);
});

test('Cannot move through pieces horizontally right', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_1);
    let destination = new Coordinate(Column.H, Row.ROW_1);
    let d1 = new Coordinate(Column.D, Row.ROW_1);
    let whiteRook = new Rook(Color.White);
    board.getSquare(source).addPiece(whiteRook);
    board.getSquare(d1).addPiece(whiteRook);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotMoveThroughPiecesException);
});

test('Cannot move through pieces horizontally left', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.H, Row.ROW_1);
    let destination = new Coordinate(Column.A, Row.ROW_1);
    let d1 = new Coordinate(Column.D, Row.ROW_1);
    let whiteRook = new Rook(Color.White);
    board.getSquare(source).addPiece(whiteRook);
    board.getSquare(d1).addPiece(whiteRook);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotMoveThroughPiecesException);
});

test('Cannot move through pieces diagnolly up and right', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.A, Row.ROW_1);
    let destination = new Coordinate(Column.H, Row.ROW_8);
    let b2 = new Coordinate(Column.B, Row.ROW_2);
    let whiteBishop = new Bishop(Color.White);
    board.getSquare(source).addPiece(whiteBishop);
    board.getSquare(b2).addPiece(whiteBishop);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotMoveThroughPiecesException);
});

test('Cannot move through pieces diagnolly down and left', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let source = new Coordinate(Column.H, Row.ROW_8);
    let destination = new Coordinate(Column.A, Row.ROW_1);
    let b2 = new Coordinate(Column.B, Row.ROW_2);
    let whiteBishop = new Bishop(Color.White);
    board.getSquare(source).addPiece(whiteBishop);
    board.getSquare(b2).addPiece(whiteBishop);

    expect(() => {
        board.movePiece(player, source, destination)
    }).toThrowError(CannotMoveThroughPiecesException);
});
