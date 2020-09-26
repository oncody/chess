import Row from './Row';
import {ROW_1, ROW_2, ROW_3, ROW_4, ROW_5, ROW_6, ROW_7, ROW_8} from './RowIndex';
import type {RowIndex} from "./RowIndex";

const ROWS: Array<Row> = [
    new Row(ROW_1),
    new Row(ROW_2),
    new Row(ROW_3),
    new Row(ROW_4),
    new Row(ROW_5),
    new Row(ROW_6),
    new Row(ROW_7),
    new Row(ROW_8),
];

export function getRowByIndex(index: number): Row {
    let optionalRow: ?Row = ROWS.find(row => row.getIndex() === index);
    if (!optionalRow) {
        throw new Error('Index out of bounds');
    }

    return optionalRow;


}

export function rows(): Array<Row> {
    return ROWS;
}
