import Coordinate from '../../src/board/Coordinate';
import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';

test('equality test', () => {
  let a1 = new Coordinate(Column.A, Row.ROW_1);
  let otherA1 = new Coordinate(Column.A, Row.ROW_1);
  expect(a1.areEqual(otherA1)).toBe(true);
});
