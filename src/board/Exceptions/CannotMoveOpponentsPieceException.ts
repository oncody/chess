import MoveException from './MoveException';
import CoordinatePair from '../CoordinatePair';

export default class CannotMoveOpponentsPieceException extends MoveException {
  constructor(coordinatePair: CoordinatePair) {
    super(coordinatePair);
  }
}
