import Row from './Row';

import type RowIndex, {
    ROW_1,
    ROW_2,
    ROW_3,
    ROW_4,
    ROW_5,
    ROW_6,
    ROW_7,
    ROW_8
} from './RowIndex';

const ROWS = [
    new Row(ROW_1),
    new Row(ROW_2),
    new Row(ROW_3),
    new Row(ROW_4),
    new Row(ROW_5),
    new Row(ROW_6),
    new Row(ROW_7),
    new Row(ROW_8),
];

let getRowByIndex = function(index: RowIndex): Row {
    return ROWS.find(row => row.getIndex() === index);
}


export {getRowByIndex};
