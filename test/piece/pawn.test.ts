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
