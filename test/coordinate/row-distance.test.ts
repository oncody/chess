import {Column} from "../../src/board/Column";
import {Row} from "../../src/board/Row";
import CoordinatePair from "../../src/board/CoordinatePair";
import Coordinate from "../../src/board/Coordinate";

test('Row distance between a1 and h1 is 0', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h1 = new Coordinate(Column.H, Row.ROW_1);
    let coordinatePair = new CoordinatePair(a1, h1);
    expect(coordinatePair.distanceBetweenRows()).toBe(0);
});

test('Row distance between a1 and h2 is 1', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h2 = new Coordinate(Column.H, Row.ROW_2);
    let coordinatePair = new CoordinatePair(a1, h2);
    expect(coordinatePair.distanceBetweenRows()).toBe(1);
});

test('Row distance between h2 and a1 is 1', () => {
    let h2 = new Coordinate(Column.H, Row.ROW_2);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let coordinatePair = new CoordinatePair(h2, a1);
    expect(coordinatePair.distanceBetweenRows()).toBe(1);
});

test('Row distance between a1 and h3 is 2', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h3 = new Coordinate(Column.H, Row.ROW_3);
    let coordinatePair = new CoordinatePair(a1, h3);
    expect(coordinatePair.distanceBetweenRows()).toBe(2);
});

test('Row distance between a1 and h4 is 3', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h4 = new Coordinate(Column.H, Row.ROW_4);
    let coordinatePair = new CoordinatePair(a1, h4);
    expect(coordinatePair.distanceBetweenRows()).toBe(3);
});

test('Row distance between a1 and h5 is 4', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h5 = new Coordinate(Column.H, Row.ROW_5);
    let coordinatePair = new CoordinatePair(a1, h5);
    expect(coordinatePair.distanceBetweenRows()).toBe(4);
});

test('Row distance between a1 and h6 is 5', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h6 = new Coordinate(Column.H, Row.ROW_6);
    let coordinatePair = new CoordinatePair(a1, h6);
    expect(coordinatePair.distanceBetweenRows()).toBe(5);
});

test('Row distance between a1 and h7 is 6', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h7 = new Coordinate(Column.H, Row.ROW_7);
    let coordinatePair = new CoordinatePair(a1, h7);
    expect(coordinatePair.distanceBetweenRows()).toBe(6);
});

test('Row distance between a1 and a8 is 7', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    let coordinatePair = new CoordinatePair(a1, a8);
    expect(coordinatePair.distanceBetweenRows()).toBe(7);
});
