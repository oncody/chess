import Board from '../src/Board';
import {Column} from '../src/Column';
import {Row} from '../src/Row';
import {Color} from "../src/Color";

let board = new Board();

test('Board get square a1 is black', () => {
    expect(board.getSquare(Column.A, Row.ROW_1).getColor()).toBe(Color.Black);
});

test('Board get square a2 is white', () => {
    expect(board.getSquare(Column.A, Row.ROW_2).getColor()).toBe(Color.White);
});

test('Board get square a3 is black', () => {
    expect(board.getSquare(Column.A, Row.ROW_3).getColor()).toBe(Color.Black);
});

test('Board get square a4 is white', () => {
    expect(board.getSquare(Column.A, Row.ROW_4).getColor()).toBe(Color.White);
});

test('Board get square a5 is black', () => {
    expect(board.getSquare(Column.A, Row.ROW_5).getColor()).toBe(Color.Black);
});

test('Board get square a6 is white', () => {
    expect(board.getSquare(Column.A, Row.ROW_6).getColor()).toBe(Color.White);
});

test('Board get square a7 is black', () => {
    expect(board.getSquare(Column.A, Row.ROW_7).getColor()).toBe(Color.Black);
});

test('Board get square a8 is white', () => {
    expect(board.getSquare(Column.A, Row.ROW_8).getColor()).toBe(Color.White);
});

test('Board get square b1 is white', () => {
    expect(board.getSquare(Column.B, Row.ROW_1).getColor()).toBe(Color.White);
});

test('Board get square b2 is black', () => {
    expect(board.getSquare(Column.B, Row.ROW_2).getColor()).toBe(Color.Black);
});

test('Board get square b3 is white', () => {
    expect(board.getSquare(Column.B, Row.ROW_3).getColor()).toBe(Color.White);
});

test('Board get square b4 is black', () => {
    expect(board.getSquare(Column.B, Row.ROW_4).getColor()).toBe(Color.Black);
});

test('Board get square b5 is white', () => {
    expect(board.getSquare(Column.B, Row.ROW_5).getColor()).toBe(Color.White);
});

test('Board get square b6 is black', () => {
    expect(board.getSquare(Column.B, Row.ROW_6).getColor()).toBe(Color.Black);
});

test('Board get square b7 is white', () => {
    expect(board.getSquare(Column.B, Row.ROW_7).getColor()).toBe(Color.White);
});

test('Board get square b8 is black', () => {
    expect(board.getSquare(Column.B, Row.ROW_8).getColor()).toBe(Color.Black);
});
