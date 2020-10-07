const Tile = require("./tiles/Tile");

class Board {
    constructor(size) {
        let rows = [];
        for(let i = 0; i < size; i++) {
            let row = [];
            for(let j = 0; j < size; j++) {
                row.push(new Tile());
            }
            rows.push(row);
        }

        this.tiles = rows;
    }

    isOnBoard = (row, col) => {
        return row >= 0 && 
        col >= 0 && 
        row < this.tiles.length &&
        col < this.tiles[0].length;
    }

    toString = () => {

        return this.tiles.map((row) => {
            return row.map((tile) => {
                return tile.symbol;
            });
        });
    }
}

module.exports = Board;