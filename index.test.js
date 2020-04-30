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
  
  // Either duplicate for each direction or iteratively test in here
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
      [null, null, null, null,    0, null, null, null],
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
      [null, null, null, null,    1, null, null, null],
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
      [null, null,    1,    1,    1, null, null, null],
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
      [null, null, null,    0,    0,    0, null, null],
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
      [null, null,    1, null, null, null, null, null],
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
      [null, null, null, null, null,    1, null, null],
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
      [null, null, null, null, null,    0, null, null],
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
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  });
  
  it('Should not flip pieces in each direction if encounters own piece first', () => {
  
  });
  
  it('Should not flip pieces in each direction if encounters null first', () => {
  
  });
  
  it('Should handle the edge of the board in each direction', () => {
  
  });
  
  it('Should flip multiple pieces at once', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    0,    1, null, null, null],
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
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 0, 1, board);
  
    expect(piecesFlipped).toBe(true);
    expect(board).toEqual(boardAfter);
  
  });
});