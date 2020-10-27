import Board from '../../../src/board/Board';
import Coordinate from '../../../src/board/Coordinate';
import {Column} from '../../../src/board/Column';
import {Row} from '../../../src/board/Row';
import {Color} from '../../../src/Color';

test('Board get square h1 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_1);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square h2 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_2);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square h3 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_3);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square h4 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_4);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square h5 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_5);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square h6 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_6);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square h7 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_7);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square h8 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.H, Row.ROW_8);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});
