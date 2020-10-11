import Board from '../../src/Board';
import {Column} from '../../src/Column';
import {Row} from '../../src/Row';
import {Color} from "../../src/Color";

test('Board get square a1 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_1).getColor()).toBe(Color.Black);
});

test('Board get square a2 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_2).getColor()).toBe(Color.White);
});

test('Board get square a3 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_3).getColor()).toBe(Color.Black);
});

test('Board get square a4 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_4).getColor()).toBe(Color.White);
});

test('Board get square a5 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_5).getColor()).toBe(Color.Black);
});

test('Board get square a6 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_6).getColor()).toBe(Color.White);
});

test('Board get square a7 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_7).getColor()).toBe(Color.Black);
});

test('Board get square a8 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_8).getColor()).toBe(Color.White);
});

test('Board get square b1 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_1).getColor()).toBe(Color.White);
});

test('Board get square b2 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_2).getColor()).toBe(Color.Black);
});

test('Board get square b3 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_3).getColor()).toBe(Color.White);
});

test('Board get square b4 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_4).getColor()).toBe(Color.Black);
});

test('Board get square b5 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_5).getColor()).toBe(Color.White);
});

test('Board get square b6 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_6).getColor()).toBe(Color.Black);
});

test('Board get square b7 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_7).getColor()).toBe(Color.White);
});

test('Board get square b8 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_8).getColor()).toBe(Color.Black);
});

test('Board get square c1 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_1).getColor()).toBe(Color.Black);
});

test('Board get square c2 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_2).getColor()).toBe(Color.White);
});

test('Board get square c3 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_3).getColor()).toBe(Color.Black);
});

test('Board get square c4 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_4).getColor()).toBe(Color.White);
});

test('Board get square c5 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_5).getColor()).toBe(Color.Black);
});

test('Board get square c6 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_6).getColor()).toBe(Color.White);
});

test('Board get square c7 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_7).getColor()).toBe(Color.Black);
});

test('Board get square c8 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_8).getColor()).toBe(Color.White);
});

test('Board get square d1 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_1).getColor()).toBe(Color.White);
});

test('Board get square d2 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_2).getColor()).toBe(Color.Black);
});

test('Board get square d3 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_3).getColor()).toBe(Color.White);
});

test('Board get square d4 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_4).getColor()).toBe(Color.Black);
});

test('Board get square d5 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_5).getColor()).toBe(Color.White);
});

test('Board get square d6 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_6).getColor()).toBe(Color.Black);
});

test('Board get square d7 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_7).getColor()).toBe(Color.White);
});

test('Board get square d8 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_8).getColor()).toBe(Color.Black);
});

test('Board get square e1 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_1).getColor()).toBe(Color.Black);
});

test('Board get square e2 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_2).getColor()).toBe(Color.White);
});

test('Board get square e3 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_3).getColor()).toBe(Color.Black);
});

test('Board get square e4 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_4).getColor()).toBe(Color.White);
});

test('Board get square e5 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_5).getColor()).toBe(Color.Black);
});

test('Board get square e6 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_6).getColor()).toBe(Color.White);
});

test('Board get square e7 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_7).getColor()).toBe(Color.Black);
});

test('Board get square e8 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_8).getColor()).toBe(Color.White);
});

test('Board get square f1 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_1).getColor()).toBe(Color.White);
});

test('Board get square f2 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_2).getColor()).toBe(Color.Black);
});

test('Board get square f3 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_3).getColor()).toBe(Color.White);
});

test('Board get square f4 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_4).getColor()).toBe(Color.Black);
});

test('Board get square f5 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_5).getColor()).toBe(Color.White);
});

test('Board get square f6 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_6).getColor()).toBe(Color.Black);
});

test('Board get square f7 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_7).getColor()).toBe(Color.White);
});

test('Board get square f8 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_8).getColor()).toBe(Color.Black);
});

test('Board get square g1 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_1).getColor()).toBe(Color.Black);
});

test('Board get square g2 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_2).getColor()).toBe(Color.White);
});

test('Board get square g3 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_3).getColor()).toBe(Color.Black);
});

test('Board get square g4 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_4).getColor()).toBe(Color.White);
});

test('Board get square g5 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_5).getColor()).toBe(Color.Black);
});

test('Board get square g6 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_6).getColor()).toBe(Color.White);
});

test('Board get square g7 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_7).getColor()).toBe(Color.Black);
});

test('Board get square g8 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_8).getColor()).toBe(Color.White);
});

test('Board get square h1 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_1).getColor()).toBe(Color.White);
});

test('Board get square h2 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_2).getColor()).toBe(Color.Black);
});

test('Board get square h3 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_3).getColor()).toBe(Color.White);
});

test('Board get square h4 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_4).getColor()).toBe(Color.Black);
});

test('Board get square h5 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_5).getColor()).toBe(Color.White);
});

test('Board get square h6 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_6).getColor()).toBe(Color.Black);
});

test('Board get square h7 is white', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_7).getColor()).toBe(Color.White);
});

test('Board get square h8 is black', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_8).getColor()).toBe(Color.Black);
});
