//instantiate the first player's color, black is 0 and white is 1
let currentPlayer = 0;

//if the current player is black the opponent is white and vice versa
let opponent = (currentPlayer === 0) ? 1 : 0;

//set the initial state of the logical board
const board = [
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,   1,   0,null,null,null],
  [null,null,null,   0,   1,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],    
];

//Process the current players move
const processMove = (moveRow, moveCol, player, board) => {

  //instantiate flag for whether or not pieces have been flipped
  let piecesFlipped = false;

  //DELCOM temp counter for direction loops
  let logcount = 1;
 
  let flipped = 0;

  //check all directions
  for(let vertical = -1; vertical <= 1; vertical++) {
    for(let horizontal = -1; horizontal <= 1; horizontal++) {
      
      if(board[moveRow + vertical][moveCol + horizontal] === opponent) {
        console.log('call to pieces flipped at iteration ' + logcount);

        flipped = piecesToFlip(moveRow + vertical, moveCol + horizontal, vertical, horizontal, player, board);
      }
      if(flipped) piecesFlipped = true;
      logcount++;
    }
  }

  //if pieces were flipped
  if(piecesFlipped) {
    //this move is valid and the piece can be placed where the player has chosen
    board[moveRow][moveCol] = currentPlayer;
    //change players
    currentPlayer = opponent;
    opponent = (currentPlayer === 0) ? 1 : 0;
  //if no pieces were flipped
  } else {
    //let the user know they need to make a new selection
    console.log('invalid move, try again');
  }
}

const piecesToFlip = (startRow, startCol, vertical, horizontal, player, board) => {

  //instantiate flipPositions
  const flipPositions = [];

  //instantiate local storage for passed in values
  let row = startRow;
  let col = startCol;
  const rowPositionTranslate = vertical;
  const colPositionTranslate = horizontal;

  //while we have not seen the players color
  while(board[row][col] !== player) {
    
    //if we see the oponenets piece
    if(board[row][col] === opponent) {
      //record the current position for our output
      flipPositions.push({
        row: row,
        col: col
      });
    }
   
    //update the position we are checking
    row += rowPositionTranslate; 
    col += colPositionTranslate;

    if(board[row][col] === null) {
      return false;
    }

  }

  //flip pieces
  for(let i = 0; i < flipPositions.length; i++) {
    board[flipPositions[i].row][flipPositions[i].col] = player;
  }

  //return the number of pieces flipped
  return true;

}

console.log(board);
processMove(4, 5, currentPlayer, board);
processMove(3, 5, currentPlayer, board);
processMove(2, 4, currentPlayer, board);
processMove(5, 5, currentPlayer, board);
