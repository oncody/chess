import {getColumnByLetter, getColumnByIndex} from './Columns'

class Column {
    letter: string;
    index: number;

    constructor(letter: string, index: number) {
        this.letter = letter;
        this.index = index;
    }

    getLetter(): string {
        return this.letter;
    }

    getIndex(): number {
        return this.index;
    }

    previous(): Column {
        return getColumnByIndex(this.getIndex() - 1)
    }

    next(): Column {
        return getColumnByIndex(this.getIndex() + 1)
    }

    distance(column: Column): number {
        return Math.abs(this.getIndex() - column.getIndex());
    }
}

export default Column;
