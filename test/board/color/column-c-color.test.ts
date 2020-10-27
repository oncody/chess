import Board from '../../../src/board/Board';
import Coordinate from '../../../src/board/Coordinate';
import {Column} from '../../../src/board/Column';
import {Row} from '../../../src/board/Row';
import {Color} from '../../../src/Color';

test('Board get square c1 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_1);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square c2 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_2);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square c3 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_3);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square c4 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_4);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square c5 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_5);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square c6 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_6);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square c7 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_7);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square c8 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.C, Row.ROW_8);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});
