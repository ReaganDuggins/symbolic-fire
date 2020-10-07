let should = require('chai').should();
const Tile = require('../src/services/tiles/Tile');
const Heap = require('heap');
const AdjacencyMatrix = require('../src/services/AdjacencyMatrix');

describe.only('AdjacencyMatrix', () => {
    describe('initializeMatrix()', () => {
        it('should create a matrix based on the given grid', () => {
            let grid = [
                [0,0],
                [0,0]
            ];
            let adjMatrix = new AdjacencyMatrix(grid);

            let expected = {
                '0,0': [], 
                '0,1': [], 
                '1,0': [], 
                '1,1': []
            };

            adjMatrix.matrix.should.deep.equal(expected);
        });
    });

    describe.only('setAdjacencies()', () => {
        it('should set adjacencies for the grid', () => {
            let grid = [
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ];
            let adjMatrix = new AdjacencyMatrix(grid);

            let index = adjMatrix.coordinateIndex('0,0');
            console.log(adjMatrix);
            adjMatrix.matrix['0,0'].length.should.equal(3);
        });
    });

    describe('coordinateIndex()', () => {
        it('should return the index of the given coordinate', () => {
            let grid = [
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ];
            let adjMatrix = new AdjacencyMatrix(grid);

            let actualIndex = adjMatrix.coordinateIndex('2,3');
            actualIndex.should.equal(11);
        })
    });
});