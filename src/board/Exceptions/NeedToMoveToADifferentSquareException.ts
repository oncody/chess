import MoveException from './MoveException';
import CoordinatePair from '../CoordinatePair';

export default class NeedToMoveToADifferentSquareException extends MoveException {
  constructor(coordinatePair: CoordinatePair) {
    super(coordinatePair);
  }
}
