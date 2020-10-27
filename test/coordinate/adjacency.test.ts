import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Coordinate from '../../src/board/Coordinate';

test('Column distance between a1 and a8 is 0', () => {
  let a1 = new Coordinate(Column.A, Row.ROW_1);
  let a8 = new Coordinate(Column.A, Row.ROW_8);
  expect(a1.columnsBetween(a8)).toBe(0);
});
