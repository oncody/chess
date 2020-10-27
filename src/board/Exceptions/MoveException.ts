import CoordinatePair from '../CoordinatePair';

export default class MoveException {
  coordinatePair: CoordinatePair;

  constructor(coordinatePair: CoordinatePair) {
    this.coordinatePair = coordinatePair;
  }
}
