import {Column} from "../../src/Column";
import {Row} from "../../src/Row";
import CoordinatePair from "../../src/CoordinatePair";
import Coordinate from "../../src/Coordinate";

test('Orthogonal distance between a1 and a1 is 0', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let otherA1 = new Coordinate(Column.A, Row.ROW_1);
    let coordinatePair = new CoordinatePair(a1, otherA1);
    expect(coordinatePair.orthognalDistanceBetween()).toBe(0);
});

test('Orthogonal distance between a1 and a2 is 1', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a2 = new Coordinate(Column.A, Row.ROW_2);
    let coordinatePair = new CoordinatePair(a1, a2);
    expect(coordinatePair.orthognalDistanceBetween()).toBe(1);
});

test('Orthogonal distance between a2 and a1 is 1', () => {
    let a2 = new Coordinate(Column.A, Row.ROW_2);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let coordinatePair = new CoordinatePair(a2, a1);
    expect(coordinatePair.orthognalDistanceBetween()).toBe(1);
});

test('Orthogonal distance between a1 and a8 is 7', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    let coordinatePair = new CoordinatePair(a1, a8);
    expect(coordinatePair.orthognalDistanceBetween()).toBe(7);
});

test('Orthogonal distance between a1 and b1 is 1', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let b1 = new Coordinate(Column.B, Row.ROW_1);
    let coordinatePair = new CoordinatePair(a1, b1);
    expect(coordinatePair.orthognalDistanceBetween()).toBe(1);
});

test('Orthogonal distance between b1 and a1 is 1', () => {
    let b1 = new Coordinate(Column.B, Row.ROW_1);
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let coordinatePair = new CoordinatePair(b1, a1);
    expect(coordinatePair.orthognalDistanceBetween()).toBe(1);
});

test('Orthogonal distance between a1 and h1 is 7', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let h1 = new Coordinate(Column.H, Row.ROW_1);
    let coordinatePair = new CoordinatePair(a1, h1);
    expect(coordinatePair.orthognalDistanceBetween()).toBe(7);
});

