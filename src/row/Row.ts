import {getRowByIndex} from './Rows'
import {BoardIndex} from '../BoardIndex';

export default class Row {
    index: BoardIndex;

    constructor(index: BoardIndex) {
        this.index = index;
    }

    getIndex(): BoardIndex {
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
