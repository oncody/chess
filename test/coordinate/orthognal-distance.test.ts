import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Coordinate from '../../src/board/Coordinate';

test('Orthogonal distance between a1 and a1 is 0', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let otherA1 = new Coordinate(Column.A, Row.ROW_1);
    expect(a1.orthognalDistanceBetween(otherA1)).toBe(0);
});

test('Orthogonal distance between a1 and a2 is 1', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a2 = new Coordinate(Column.A, Row.ROW_2);
    expect(a1.orthognalDistanceBetween(a2)).toBe(1);
});

test('Orthogonal distance between a2 and a1 is 1', () => {
    let a2 = new Coordinate(Column.A, Row.ROW_2);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    expect(a2.orthognalDistanceBetween(a1)).toBe(1);
});

test('Orthogonal distance between a1 and a8 is 7', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    expect(a1.orthognalDistanceBetween(a8)).toBe(7);
});

test('Orthogonal distance between a1 and b1 is 1', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let b1 = new Coordinate(Column.B, Row.ROW_1);
    expect(a1.orthognalDistanceBetween(b1)).toBe(1);
});

test('Orthogonal distance between b1 and a1 is 1', () => {
    let b1 = new Coordinate(Column.B, Row.ROW_1);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    expect(b1.orthognalDistanceBetween(a1)).toBe(1);
});

test('Orthogonal distance between a1 and h1 is 7', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h1 = new Coordinate(Column.H, Row.ROW_1);
    expect(a1.orthognalDistanceBetween(h1)).toBe(7);
});

test('Orthogonal distance between a1 and b2 is 2', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let b2 = new Coordinate(Column.B, Row.ROW_2);
    expect(a1.orthognalDistanceBetween(b2)).toBe(2);
});

test('Orthogonal distance between b2 and a1 is 2', () => {
    let b2 = new Coordinate(Column.B, Row.ROW_2);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    expect(b2.orthognalDistanceBetween(a1)).toBe(2);
});

test('Orthogonal distance between a1 and b3 is 3', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let b3 = new Coordinate(Column.B, Row.ROW_3);
    expect(a1.orthognalDistanceBetween(b3)).toBe(3);
});

test('Orthogonal distance between a1 and c2 is 3', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let c2 = new Coordinate(Column.C, Row.ROW_2);
    expect(a1.orthognalDistanceBetween(c2)).toBe(3);
});

test('Orthogonal distance between a1 and h8 is 14', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h8 = new Coordinate(Column.H, Row.ROW_8);
    expect(a1.orthognalDistanceBetween(h8)).toBe(14);
});
