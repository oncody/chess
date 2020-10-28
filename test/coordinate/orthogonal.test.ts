import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Coordinate from '../../src/board/Coordinate';
import {coordinates} from '../../src/board/CoordinateIterator';

test('a1 orthogonal test', () => {
  let a1 = new Coordinate(Column.A, Row.ROW_1);

  let squaresOrthogonal = 0;
  let squaresNonOrthogonal = 0;

  for (let coordinate of coordinates()) {
    let isMatch = coordinate.getRow() === Row.ROW_1 || coordinate.getColumn() === Column.A;

    if (isMatch) {
      expect(a1.isOrthogonal(coordinate)).toBe(true);
      expect(coordinate.isOrthogonal(a1)).toBe(true);
      squaresOrthogonal++;
    } else {
      expect(a1.isOrthogonal(coordinate)).toBe(false);
      expect(coordinate.isOrthogonal(a1)).toBe(false);
      squaresNonOrthogonal++;
    }
  }

  // one row is 8. one column is 8. so you would expect this number to be 16
  // but there is one element that overlaps. it matches this row and column but
  // we should only count it once
  expect(squaresOrthogonal).toBe(15);
  expect(squaresOrthogonal + squaresNonOrthogonal).toBe(64);
});
