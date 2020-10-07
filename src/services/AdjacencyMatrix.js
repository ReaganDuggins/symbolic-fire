class AdjacencyMatrix {
    constructor(myGrid) {
        this.grid = myGrid;
        this.matrix = this.initializeMatrix(myGrid);
        this.setAdjacencies(myGrid);
    }

    initializeMatrix = (grid) => {
        let newMatrix = {};
        grid.forEach((row, r) => {
            row.forEach((col, c) => {
                let coordinateName = [r,c].toString();
                newMatrix[coordinateName] = [];
            });
        });
        return newMatrix;
    }

    setAdjacencies = (grid) => {
        grid.forEach((row, r) => {
            row.forEach((col, c) => {
                let coordinateName = [r,c].toString();
                let neighbors = this.getNeighbors(r,c);
                neighbors.forEach((neighbor) => {
                    this.matrix[coordinateName].push(neighbor);
                });
            });
        });
        return;
    }

    getNeighbors = (rowI, colI) => {
        let neighbors = [];
        for(let i = rowI-1; i < rowI + 2; i++) {
            for(let j = colI-1; j < colI + 2; j++) {
                if(i === rowI && j === colI) {
                    continue;
                }
                neighbors.push(i + ',' + j)
            }
        }
        let me = this;
        return neighbors.filter((currentCoord) => {
            let x = parseInt(currentCoord.split(',')[0]);
            let y = parseInt(currentCoord.split(',')[1]);
            return !(x < 0 || y < 0 || x >= me.grid.length || y >= this.grid.length);
        });
    }

    coordinateIndex = (coord) => {
        let index = -1;
        Object.keys(this.matrix).forEach((coordinate, i) => {
            if(coordinate === coord) {
                index = i;
            }
        });
        return index;
    }
}

module.exports = AdjacencyMatrix;