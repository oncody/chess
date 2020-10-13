export enum Column {
    A = 1,
    B,
    C,
    D,
    E,
    F,
    G,
    H
}

export function columns(): Array<Column> {
    let columns: Array<Column> = [];

    for( let columnString in Column) {
        // when iterating over enums it doubles the values. one for int -> string and one for string -> int
        if(!isNaN(Number(columnString))) {
            let column: Column = Column[Column[columnString] as keyof typeof Column];
            columns.push(column);
        }
    }

   return columns;
}

