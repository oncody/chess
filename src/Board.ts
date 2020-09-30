import Square from './Square';
import {columns} from './column/Columns';
import {BLACK, WHITE} from './Color';
import Coordinate from './Coordinate';
import {rows} from './row/Rows';

class Board {
    /**
     * Outer array is columns
     * Inner array is rows
     */
    squares: Array<Array<Square>>;

    constructor() {
        this.squares = [];
        let isBlack = true;

        for(const column of columns()) {
            let squaresColumn = [];

            for(const row of rows()) {
                let color = isBlack ? BLACK : WHITE;
                let coordinate = new Coordinate(column, row);
                let square = new Square(color, coordinate);
                squaresColumn.push(square);
                isBlack = !isBlack;
            }

            this.squares.push(squaresColumn);
            isBlack = !isBlack;
        }
    }

    print() {
        for(const column of this.squares) {
            let string = '';

            for(const square of column) {
                string += ' ';
                let squareColor = square.getColor() === BLACK ? 'B' : 'W';
                string += squareColor;
            }

            console.log(string);
        }
    }
}

export default Board;
