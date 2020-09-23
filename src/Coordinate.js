import type Column from './column/Column';
import type Row from './row/Row';

const _ = require('lodash');

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
}

export default Coordinate;
