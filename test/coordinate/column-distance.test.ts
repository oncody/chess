import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Coordinate from '../../src/board/Coordinate';

test('Column distance between a1 and a8 is 0', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    expect(a1.columnsBetween(a8)).toBe(0);
});

test('Column distance between column a1 and b8 is 1', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let b8 = new Coordinate(Column.B, Row.ROW_8);
    expect(a1.columnsBetween(b8)).toBe(1);
});

test('Column distance between column b8 and a1 is 1', () => {
    let b8 = new Coordinate(Column.B, Row.ROW_8);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    expect(b8.columnsBetween(a1)).toBe(1);
});

test('Column distance between column a1 and c8 is 2', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let c8 = new Coordinate(Column.C, Row.ROW_8);
    expect(a1.columnsBetween(c8)).toBe(2);
});

test('Column distance between column a1 and d8 is 3', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let d8 = new Coordinate(Column.D, Row.ROW_8);
    expect(a1.columnsBetween(d8)).toBe(3);
});

test('Column distance between column a1 and e8 is 4', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let e8 = new Coordinate(Column.E, Row.ROW_8);
    expect(a1.columnsBetween(e8)).toBe(4);
});

test('Column distance between column a1 and f8 is 5', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let f8 = new Coordinate(Column.F, Row.ROW_8);
    expect(a1.columnsBetween(f8)).toBe(5);
});

test('Column distance between column a1 and g8 is 6', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let g8 = new Coordinate(Column.G, Row.ROW_8);
    expect(a1.columnsBetween(g8)).toBe(6);
});

test('Column distance between column a1 and h1 is 7', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h1 = new Coordinate(Column.H, Row.ROW_1);
    expect(a1.columnsBetween(h1)).toBe(7);
});
