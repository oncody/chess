import {Column} from './Column';
import {Row} from './Row';

const _ = require('lodash');

export default class Coordinate {
    column: Column;
    row: Row;

    constructor(column: Column, row: Row) {
        this.column = column;
        this.row = row;
    }

    getColumn(): Column {
        return this.column;
    }

    getRow(): Row {
        return this.row;
    }

    columnsBetween(coordinate: Coordinate): number {
        return Math.abs(this.getColumn() - coordinate.getColumn());
    }

    rowsBetween(coordinate: Coordinate): number {
        return Math.abs(this.getRow() - coordinate.getRow());
    }

    orthognalDistanceBetween(coordinate: Coordinate): number {
        return this.rowsBetween(coordinate) + this.columnsBetween(coordinate);
    }

    isAdjacent(coordinate: Coordinate): boolean {
        // Do not count equality as adjacency
        if (this.areEqual(coordinate)) {
            return false;
        }

        let isColumnAdjacent = this.columnsBetween(coordinate) < 2;
        let isRowAdjacent = this.rowsBetween(coordinate) < 2;
        return isColumnAdjacent && isRowAdjacent;
    }

    isOrthogonal(coordinate: Coordinate): boolean {
        let sameColumn = this.getColumn() === coordinate.getColumn();
        let sameRow = this.getRow() === coordinate.getRow();
        return sameColumn || sameRow;
    }

    isDiagnol(coordinate: Coordinate): boolean {
        return this.columnsBetween(coordinate) === this.rowsBetween(coordinate);
    }

    areEqual(coordinate: Coordinate): boolean {
        return _.isEqual(this, coordinate);
    }

    getCoordinatesBetween(coordinate: Coordinate): Array<Coordinate> {
        let coordinatesBetween: Array<Coordinate> = [];

        if (this.areEqual(coordinate)) {
            return coordinatesBetween;
        }

        if (!this.isOrthogonal(coordinate) && !this.isDiagnol(coordinate)) {
            return coordinatesBetween;
        }

        let firstColumn: Column = this.getColumn();
        let firstRow: Row = this.getRow();

        let secondColumn: Column = coordinate.getColumn();
        let secondRow: Row = coordinate.getRow();

        let currentColumn: Column = this.getColumn();
        let currentRow: Row = this.getRow();

        while ((currentColumn !== secondColumn) || (currentRow !== secondRow)) {
            if(firstColumn > secondColumn) {
                currentColumn = Column[Column[currentColumn - 1] as keyof typeof Column];
            } else if(firstColumn < secondColumn) {
                currentColumn = Column[Column[currentColumn + 1] as keyof typeof Column];
            }

            if(firstRow > secondRow) {
                currentRow = Row[Row[currentRow - 1] as keyof typeof Row];
            } else if(firstRow < secondRow) {
                currentRow = Row[Row[currentRow + 1] as keyof typeof Row];
            }

            coordinatesBetween.push(new Coordinate(currentColumn, currentRow));
        }

        return coordinatesBetween;
    }
}
