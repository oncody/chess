import MoveException from './MoveException';
import CoordinatePair from '../CoordinatePair';

export default class CannotCaptureOwnPieceException extends MoveException {
  constructor(coordinatePair: CoordinatePair) {
    super(coordinatePair);
  }
}
