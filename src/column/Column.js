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

    getPreviousColumn() {
        return getColumnByIndex(this.getIndex() - 1)
    }

    getNextColumn() {
        return getColumnByIndex(this.getIndex() + 1)
    }
}

export default Column;
