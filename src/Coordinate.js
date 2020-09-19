import type Column from "./Column";
import type Row from "./Row";

class Coordinate {
    column: Column;
    row: Row;

    constructor(column: Column, row: Row) {
        this.column = column;
        this.row = row;
    }

    isOrthogonal(coordinate: Coordinate) {
        let sameColumn = this.column === coordinate.column;
        let sameRow = this.row === coordinate.row;
        return sameColumn || sameRow;
    }

    isDiagnol(coordinate: Coordinate) {

    }
}

export default Coordinate;
