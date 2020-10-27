import MoveException from './MoveException';
import CoordinatePair from '../CoordinatePair';

export default class NoPieceToMoveException extends MoveException {
  constructor(coordinatePair: CoordinatePair) {
    super(coordinatePair);
  }
}
