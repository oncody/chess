import {Column} from "../../src/board/Column";
import {Row} from "../../src/board/Row";
import CoordinatePair from "../../src/board/CoordinatePair";
import Coordinate from "../../src/board/Coordinate";

test('knight on corner has two moves', () => {
    let a1 = new Coordinate(Column.A, Row.ROW_1);
    let a8 = new Coordinate(Column.A, Row.ROW_8);
    let coordinatePair = new CoordinatePair(a1, a8);
    expect(coordinatePair.distanceBetweenColumns()).toBe(0);
});
