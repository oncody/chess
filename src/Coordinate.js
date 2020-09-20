import type Column from './column/Column';
import type Row from './row/Row';

class Coordinate {
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

    getColumnDifference(coordinate: Coordinate): number {
        return Math.abs(this.getColumn().getIndex() - coordinate.getColumn().getIndex());
    }

    getRowDifference(coordinate: Coordinate): number {
        return Math.abs(this.getColumn().getIndex() - coordinate.getColumn().getIndex());
    }

    isKnightMoveAway(coordinate: Coordinate): boolean {
// todo: fix this
        let adjacentColumn = this.getColumnDifference(coordinate) < 2;
        let adjacentRow = this.getRowDifference(coordinate) < 2
        return adjacentColumn && adjacentRow;
    }

    isAdjacent(coordinate: Coordinate): boolean {
        let adjacentColumn = this.getColumnDifference(coordinate) < 2;
        let adjacentRow = this.getRowDifference(coordinate) < 2
        return adjacentColumn && adjacentRow;
    }

    isOrthogonal(coordinate: Coordinate): boolean {
        let sameColumn = this.getColumn() === coordinate.getColumn();
        let sameRow = this.getRow() === coordinate.getRow();
        return sameColumn || sameRow;
    }

    isDiagnol(coordinate: Coordinate): boolean {
        return this.getColumnDifference(coordinate) === this.getRowDifference(coordinate);
    }
}

export default Coordinate;
