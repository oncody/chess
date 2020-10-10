import Row from './Row';
import {BoardIndex} from '../BoardIndex';

const ROWS: Array<Row> = [
    new Row(BoardIndex.INDEX_1),
    new Row(BoardIndex.INDEX_2),
    new Row(BoardIndex.INDEX_3),
    new Row(BoardIndex.INDEX_4),
    new Row(BoardIndex.INDEX_5),
    new Row(BoardIndex.INDEX_6),
    new Row(BoardIndex.INDEX_7),
    new Row(BoardIndex.INDEX_8)
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
