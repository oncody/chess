import {columns} from './Column';
import {rows} from './Row';
import Coordinate from './Coordinate';

export function coordinates(): Array<Coordinate> {
    let coordinates: Array<Coordinate> = [];
    for(let column of columns()) {
        for(let row of rows()) {
            coordinates.push(new Coordinate(column, row));
        }
    }

    return coordinates;
}
