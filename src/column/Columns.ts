import Column from './Column';
import {ColumnLetter} from './ColumnLetter';
import {BoardIndex} from '../BoardIndex';

const COLUMNS: Array<Column> = [
    new Column(ColumnLetter.COLUMN_A),
    new Column(ColumnLetter.COLUMN_B),
    new Column(ColumnLetter.COLUMN_C),
    new Column(ColumnLetter.COLUMN_D),
    new Column(ColumnLetter.COLUMN_E),
    new Column(ColumnLetter.COLUMN_F),
    new Column(ColumnLetter.COLUMN_G),
    new Column(ColumnLetter.COLUMN_H)
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
