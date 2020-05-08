//instantiate the first player's color, black is 0 and white is 1
let currentPlayer = 0;

//set the initial state of the logical board
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


/**
 * The purpose of this function is to determine if the player has made a valid move, and if 
 * the move is indeed valid, it will implement that move
 * 
 * @param {number} moveRow the row position of the space chosen by the current player
 * @param {number} moveCol the column position of the space chosen by the current player
 * @param {number} player the current player
 * @param {array[][]} board the current board state
 */
const processMove = (moveRow, moveCol, player, board) => {
  //set the current opponent
  let opponent = (currentPlayer === 0) ? 1 : 0;

  //instantiate flag for whether or not pieces have been flipped
  let piecesFlipped = false;

  //initialize flag to track if we have made a valid move
  let validMove = false;

  //check all directions
  for (let vertical = -1; vertical <= 1; vertical++) {
    for (let horizontal = -1; horizontal <= 1; horizontal++) {

      //if the adjacent piece is the opponents piece
      if (board[moveRow + vertical][moveCol + horizontal] === opponent) {

        //flip the pieces and record whether or not pieces were flipped
        validMove = flipPieces (moveRow, moveCol, vertical, horizontal, player, opponent, board);

      }
      //we find any valid flips
      if (validMove) {

        //record that pieces are flipped indicating this is a valid move
        piecesFlipped = true;

      }
    }
  }

  //if pieces were flipped
  if (piecesFlipped) {
    //this move is valid and the piece can be placed where the player has chosen
    board[moveRow][moveCol] = player;
    //switch players
    currentPlayer = opponent;
    //if no pieces were flipped
  } else {
    //let the user know they need to make a new selection
    console.log('invalid move, try again');
  }
}

/**
 * The purpose of this function is flip pieces on the board if possible and inform the client
 * or user that the pieces were flipped
 * 
 * It starts at the position the player places at, then moves out in one direction looking for:
 *  - The current players piece, in which place is stops looking
 *  - The opponents piece, in which case it records it to flip if it's a valid move
 *  - A blank space/the edge of the board, in which case it also stops looking
 * 
 * @param {number} startRow the row index of the first position to check for an opponents piece
 * @param {number} startCol the column index of the first position to check for the players piece
 * @param {number} vertical helper to translate the row index when checking for the players piece
 * @param {number} horizontal helper to translate the column index when checking for the players piece
 * @param {number} player the current player
 * @param {number} opponent the current opponent
 * @param {array[][]} board the current board state
 * 
 * @return {boolean} Return true if pieces are flipped and false otherwise
 */
const flipPieces = (startRow, startCol, vertical, horizontal, player, opponent, board) => {

  //instantiate flipPositions
  const flipPositions = [];

  //store the first space we need to check in the "passed in" direction (i.e. vertical/horizontal)
  let row = startRow + vertical;
  let col = startCol + horizontal;

  if(board[row][col] === player) {
    return false;
  }

  //while we have not seen the players color
  while (board[row][col] !== player) {

    //if we have not seen the opponents piece before we see a blank space
    if (board[row][col] === null) {

      //we cannot flip pieces in the passed in direction
      return false;

    }

    //if we see the opponents piece
    if (board[row][col] === opponent) {

      //record the current position for our output
      flipPositions.push({
        row: row,
        col: col
      });

    }

    //update the position we are checking
    row += vertical;
    col += horizontal;
  }

  //for each of the positions we need to flip at
  for (let i = 0; i < flipPositions.length; i++) {
    //flip the pieces to the current players color
    board[flipPositions[i].row][flipPositions[i].col] = player;
  }

  //return that pieces were flipped
  return true;

}

// module.exports = processMove;
exports.flipPieces = flipPieces;
exports.processMove = processMove;
