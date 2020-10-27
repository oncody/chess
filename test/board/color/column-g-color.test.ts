import Board from '../../../src/board/Board';
import Coordinate from '../../../src/board/Coordinate';
import {Column} from '../../../src/board/Column';
import {Row} from '../../../src/board/Row';
import {Color} from '../../../src/Color';

test('Board get square g1 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_1);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square g2 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_2);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square g3 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_3);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square g4 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_4);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square g5 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_5);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square g6 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_6);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});

test('Board get square g7 is black', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_7);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.Black);
});

test('Board get square g8 is white', () => {
    let board = new Board();
    let coordinate = new Coordinate(Column.G, Row.ROW_8);
    expect(board.getSquare(coordinate).getColor()).toBe(Color.White);
});
