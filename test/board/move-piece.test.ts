import Board from '../../src/board/Board';
import Player from '../../src/Player';
import {Color} from '../../src/Color';
import CoordinatePair from '../../src/board/CoordinatePair';
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

test('Moving to same square throws an exception', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let first = new Coordinate(Column.A, Row.ROW_1)
    let second = new Coordinate(Column.A, Row.ROW_1);
    let coordinatePair = new CoordinatePair(first, second);

    expect(() => {
        board.movePiece(player, coordinatePair)
    }).toThrowError(NeedToMoveToADifferentSquareException);
});

test('Cannot move a square without a piece', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let first = new Coordinate(Column.A, Row.ROW_1);
    let second = new Coordinate(Column.A, Row.ROW_2);
    let coordinatePair = new CoordinatePair(first, second);

    expect(() => {
        board.movePiece(player, coordinatePair)
    }).toThrowError(NoPieceToMoveException);
});

test('Cannot move opponent\'s piece', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let first = new Coordinate(Column.A, Row.ROW_1);
    let second = new Coordinate(Column.A, Row.ROW_2);
    let coordinatePair = new CoordinatePair(first, second);
    let blackKnight = new Knight(Color.Black);
    board.getSquare(first).addPiece(blackKnight);

    expect(() => {
        board.movePiece(player, coordinatePair)
    }).toThrowError(CannotMoveOpponentsPieceException);
});

test('Cannot capture your own piece', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let firstSquare = new Coordinate(Column.A, Row.ROW_1);
    let secondSquare = new Coordinate(Column.A, Row.ROW_2);
    let coordinatePair = new CoordinatePair(firstSquare, secondSquare);
    let firstWhiteKnight = new Knight(Color.White);
    let secondWhiteKnight = new Knight(Color.White);
    board.getSquare(firstSquare).addPiece(firstWhiteKnight);
    board.getSquare(secondSquare).addPiece(secondWhiteKnight);

    expect(() => {
        board.movePiece(player, coordinatePair)
    }).toThrowError(CannotCaptureOwnPieceException);
});

test('Cannot move through pieces vertically', () => {
    let board = new Board();
    let player = new Player(Color.White);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a4 = new Coordinate(Column.A, Row.ROW_4);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    let coordinatePair = new CoordinatePair(a1, a8);
    let firstWhiteRook = new Rook(Color.White);
    let secondWhiteRook = new Rook(Color.White);
    board.getSquare(a1).addPiece(firstWhiteRook);
    board.getSquare(a4).addPiece(secondWhiteRook);

    expect(() => {
        board.movePiece(player, coordinatePair)
    }).toThrowError(CannotMoveThroughPiecesException);
});

