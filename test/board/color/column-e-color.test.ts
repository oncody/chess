import Board from '../../../src/board/Board';
import Coordinate from '../../../src/board/Coordinate';
import {Column} from '../../../src/board/Column';
import {Row} from '../../../src/board/Row';
import {Color} from '../../../src/Color';

test('Board get square e1 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_1);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square e2 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_2);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square e3 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_3);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square e4 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_4);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square e5 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_5);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square e6 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_6);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square e7 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_7);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square e8 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.E, Row.ROW_8);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});
