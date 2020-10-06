var should = require('chai').should();
let Board = require('../src/services/Board');

describe('Board', () => {
    describe('When board is created', () => {
        it('should have a size', () => {
            let board = new Board(10);
            board.tiles.length.should.equal(10);
            board.tiles[9].length.should.equal(10);
        });
    });

    describe('When finding neighbors of a cell', () => {
        let board;
        beforeEach(() => {
            board = new Board(10);
        })

        it('should find all eight if they exist', () => {
            let neighbors = board.findNeighbors(3, 3);
            neighbors.length.should.equal(8);
        });

        it('should ignore off-the-board neighbors', () => {
            let neighbors = board.findNeighbors(1,1);
            neighbors.length.should.equal(3);
        });
    });
});