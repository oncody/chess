import {Column} from "./Column";

export enum Row {
    ROW_1 = 1,
    ROW_2,
    ROW_3,
    ROW_4,
    ROW_5,
    ROW_6,
    ROW_7,
    ROW_8
}

export function rows(): Array<Row> {
    let rows: Array<Row> = [];

    for(let rowString in Row) {
        // when iterating over enums it doubles the values. one for int -> string and one for string -> int
        if (!isNaN(Number(rowString))) {
            let row: Row = Row[Row[rowString] as keyof typeof Row];
            rows.push(row);
        }
    }

    return rows;
}
