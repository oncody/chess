import {Column} from "../../src/Column";
import {Row} from "../../src/Row";
import CoordinatePair from "../../src/CoordinatePair";
import Coordinate from "../../src/Coordinate";

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
