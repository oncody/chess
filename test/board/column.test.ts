import Board from '../../src/Board';
import {Column} from '../../src/Column';
import {Row} from '../../src/Row';

test('Board get square a1 has column A', () => {
    let board = new Board();
    expect(board.getSquare(Column.A, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.A);
});

test('Board get square b1 has column B', () => {
    let board = new Board();
    expect(board.getSquare(Column.B, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.B);
});

test('Board get square c1 has column C', () => {
    let board = new Board();
    expect(board.getSquare(Column.C, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.C);
});

test('Board get square d1 has column D', () => {
    let board = new Board();
    expect(board.getSquare(Column.D, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.D);
});

test('Board get square e1 has column E', () => {
    let board = new Board();
    expect(board.getSquare(Column.E, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.E);
});

test('Board get square f1 has column F', () => {
    let board = new Board();
    expect(board.getSquare(Column.F, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.F);
});

test('Board get square g1 has column G', () => {
    let board = new Board();
    expect(board.getSquare(Column.G, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.G);
});

test('Board get square h1 has column H', () => {
    let board = new Board();
    expect(board.getSquare(Column.H, Row.ROW_1).getCoordinate().getColumn()).toBe(Column.H);
});
