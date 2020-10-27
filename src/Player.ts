import {Color} from './Color';

export default class Player {
    color: Color;
    hasKingMoved: boolean = false;
    hasRookAMoved: boolean = false;
    hasRookHMoved: boolean = false;
    hasCastled: boolean = false;

    constructor(color: Color) {
        this.color = color;
    }

    getColor(): Color {
        return this.color;
    }
}
