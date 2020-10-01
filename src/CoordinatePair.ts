import Coordinate from './Coordinate';
const _ = require('lodash');

export default class CoordinatePair {
    firstCoordinate: Coordinate;
    secondCoordinate: Coordinate;

    constructor(firstCoordinate: Coordinate, secondCoordinate: Coordinate) {
        this.firstCoordinate = firstCoordinate;
        this.secondCoordinate = secondCoordinate;
    }

    distanceBetweenColumns(): number {
        return this.firstCoordinate.getColumn().distance(this.secondCoordinate.getColumn());
    }

    distanceBetweenRows(): number {
        return this.firstCoordinate.getRow().distance(this.secondCoordinate.getRow());
    }

    isKnightMoveAway(): boolean {
        // Both need to be less than 3 distance away
        // The row distance + column distance need to equal 3
        return (this.distanceBetweenColumns() < 3) &&
            (this.distanceBetweenRows() < 3) &&
            (this.distanceBetweenRows() + this.distanceBetweenColumns() === 3);
    }

    isAdjacent(): boolean {
        let isColumnAdjacent = this.distanceBetweenColumns() < 2;
        let isRowAdjacent = this.distanceBetweenRows() < 2;
        return isColumnAdjacent && isRowAdjacent;
    }

    isOrthogonal(): boolean {
        let sameColumn = this.firstCoordinate.getColumn() === this.secondCoordinate.getColumn();
        let sameRow = this.firstCoordinate.getRow() === this.secondCoordinate.getRow();
        return sameColumn || sameRow;
    }

    isDiagnol(): boolean {
        return this.distanceBetweenColumns() === this.distanceBetweenRows();
    }

    areEqual(): boolean {
        return _.isEqual(this.firstCoordinate, this.secondCoordinate);
    }

    getCoordinatesBetween(): Array<Coordinate> {
        let coordinatesBetween: Array<Coordinate> = [];

        if (this.areEqual()) {
            return coordinatesBetween;
        }

        if (!this.isOrthogonal() && !this.isDiagnol()) {
            return coordinatesBetween;
        }

        let firstColumn = this.firstCoordinate.getColumn();
        let firstRow = this.firstCoordinate.getRow();

        let secondColumn = this.secondCoordinate.getColumn();
        let secondRow = this.secondCoordinate.getRow();

        let currentColumn = this.firstCoordinate.getColumn();
        let currentRow = this.firstCoordinate.getRow();

        while ((currentColumn !== secondColumn) && (currentRow !== secondRow)) {
            if(firstColumn.getIndex() > secondColumn.getIndex()) {
                currentColumn = currentColumn.next();
            } else if(firstColumn.getIndex() < secondColumn.getIndex()) {
                currentColumn = currentColumn.previous();
            }

            if(firstRow.getIndex() > secondRow.getIndex()) {
                currentRow = currentRow.next();
            } else if(firstRow.getIndex() < secondRow.getIndex()) {
                currentRow = currentRow.previous();
            }

            coordinatesBetween.push(new Coordinate(currentColumn, currentRow));
        }

        return coordinatesBetween;
    }
}
