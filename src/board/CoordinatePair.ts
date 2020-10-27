import Coordinate from './Coordinate';
import {Column} from './Column';
import {Row} from './Row';

const _ = require('lodash');

export default class CoordinatePair {
    firstCoordinate: Coordinate;
    secondCoordinate: Coordinate;

    constructor(firstCoordinate: Coordinate, secondCoordinate: Coordinate) {
        this.firstCoordinate = firstCoordinate;
        this.secondCoordinate = secondCoordinate;
    }

    distanceBetweenColumns(): number {
        return Math.abs(this.firstCoordinate.getColumn() - this.secondCoordinate.getColumn());
    }

    distanceBetweenRows(): number {
        return Math.abs(this.firstCoordinate.getRow() - this.secondCoordinate.getRow());
    }

    orthognalDistanceBetween(): number {
        return this.distanceBetweenRows() + this.distanceBetweenColumns();
    }

    isKnightMoveAway(): boolean {
        // Both the column and the row need to be less than 3 distance away
        // The row distance + column distance need to equal 3
        return (this.distanceBetweenColumns() < 3) &&
            (this.distanceBetweenRows() < 3) &&
            (this.orthognalDistanceBetween() === 3);
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

        let firstColumn: Column = this.firstCoordinate.getColumn();
        let firstRow: Row = this.firstCoordinate.getRow();

        let secondColumn: Column = this.secondCoordinate.getColumn();
        let secondRow: Row = this.secondCoordinate.getRow();

        let currentColumn: Column = this.firstCoordinate.getColumn();
        let currentRow: Row = this.firstCoordinate.getRow();

        while ((currentColumn !== secondColumn) && (currentRow !== secondRow)) {
            if(firstColumn > secondColumn) {
                currentColumn = Column[Column[currentColumn + 1] as keyof typeof Column];
            } else if(firstColumn < secondColumn) {
                currentColumn = Column[Column[currentColumn - 1] as keyof typeof Column];
            }

            if(firstRow > secondRow) {
                currentRow = Row[Row[currentRow + 1] as keyof typeof Row];
            } else if(firstRow < secondRow) {
                currentRow = Row[Row[currentRow - 1] as keyof typeof Row];
            }

            coordinatesBetween.push(new Coordinate(currentColumn, currentRow));
        }

        return coordinatesBetween;
    }
}
