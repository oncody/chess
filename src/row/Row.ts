import {getRowByIndex} from './Rows'
import {RowIndex} from "./RowIndex";

export default class Row {
    index: RowIndex;

    constructor(index: RowIndex) {
        this.index = index;
    }

    getIndex(): RowIndex {
        return this.index;
    }

    previous(): Row {
        let optionalRow: Row | undefined = getRowByIndex(this.getIndex() - 1);
        if(!optionalRow) {
            throw new Error('Index out of bounds');
        }

        return optionalRow;
    }

    next(): Row {
        let optionalRow: Row | undefined = getRowByIndex(this.getIndex() + 1);
        if(!optionalRow) {
            throw new Error('Index out of bounds');
        }

        return optionalRow;
    }

    distance(row: Row): number {
        return Math.abs(this.getIndex() - row.getIndex());
    }
}
