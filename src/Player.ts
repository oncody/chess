import {Color} from './Color';

export default class Player {
    color: Color;
    hasMovedKing: boolean = false;
    hasCastled: boolean = false;

    constructor(color: Color) {
        this.color = color;
    }
}
