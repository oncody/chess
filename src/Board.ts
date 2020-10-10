import Square from './Square';
import {Column} from './Column';
import Coordinate from './Coordinate';
import {Row} from './Row';
import {Color} from "./Color";

class Board {
    /**
     * Outer array is columns
     * Inner array is rows
     */
    squares: Array<Array<Square>>;

    constructor() {
        this.squares = [];
        let isBlack = true;

        for(let columnString in Column) {
            if(isNaN(Number(columnString))) {
                continue;
            }

            let column: Column = Column[Column[columnString] as keyof typeof Column];
            let squaresRow: Array<Square> = [];

            for(let rowString in Row) {
                if(isNaN(Number(rowString))) {
                    continue;
                }

                let row: Row = Row[Row[rowString] as keyof typeof Row];
                let color = isBlack ? Color.Black : Color.White;
                let coordinate = new Coordinate(column, row);
                let square = new Square(color, coordinate);
                squaresRow.push(square);
                isBlack = !isBlack;
            }

            this.squares.push(squaresRow);
            isBlack = !isBlack;
        }
    }

    getSquare(column: Column, row: Row) {
        return this.squares[column][row];
    }

    print() {
        for(let columnString in Column) {
            let column: Column = Column[Column[columnString] as keyof typeof Column];
            // console.log('column: ' + column + ' type:' + (typeof column));
        }

        for(let rowString in Row) {
            let row: Row = Row[Row[rowString] as keyof typeof Row];
            // console.log('row: ' + row + ' type:' + (typeof row));
        }

        for(const column of this.squares.slice().reverse()) {
            let string = '';

            for(const square of column) {
                let squareColor = square.getColor() === Color.Black ? 'B' : 'W';
                string += squareColor;
                string += ' ';
            }

            console.log(string);
        }
    }
}

export default Board;
