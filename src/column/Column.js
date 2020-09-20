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

    getPreviousColumn(column: Column) {
        return getColumnByIndex(column.getIndex() - 1)
    }

    getNextColumn(column: Column) {
        return getColumnByIndex(column.getIndex() + 1)
    }
}

export default Column;
