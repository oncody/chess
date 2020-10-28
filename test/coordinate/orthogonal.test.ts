import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Coordinate from '../../src/board/Coordinate';
import {coordinates} from '../../src/board/CoordinateIterator';

test('a1 orthogonal test', () => {
  let corner = new Coordinate(Column.A, Row.ROW_1);
  let adjacentSquares = [
    new Coordinate(Column.A, Row.ROW_1),
    new Coordinate(Column.B, Row.ROW_1),
    new Coordinate(Column.B, Row.ROW_2)
  ];

  // for (let coordinate of coordinates()) {
  //   if (adjacentSquares.some(adjacentSquare => adjacentSquare.areEqual(coordinate))) {
  //     expect(corner.isAdjacent(coordinate)).toBe(true);
  //     expect(coordinate.isAdjacent(corner)).toBe(true);
  //   } else {
  //     expect(corner.isAdjacent(coordinate)).toBe(false);
  //     expect(coordinate.isAdjacent(corner)).toBe(false);
  //   }
  // }
});
