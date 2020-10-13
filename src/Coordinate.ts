import {Column} from './board/Column';
import {Row} from './board/Row';

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
}
