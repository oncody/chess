import {Column} from "../../src/board/Column";
import {Row} from "../../src/board/Row";
import Coordinate from "../../src/board/Coordinate";

test('Row distance between a1 and h1 is 0', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h1 = new Coordinate(Column.H, Row.ROW_1);
    expect(a1.rowsBetween(h1)).toBe(0);
});

test('Row distance between a1 and h2 is 1', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h2 = new Coordinate(Column.H, Row.ROW_2);
    expect(a1.rowsBetween(h2)).toBe(1);
});

test('Row distance between h2 and a1 is 1', () => {
    let h2 = new Coordinate(Column.H, Row.ROW_2);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    expect(h2.rowsBetween(a1)).toBe(1);
});

test('Row distance between a1 and h3 is 2', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h3 = new Coordinate(Column.H, Row.ROW_3);
    expect(a1.rowsBetween(h3)).toBe(2);
});

test('Row distance between a1 and h4 is 3', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h4 = new Coordinate(Column.H, Row.ROW_4);
    expect(a1.rowsBetween(h4)).toBe(3);
});

test('Row distance between a1 and h5 is 4', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h5 = new Coordinate(Column.H, Row.ROW_5);
    expect(a1.rowsBetween(h5)).toBe(4);
});

test('Row distance between a1 and h6 is 5', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h6 = new Coordinate(Column.H, Row.ROW_6);
    expect(a1.rowsBetween(h6)).toBe(5);
});

test('Row distance between a1 and h7 is 6', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h7 = new Coordinate(Column.H, Row.ROW_7);
    expect(a1.rowsBetween(h7)).toBe(6);
});

test('Row distance between a1 and a8 is 7', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    expect(a1.rowsBetween(a8)).toBe(7);
});
