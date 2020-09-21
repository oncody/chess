import {getRowByIndex} from './Rows'

class Row {
    index: number;

    constructor(index: number) {
        this.index = index;
    }

    getIndex(): number {
        return this.index;
    }

    previous(): Row {
        return getRowByIndex(this.getIndex() - 1)
    }

    next(): Row {
        return getRowByIndex(this.getIndex() + 1)
    }

    distance(row: Row): number {
        return Math.abs(this.getIndex() - row.getIndex());
    }
}

export default Row;
