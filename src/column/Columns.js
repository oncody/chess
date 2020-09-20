import Column from './Column';

import type ColumnLetter, {
    COLUMN_A,
    COLUMN_B,
    COLUMN_C,
    COLUMN_D,
    COLUMN_E,
    COLUMN_F,
    COLUMN_G,
    COLUMN_H
} from './ColumnLetter';

import type ColumnIndex, {
    COLUMN_1,
    COLUMN_2,
    COLUMN_3,
    COLUMN_4,
    COLUMN_5,
    COLUMN_6,
    COLUMN_7,
    COLUMN_8
} from './ColumnIndex';

const COLUMNS = [
    new Column(COLUMN_A, COLUMN_1),
    new Column(COLUMN_B, COLUMN_2),
    new Column(COLUMN_C, COLUMN_3),
    new Column(COLUMN_D, COLUMN_4),
    new Column(COLUMN_E, COLUMN_5),
    new Column(COLUMN_F, COLUMN_6),
    new Column(COLUMN_G, COLUMN_7),
    new Column(COLUMN_H, COLUMN_8)
];

let getColumnByIndex = function(index: number) {
    return COLUMNS.find(column => column.getIndex() === index);
}

let getColumnByLetter = function(letter: string) {
    return COLUMNS.find(column => column.getLetter() === letter);
}

export {getColumnByIndex, getColumnByLetter};
