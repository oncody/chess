import Board from '../../src/Board';
import {Column} from '../../src/Column';
import {Row} from '../../src/Row';
import {Color} from "../../src/Color";

let board = new Board();

test('Board get square a1 has row 1', () => {
    expect(board.getSquare(Column.A, Row.ROW_1).getCoordinate().getRow()).toBe(Row.ROW_1);
});

test('Board get square a2 has row 2', () => {
    expect(board.getSquare(Column.A, Row.ROW_2).getCoordinate().getRow()).toBe(Row.ROW_2);
});

test('Board get square a3 has row 3', () => {
    expect(board.getSquare(Column.A, Row.ROW_3).getCoordinate().getRow()).toBe(Row.ROW_3);
});

test('Board get square a4 has row 4', () => {
    expect(board.getSquare(Column.A, Row.ROW_4).getCoordinate().getRow()).toBe(Row.ROW_4);
});

test('Board get square a5 has row 5', () => {
    expect(board.getSquare(Column.A, Row.ROW_5).getCoordinate().getRow()).toBe(Row.ROW_5);
});

test('Board get square a6 has row 6', () => {
    expect(board.getSquare(Column.A, Row.ROW_6).getCoordinate().getRow()).toBe(Row.ROW_6);
});

test('Board get square a7 has row 7', () => {
    expect(board.getSquare(Column.A, Row.ROW_7).getCoordinate().getRow()).toBe(Row.ROW_7);
});

test('Board get square a8 has row 8', () => {
    expect(board.getSquare(Column.A, Row.ROW_8).getCoordinate().getRow()).toBe(Row.ROW_8);
});
