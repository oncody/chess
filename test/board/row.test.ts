import Board from '../../src/board/Board';
import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Coordinate from '../../src/board/Coordinate';

test('Board get square a1 has row 1', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_1);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_1);
});

test('Board get square a2 has row 2', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_2);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_2);
});

test('Board get square a3 has row 3', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_3);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_3);
});

test('Board get square a4 has row 4', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_4);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_4);
});

test('Board get square a5 has row 5', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_5);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_5);
});

test('Board get square a6 has row 6', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_6);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_6);
});

test('Board get square a7 has row 7', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_7);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_7);
});

test('Board get square a8 has row 8', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.A, Row.ROW_8);
    expect(board.getSquare(coordinate).getCoordinate().getRow()).toBe(Row.ROW_8);
});
