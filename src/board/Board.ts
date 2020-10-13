import Square from '../Square';
import {Column, columns} from './Column';
import Coordinate from '../Coordinate';
import {Row, rows} from './Row';
import {Color} from "../Color";

class Board {
    /**
     * Outer array is columns
     * Inner array is rows
     */
    squares: Array<Array<Square>>;

    constructor() {
        this.squares = [];
        let isBlack = true;

         for(let column of columns()) {
            let squaresRow: Array<Square> = [];

            for(let row of rows()) {
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

    getSquare(column: number, row: number): Square {
        return this.squares[column - 1][row - 1];
    }

    print() {
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
