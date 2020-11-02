import Coordinate from '../../src/board/Coordinate';
import {Column} from '../../src/board/Column';
import {Row} from '../../src/board/Row';
import Board from '../../src/board/Board';
import Pawn from '../../src/piece/Pawn';
import {Color} from '../../src/Color';
import Player from '../../src/Player';

test('white pawn can move forward twice on first move', () => {
  let board = new Board();
  let whitePlayer = new Player(Color.White);
  let whitePawn = new Pawn(Color.White);
  let a2 = new Coordinate(Column.A, Row.ROW_2);
  let a4 = new Coordinate(Column.A, Row.ROW_4);
  board.getSquare(a2).addPiece(whitePawn);
  expect(board.movePiece(whitePlayer, a2, a4)).toBeUndefined();
});

test('black pawn can move forward twice on first move', () => {
  let board = new Board();
  let blackPlayer = new Player(Color.Black);
  let blackPawn = new Pawn(Color.Black);
  let a7 = new Coordinate(Column.A, Row.ROW_7);
  let a5 = new Coordinate(Column.A, Row.ROW_5);
  board.getSquare(a7).addPiece(blackPawn);
  expect(board.movePiece(blackPlayer, a7, a5)).toBeUndefined();
});

test('white pawn can move forward once on first move', () => {
  let board = new Board();
  let whitePlayer = new Player(Color.White);
  let whitePawn = new Pawn(Color.White);
  let a2 = new Coordinate(Column.A, Row.ROW_2);
  let a3 = new Coordinate(Column.A, Row.ROW_3);
  board.getSquare(a2).addPiece(whitePawn);
  expect(board.movePiece(whitePlayer, a2, a3)).toBeUndefined();
});

test('black pawn can move forward once on first move', () => {
  let board = new Board();
  let blackPlayer = new Player(Color.Black);
  let blackPawn = new Pawn(Color.Black);
  let a7 = new Coordinate(Column.A, Row.ROW_7);
  let a6 = new Coordinate(Column.A, Row.ROW_6);
  board.getSquare(a7).addPiece(blackPawn);
  expect(board.movePiece(blackPlayer, a7, a6)).toBeUndefined();
});
