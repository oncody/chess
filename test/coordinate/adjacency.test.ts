import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Coordinate from '../../src/board/Coordinate';
import {coordinates} from '../../src/board/CoordinateIterator';

test('corner should have 3 adjacent squares', () => {
  let corner = new Coordinate(Column.A, Row.ROW_1);
  let unmatchedAdjacentSquares = [
    new Coordinate(Column.A, Row.ROW_2),
    new Coordinate(Column.B, Row.ROW_1),
    new Coordinate(Column.B, Row.ROW_2)
  ];

  let squaresNonAdjacent = 0;
  let matchedAdjacentSquares = [];

  for (let coordinate of coordinates()) {
    let filtered = unmatchedAdjacentSquares.filter(adjacentSquare => adjacentSquare.areEqual(coordinate));
    let item = filtered.length > 0 ? filtered.pop() : null;

    if (item) {
      let adjacentSquareIndex = unmatchedAdjacentSquares.indexOf(item);
      unmatchedAdjacentSquares.splice(adjacentSquareIndex, 1);
      matchedAdjacentSquares.push(item);
      expect(corner.isAdjacent(coordinate)).toBe(true);
      expect(coordinate.isAdjacent(corner)).toBe(true);
    } else {
      expect(corner.isAdjacent(coordinate)).toBe(false);
      expect(coordinate.isAdjacent(corner)).toBe(false);
      squaresNonAdjacent++;
    }
  }

  expect(unmatchedAdjacentSquares.length).toBe(0);
  expect(matchedAdjacentSquares.length + squaresNonAdjacent).toBe(64);
});

test('edge should have 5 adjacent squares', () => {
  let edge = new Coordinate(Column.C, Row.ROW_1);
  let unmatchedAdjacentSquares = [
    new Coordinate(Column.B, Row.ROW_1),
    new Coordinate(Column.B, Row.ROW_2),
    new Coordinate(Column.C, Row.ROW_2),
    new Coordinate(Column.D, Row.ROW_1),
    new Coordinate(Column.D, Row.ROW_2),
  ];

  let squaresNonAdjacent = 0;
  let matchedAdjacentSquares = [];

  for (let coordinate of coordinates()) {
    let filtered = unmatchedAdjacentSquares.filter(adjacentSquare => adjacentSquare.areEqual(coordinate));
    let item = filtered.length > 0 ? filtered.pop() : null;

    if (item) {
      let adjacentSquareIndex = unmatchedAdjacentSquares.indexOf(item);
      unmatchedAdjacentSquares.splice(adjacentSquareIndex, 1);
      matchedAdjacentSquares.push(item);
      expect(edge.isAdjacent(coordinate)).toBe(true);
      expect(coordinate.isAdjacent(edge)).toBe(true);
    } else {
      expect(edge.isAdjacent(coordinate)).toBe(false);
      expect(coordinate.isAdjacent(edge)).toBe(false);
      squaresNonAdjacent++;
    }
  }

  expect(unmatchedAdjacentSquares.length).toBe(0);
  expect(matchedAdjacentSquares.length + squaresNonAdjacent).toBe(64);
});

test('center square should have 8 adjacent squares', () => {
  let centerSquare = new Coordinate(Column.D, Row.ROW_4);
  let adjacentSquares = [
    new Coordinate(Column.C, Row.ROW_3),
    new Coordinate(Column.C, Row.ROW_4),
    new Coordinate(Column.C, Row.ROW_5),
    new Coordinate(Column.D, Row.ROW_3),
    new Coordinate(Column.D, Row.ROW_5),
    new Coordinate(Column.E, Row.ROW_3),
    new Coordinate(Column.E, Row.ROW_4),
    new Coordinate(Column.E, Row.ROW_5),
  ];

  for (let coordinate of coordinates()) {
    if (adjacentSquares.some(adjacentSquare => adjacentSquare.areEqual(coordinate))) {
      expect(centerSquare.isAdjacent(coordinate)).toBe(true);
      expect(coordinate.isAdjacent(centerSquare)).toBe(true);
    } else {
      expect(centerSquare.isAdjacent(coordinate)).toBe(false);
      expect(coordinate.isAdjacent(centerSquare)).toBe(false);
    }
  }
});

