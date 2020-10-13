import {Column} from "../../src/board/Column";
import {Row} from "../../src/board/Row";
import CoordinatePair from "../../src/CoordinatePair";
import Coordinate from "../../src/Coordinate";

test('Column distance between a1 and a8 is 0', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    let coordinatePair = new CoordinatePair(a1, a8);
    expect(coordinatePair.distanceBetweenColumns()).toBe(0);
});
