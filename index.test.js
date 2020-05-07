const flipPieces = require('./index.js');
// const proccessMove = require('./index.js');

describe('flipPieces', () => {
  it('Should flip pieces if there are pieces to flip', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces if there aren\'t any to flip', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  // Currently broken
  it('Should not flip pieces if the play doesn\'t sandwich the opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  //it should not flip pieces if it encounters its own piece first
  it('Should not flip pieces from north to south if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from south to north if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from west to east if it encounters player piece before opponent ', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from east to west if it encounters player piece before opponent ', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from northwest to southeast if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southeast to northwest if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });

  it('Should not flip pieces from northeast to southwest if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southwest to northeast if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });

  //it should flip pieces in each direction
  it('Should flip pieces from north to south', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should flip pieces from south to north', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should flip pieces from west to east', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should flip pieces from east to west', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should flip pieces from northwest to southeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should flip pieces from southeast to northwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should flip pieces from northeast to southwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should flip pieces from southwest to northeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  //it should not flip pieces if it encounters null first
  it('Should not flip pieces from north to south if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from south to north if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from west to east if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from east to west if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from northwest to southeast if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southeast to northwest if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from northeast to southwest if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southwest to northeast if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(false);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should handle the edge of the board at cartesian quadrant I from north to south', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    1],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 7, 1, 0, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant I from east to west', () => {
    const board = [
      [null, null, null, null, null,    0,    1, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null,    0,    0, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 7, 0, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant I from northeast to southwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null,    1, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null,    0, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 7, 1, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant II from north to south', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 0, 1, 0, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  
  });

  it('Should handle the edge of the board at cartesian quadrant II from west to east', () => {
    const board = [
      [null,    1,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null,    0,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 0, 0, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant II from northwest to southeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 0, 1, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant III from south to north', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 0, -1, 0, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant III from west to east', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null,    1,    0, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null,    0,    0, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 0, 0, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant III from southwest to northeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 0, -1, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant IV from south to north', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null,    1],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 7, -1, 0, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant IV from east to west', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0,    1, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0,    0, null],
    ];

    const piecesFlipped = flipPieces(7, 7, 0, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant IV from southeast to northwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null,    1, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null,    0, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 7, -1, -1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should flip multiple pieces at once', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  
  });
  
  //does not work as a test because flipPieces only checks the direction passed in
  // it('Should flip multiple directions simultaneously', () => {
  //   const board = [
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null,    0,    1, null, null, null],
  //     [null, null, null,    1,    1, null, null, null],
  //     [null, null, null,    0, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //   ];
  //   const boardAfter = [
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null,    0,    0, null, null, null],
  //     [null, null, null,    1,    0, null, null, null],
  //     [null, null, null,    0, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //     [null, null, null, null, null, null, null, null],
  //   ];

  //   const piecesFlipped = flipPieces(3, 5, ?, ?, 0, 1, board);
  
  //   expect(piecesFlipped).toBe(true);
  //   expect(board).toEqual(boardAfter);
  
  // });
});