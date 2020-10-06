class Board {
    constructor(size) {
        let rows = [];
        for(let i = 0; i < size; i++) {
            let row = [];
            for(let j = 0; j < size; j++) {
                row.push('');
            }
            rows.push(row);
        }

        this.tiles = rows;
    }
}

module.exports = Board;