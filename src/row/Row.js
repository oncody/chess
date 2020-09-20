import {getRowByIndex} from './Rows'

class Row {
    index: number;

    constructor(index: number) {
        this.index = index;
    }

    getIndex(): number {
        return this.index;
    }

    getPreviousRow(): Row {
        return getRowByIndex(this.getIndex() - 1)
    }

    getNextRow(): Row {
        return getRowByIndex(this.getIndex() + 1)
    }
}

export default Row;
