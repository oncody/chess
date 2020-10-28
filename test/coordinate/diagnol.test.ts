import Coordinate from '../../src/board/Coordinate';
import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import {coordinates} from '../../src/board/CoordinateIterator';

test('d4 diagnol test', () => {
  let d4 = new Coordinate(Column.D, Row.ROW_4);
  let unmatchedDiagnolSquares = [
    new Coordinate(Column.A, Row.ROW_1),
    new Coordinate(Column.B, Row.ROW_2),
    new Coordinate(Column.C, Row.ROW_3),
    new Coordinate(Column.D, Row.ROW_4),
    new Coordinate(Column.E, Row.ROW_5),
    new Coordinate(Column.F, Row.ROW_6),
    new Coordinate(Column.G, Row.ROW_7),
    new Coordinate(Column.H, Row.ROW_8),
    new Coordinate(Column.A, Row.ROW_7),
    new Coordinate(Column.B, Row.ROW_6),
    new Coordinate(Column.C, Row.ROW_5),
    new Coordinate(Column.E, Row.ROW_3),
    new Coordinate(Column.F, Row.ROW_2),
    new Coordinate(Column.G, Row.ROW_1)
  ];

  let squaresNonDiagnol = 0;
  let matchedDiagnolSquares = [];

  for (let coordinate of coordinates()) {
    let filtered = unmatchedDiagnolSquares.filter(diagnolSquare => diagnolSquare.areEqual(coordinate));
    let item = filtered.length > 0 ? filtered.pop() : null;

    if (item) {
      let diagnolSquareIndex = unmatchedDiagnolSquares.indexOf(item);
      unmatchedDiagnolSquares.splice(diagnolSquareIndex, 1);
      matchedDiagnolSquares.push(item);
      expect(d4.isDiagnol(coordinate)).toBe(true);
      expect(coordinate.isDiagnol(d4)).toBe(true);
    } else {
      expect(d4.isDiagnol(coordinate)).toBe(false);
      expect(coordinate.isDiagnol(d4)).toBe(false);
      squaresNonDiagnol++;
    }
  }

  expect(unmatchedDiagnolSquares.length).toBe(0);
  expect(matchedDiagnolSquares.length + squaresNonDiagnol).toBe(64);
});
