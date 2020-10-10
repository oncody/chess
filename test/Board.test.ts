import Board from '../src/Board';
import {Column} from '../src/Column';
import {Row} from '../src/Row';
import {Color} from "../src/Color";

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

test('Board get square a1 has column A', () => {
    expect(board.getSquare(Column.A, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.A);
});

test('Board get square b1 has column B', () => {
    expect(board.getSquare(Column.B, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.B);
});

test('Board get square c1 has column C', () => {
    expect(board.getSquare(Column.C, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.C);
});

test('Board get square d1 has column D', () => {
    expect(board.getSquare(Column.D, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.D);
});

test('Board get square e1 has column E', () => {
    expect(board.getSquare(Column.E, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.E);
});

test('Board get square f1 has column F', () => {
    expect(board.getSquare(Column.F, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.F);
});

test('Board get square g1 has column G', () => {
    expect(board.getSquare(Column.G, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.G);
});

test('Board get square h1 has column H', () => {
    expect(board.getSquare(Column.H, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.H);
});

