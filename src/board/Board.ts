import Square from './Square';
import {columns} from './Column';
import Coordinate from './Coordinate';
import {rows} from './Row';
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

    getSquare(coordinate: Coordinate): Square {
        // Columns and Rows range from 1 to 8
        // When we access them from the array we need to access them from 0 to 7
        return this.squares[coordinate.getColumn() - 1][coordinate.getRow() - 1];
    }

    print() {
        // We want to print from top to bottom. Column 8 first so when it prints it will be on top
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
