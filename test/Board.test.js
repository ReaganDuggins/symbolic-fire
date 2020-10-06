var should = require('chai').should();
let Board = require('../src/services/Board');

describe('When board is created', () => {
    it('should have a size', () => {
        let board = new Board(10);
        board.tiles.length.should.equal(10);
        // board.tiles[10].length.should.equal(10);
    });
});