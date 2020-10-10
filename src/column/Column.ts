import {getColumnByIndex} from './Columns'
import {ColumnLetter} from './ColumnLetter';

export default class Column {
    letter: ColumnLetter;

    constructor(letter: ColumnLetter) {
        this.letter = letter;
    }

    getLetter(): ColumnLetter {
        return this.letter;
    }

    getIndex(): number {
        // todo see if this works
        return this.letter.valueOf();
    }

    previous(): Column {
        let optionalColumn: Column | undefined = getColumnByIndex(this.getIndex() - 1);
        if(!optionalColumn) {
            throw new Error('Index out of bounds');
        }

        return optionalColumn;
    }

    next(): Column {
        let optionalColumn: Column | undefined = getColumnByIndex(this.getIndex() + 1);
        if(!optionalColumn) {
            throw new Error('Index out of bounds');
        }

        return optionalColumn;
    }

    distance(column: Column): number {
        return Math.abs(this.getIndex() - column.getIndex());
    }
}
