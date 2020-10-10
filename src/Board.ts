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
            let column: Column = Column[Column[columnString] as keyof typeof Column];
            let squaresColumn = [];

            for(let rowString in Row) {
                let row: Row = Row[Row[rowString] as keyof typeof Row];
                let color = isBlack ? Color.Black : Color.White;
                let coordinate = new Coordinate(column, row);
                let square = new Square(color, coordinate);
                squaresColumn.push(square);
                isBlack = !isBlack;
            }

            this.squares.push(squaresColumn);
            isBlack = !isBlack;
        }
    }

    getSquare() {

    }

    print() {
        for(const column of this.squares) {
            let string = '';

            for(const square of column) {
                string += ' ';
                let squareColor = square.getColor() === Color.Black ? 'B' : 'W';
                string += squareColor;
            }

            console.log(string);
        }
    }
}

export default Board;
