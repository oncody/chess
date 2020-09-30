import Row from './Row';
import type {RowIndex} from "./RowIndex";

const ROWS: Array<Row> = [
    new Row(RowIndex.ROW_1),
    new Row(RowIndex.ROW_2),
    new Row(RowIndex.ROW_3),
    new Row(RowIndex.ROW_4),
    new Row(RowIndex.ROW_5),
    new Row(RowIndex.ROW_6),
    new Row(RowIndex.ROW_7),
    new Row(RowIndex.ROW_8),
];

export function getRowByIndex(index: number): Row {
    let optionalRow: Row | undefined = ROWS.find(row => row.getIndex() === index);
    if (!optionalRow) {
        throw new Error('Index out of bounds');
    }

    return optionalRow;
}

export function rows(): Array<Row> {
    return ROWS;
}
