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

