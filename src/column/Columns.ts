import Column from './Column';

import {ColumnIndex} from './ColumnIndex';
import {ColumnLetter} from './ColumnLetter';

const COLUMNS: Array<Column> = [
    new Column(ColumnLetter.COLUMN_A, ColumnIndex.COLUMN_1),
    new Column(ColumnLetter.COLUMN_B, ColumnIndex.COLUMN_2),
    new Column(ColumnLetter.COLUMN_C, ColumnIndex.COLUMN_3),
    new Column(ColumnLetter.COLUMN_D, ColumnIndex.COLUMN_4),
    new Column(ColumnLetter.COLUMN_E, ColumnIndex.COLUMN_5),
    new Column(ColumnLetter.COLUMN_F, ColumnIndex.COLUMN_6),
    new Column(ColumnLetter.COLUMN_G, ColumnIndex.COLUMN_7),
    new Column(ColumnLetter.COLUMN_H, ColumnIndex.COLUMN_8)
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
