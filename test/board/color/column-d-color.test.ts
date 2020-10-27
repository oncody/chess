import Board from '../../../src/board/Board';
import Coordinate from '../../../src/board/Coordinate';
import {Column} from '../../../src/board/Column';
import {Row} from '../../../src/board/Row';
import {Color} from '../../../src/Color';

test('Board get square d1 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_1);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square d2 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_2);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square d3 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_3);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square d4 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_4);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square d5 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_5);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square d6 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_6);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square d7 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_7);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square d8 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.D, Row.ROW_8);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});
