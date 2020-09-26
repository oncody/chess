import Column from './Column';

import {
    COLUMN_A,
    COLUMN_B,
    COLUMN_C,
    COLUMN_D,
    COLUMN_E,
    COLUMN_F,
    COLUMN_G,
    COLUMN_H
} from './ColumnLetter';

import {
    COLUMN_1,
    COLUMN_2,
    COLUMN_3,
    COLUMN_4,
    COLUMN_5,
    COLUMN_6,
    COLUMN_7,
    COLUMN_8
} from './ColumnIndex';

import type {ColumnIndex} from './ColumnIndex';
import type {ColumnLetter} from './ColumnLetter';

const COLUMNS: Array<Column> = [
    new Column(COLUMN_A, COLUMN_1),
    new Column(COLUMN_B, COLUMN_2),
    new Column(COLUMN_C, COLUMN_3),
    new Column(COLUMN_D, COLUMN_4),
    new Column(COLUMN_E, COLUMN_5),
    new Column(COLUMN_F, COLUMN_6),
    new Column(COLUMN_G, COLUMN_7),
    new Column(COLUMN_H, COLUMN_8)
];

export function getColumnByIndex(index: number): Column {
    let optionalColumn: ?Column = COLUMNS.find(column => column.getIndex() === index);
    if(!optionalColumn) {
        throw new Error('Index out of bounds');
    }

    return optionalColumn;
}

export function getColumnByLetter(letter: ColumnLetter): Column {
    let optionalColumn: ?Column = COLUMNS.find(column => column.getLetter() === letter);
    if(!optionalColumn) {
        throw new Error('Index out of bounds');
    }

    return optionalColumn;
}

export function columns(): Array<Column> {
    return COLUMNS;
}
