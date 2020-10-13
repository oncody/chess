import Board from '../../src/board/Board';
import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';

test('Board get square a1 has row 1', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_1).getCoordinate().getRow()).toBe(Row.ROW_1);
});

test('Board get square a2 has row 2', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_2).getCoordinate().getRow()).toBe(Row.ROW_2);
});

test('Board get square a3 has row 3', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_3).getCoordinate().getRow()).toBe(Row.ROW_3);
});

test('Board get square a4 has row 4', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_4).getCoordinate().getRow()).toBe(Row.ROW_4);
});

test('Board get square a5 has row 5', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_5).getCoordinate().getRow()).toBe(Row.ROW_5);
});

test('Board get square a6 has row 6', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_6).getCoordinate().getRow()).toBe(Row.ROW_6);
});

test('Board get square a7 has row 7', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_7).getCoordinate().getRow()).toBe(Row.ROW_7);
});

test('Board get square a8 has row 8', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_8).getCoordinate().getRow()).toBe(Row.ROW_8);
});
