import Board from '../../../src/board/Board';
import Coordinate from '../../../src/board/Coordinate';
import {Column} from '../../../src/board/Column';
import {Row} from '../../../src/board/Row';
import {Color} from '../../../src/Color';

test('Board get square b1 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_1);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square b2 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_2);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square b3 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_3);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square b4 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_4);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square b5 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_5);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square b6 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_6);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square b7 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_7);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square b8 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.B, Row.ROW_8);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});
