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

    isKnightMoveAway(coordinate: Coordinate): boolean {
        let columnDistance = this.getColumn().distance(coordinate.getColumn());
        let rowDistance = this.getRow().distance(coordinate.getRow());

        // Both need to be less than 3 distance away
        // The row distance + column distance need to equal 3
        return columnDistance < 3 && rowDistance < 3 && rowDistance + columnDistance === 3;
    }

    isAdjacent(coordinate: Coordinate): boolean {
        let isColumnAdjacent = this.getColumn().distance(coordinate.getColumn()) < 2;
        let isRowAdjacent = this.getRow().distance(coordinate.getRow()) < 2;
        return isColumnAdjacent && isRowAdjacent;
    }

    isOrthogonal(coordinate: Coordinate): boolean {
        let sameColumn = this.getColumn() === coordinate.getColumn();
        let sameRow = this.getRow() === coordinate.getRow();
        return sameColumn || sameRow;
    }

    isDiagnol(coordinate: Coordinate): boolean {
        let columnDistance = this.getColumn().distance(coordinate.getColumn());
        let rowDistance = this.getRow().distance(coordinate.getRow());
        return columnDistance === rowDistance;
    }
}

export default Coordinate;
