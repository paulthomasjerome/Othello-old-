//instantiate the first player's color, black is 0 and white is 1
let currentPlayer = 0;

//if the current player is black the opponent is white and vice versa
let opponent = (currentPlayer === 0) ? 1 : 0;

//set the initial state of the logical board
const board = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, 0, 1, null, null, null],
  [null, null, null, 1, 0, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

//UI METHODS
const paint = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === 0) {
        $('.square[data-row=' + row + '][data-col=' + col + ']').children().css('background-color', 'black');
      } else if (board[row][col] === 1) {
        $('.square[data-row=' + row + '][data-col=' + col + ']').children().css('background-color', 'white');
      }
    }
  }
}

const initializeBoard = board => {
  //select the board
  const $board = $('#board');
  //for each row of the board
  for (let row = 0; row < board.length; row++) {
    //instantiate $row 
    const $row = $('<div></div>').addClass('row');
    //for each space in this row
    for (let col = 0; col < board.length; col++) {
      //instantiate square
      const $square = $('<div></div>').addClass('square');

      //set index for each square row
      $square.attr('data-row', row);
      //set index for each square column
      $square.attr('data-col', col);

      //instantiate placement
      const $placement = $('<div></div>').addClass('placement');

      $square.append($placement);

      //add $square to $row
      $row.append($square);
    }
    //add this row to the board
    $board.append($row);
  }
  paint(board);
}

const getInput = () => {
  const $row = 0;
  const $col = 0;
  let theMove = {};

  $('.square').click(function () {
    $row = $(this).attr('data-row');
    $col = $(this).attr('data-col');
    theMove.row = $row;
    theMove.col = $col;
  });

  return theMove;
}

//LOGICAL METHODS

//Process the current players move
const processMove = (moveRow, moveCol, player, board) => {

  //instantiate flag for whether or not pieces have been flipped
  let piecesFlipped = false;

  let validFlip = false;

  //check all directions
  for (let vertical = -1; vertical <= 1; vertical++) {
    for (let horizontal = -1; horizontal <= 1; horizontal++) {

      if (board[moveRow + vertical][moveCol + horizontal] === opponent) {
        validFlip = flipPieces(moveRow + vertical, moveCol + horizontal, vertical, horizontal, player, board);
      }
      if (validFlip) piecesFlipped = true;
    }
  }

  //if pieces were flipped
  if (piecesFlipped) {
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
  console.log(board);
  paint(board);
}

const flipPieces = (startRow, startCol, vertical, horizontal, player, board) => {

  //instantiate flipPositions
  const flipPositions = [];

  //instantiate local storage for passed in values
  let row = startRow;
  let col = startCol;
  const rowPositionTranslate = vertical;
  const colPositionTranslate = horizontal;

  //while we have not seen the players color
  while (board[row][col] !== player) {

    //if we see the oponenets piece
    if (board[row][col] === opponent) {
      //record the current position for our output
      flipPositions.push({
        row: row,
        col: col
      });
    }

    //update the position we are checking
    row += rowPositionTranslate;
    col += colPositionTranslate;

    if (board[row][col] === null) {
      return false;
    }

  }

  //flip pieces
  for (let i = 0; i < flipPositions.length; i++) {
    board[flipPositions[i].row][flipPositions[i].col] = player;
  }

  //return the number of pieces flipped
  return true;

}

initializeBoard(board);

// console.log(board);
// processMove(3, 5, currentPlayer, board);
// paint(board);



