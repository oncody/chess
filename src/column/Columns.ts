import Column from './Column';
import {ColumnLetter} from './ColumnLetter';
import {BoardIndex} from '../BoardIndex';

const COLUMNS: Array<Column> = [
    new Column(ColumnLetter.COLUMN_A, BoardIndex.INDEX_1),
    new Column(ColumnLetter.COLUMN_B, BoardIndex.INDEX_2),
    new Column(ColumnLetter.COLUMN_C, BoardIndex.INDEX_3),
    new Column(ColumnLetter.COLUMN_D, BoardIndex.INDEX_4),
    new Column(ColumnLetter.COLUMN_E, BoardIndex.INDEX_5),
    new Column(ColumnLetter.COLUMN_F, BoardIndex.INDEX_6),
    new Column(ColumnLetter.COLUMN_G, BoardIndex.INDEX_7),
    new Column(ColumnLetter.COLUMN_H, BoardIndex.INDEX_8)
];

export function getColumnByIndex(index: number): Column {
    let optionalColumn: Column | undefined = COLUMNS.find(column => column.getIndex() === index);
    if(!optionalColumn) {
        throw new Error('Index out of bounds');
    }

    return optionalColumn;
}

export function getColumnByLetter(letter: ColumnLetter): Column {
    let optionalColumn: Column | undefined = COLUMNS.find(column => column.getLetter() === letter);
    if(!optionalColumn) {
        throw new Error('Index out of bounds');
    }

    return optionalColumn;
}

export function columns(): Array<Column> {
    return COLUMNS;
}
