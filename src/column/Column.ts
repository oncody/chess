import {getColumnByIndex} from './Columns'
import {ColumnLetter} from './ColumnLetter';
import {BoardIndex} from '../BoardIndex';

export default class Column {
    letter: ColumnLetter;
    index: BoardIndex;

    constructor(letter: ColumnLetter, index: BoardIndex) {
        this.letter = letter;
        this.index = index;
    }

    getLetter(): ColumnLetter {
        return this.letter;
    }

    getIndex(): BoardIndex {
        return this.index;
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
