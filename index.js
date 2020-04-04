const piecesToFlip = (startRow, startCol, vertical, horizontal, player) => {
  
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

  }

  //flip pieces
  for(let i = 0; i < flipPositions.length; i++) {
    board[flipPositions[i].row][flipPositions[i].col] = player;
  }

  //return the positions of the pieces we need to flip in the passed in direction
  return flipPositions.length;
}

//Process the current players move
const processMove = (moveRow, moveCol, player) => {

  //instantiate flag for whether or not pieces have been flipped
  let piecesFlipped = false;

  //instantiate local storage for the players chose row and column
  const row = moveRow;
  const col = moveCol;

  //instantiate vertical and horizontal translation
  let vertical = 0;
  let horizontal = 0;

  //if (0)west([row][col - 1]) adjacent is opposite color
  if(board[row][col - 1] === opponent) {
    vertical = 0;
    horizontal = -1;
    const flipped = piecesToFlip(row, col - 1, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }     

  //if (1)southwest([row + 1][col - 1]) adjacent is opposite color
  if(board[row + 1][col - 1] === opponent) {
    vertical = 1;
    horizontal = -1;
    const flipped = piecesToFlip(row + 1, col - 1, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }    

  //if (2)south([row + 1][col]) adjacent is opposite color
  if(board[row + 1][col] === opponent) {
    vertical = 1;
    horizontal = 0;
    const flipped = piecesToFlip(row + 1, col, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }     

  //if (3)southeast([row + 1][col + 1]) adjacent is opposite color
  if(board[row + 1][col + 1] === opponent) {
    vertical = 1;
    horizontal = 1;
    const flipped = piecesToFlip(row + 1, col + 1, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }    

  //if (4)east([row][col + 1]) adjacent is opposite color
  if(board[row][col + 1] === opponent) {
    vertical = 0;
    horizontal = 1;
    const flipped = piecesToFlip(row, col + 1, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }     
  //if (5)northeast([row - 1][col + 1]) adjacent is opposite color
  if(board[row - 1][col] === opponent) {
    vertical = -1;
    horizontal = 1;
    const flipped = piecesToFlip(row - 1, col + 1, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }     

  //if (6)north([row - 1][col]) adjacent is opposite color
  if(board[row][col-1] === opponent) {
    vertical = -1;
    horizontal = 0;
    const flipped = piecesToFlip(row - 1, col, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }     

  //if (7)northwest([row - 1][col - 1]) adjacent is opposite color
  if(board[row - 1][col - 1] === opponent) {
    vertical = -1;
    horizontal = -1;
    const flipped = piecesToFlip(row - 1, col - 1, vertical, horizontal, player);
    if(flipped > 0) {
      piecesFlipped = true;
    }
  }     

  //if any pieces were flipped
  if(piecesFlipped) {
    //this move is valid and the piece can be placed where the player has chosen
    board[row][col] = player;
    //change players
    currentPlayer = opponent;
  //if no pieces were flipped
  } else {
    //let the user know they need to make a new selection
    alert('invalid move, try again!');
  }

}

//instantiate the first player's color, black is 0 and white is 1
let currentPlayer = 0;

//if the current player is black the opponent is white and vice versa
let opponent = (currentPlayer === 0) ? 1 : 0;

//set the initial state of the logical board
const board = [
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,1,0,null,null,null],
  [null,null,null,0,1,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],    
];

//test cases
//TODO find out why this move is in valid, it is a south 
processMove(4, 5, currentPlayer);
console.log(board);




