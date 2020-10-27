import MoveException from './MoveException';
import CoordinatePair from '../CoordinatePair';

export default class CannotMoveThroughPiecesException extends MoveException {
  constructor(coordinatePair: CoordinatePair) {
    super(coordinatePair);
  }
}
