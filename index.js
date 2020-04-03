/** 
 * Renders the current board state to the users viewport
*/
const drawBoard = board => {
  //select the board
  const $board = $('#board');
  //for each row of the board
  for(let row = 0; row < board.length; row++) {
    //instantiate $row 
    const $row = $('<div></div>').addClass('row');
    //for each space in this row
    for(let col = 0; col < board.length; col++) {
      //instantiate square
      const $square = $('<div></div>').addClass('square');
      
      //set index for each square row
      $square.attr('data-row', row);
      //set index for each square column
      $square.attr('data-col', col);

      //instantiate placement
      const $placement = $('<div></div>').addClass('placement');

      //add $square to $row
      $row.append($square);
    }
  //add this row to the board
  $board.append($row);
  }
}

//DELCOM refactor this method to be based on the board array
const discPlacement = player => {
  //if the user clicks on a square
  $('.square').click(function(){
    //if this is an open space 
    //DELCOM maybe instead of checking the color we should check the logical state?
    if($(this).children().css('background-color') === 'rgb(0, 128, 0)') {
      //if the current player is black
      if(player === 'black') {
        //draw black disk in this space
        $(this).children().toggleClass('black');
        //increase disc counter by 1
        discCounter++;
        //change player
        player = 'white';
      } else {
        //draw white disk in this space
        $(this).children().toggleClass('white');
        //change player
        player = 'black';
        //increase disc counter by 1
        discCounter++;
      }
    }
  });
}

const piecesToFlip = (startRow, startCol, direction) => {
  //instantiate flipPositions
  const flipPositions = [];
  let row = startRow;
  let col = startCol;
  //while we have not seen the players color
  while(board[row][col] !== player) {
    //if we see a blank space
    if(board[row][col] === ' ') {
      //dont record any positions
      return [];
    }
    //record the current position for our output
    flipPositions.push({
      row: row,
      col: col
    });
    row += direction.row; 
    col += direction.col;
  }

  return flipPositions;
}

/**
 * Initializes the initial state of the game and renders the board based on that state
 */
const Game = (move, player) => {

  if(player === 'b') {
    opponent = 'w';
  } else {
    opponent = 'b';
  }
  let piecesFlipped = false;
  const row = move.row;
  const col = move.col;
  
  console.log(board[row][col]);
  console.log('linebreak');
  console.log('the current player is ' + player);
  console.log('linebreak');
  console.log('the opposing player is currently ' + opponent);
      // console.log(piecesToFlip(row, col - 1, direction));

  // DELCOM we should find a way simply pass the valid directions
  // to a single valid move  

  const direction = {
    row: 0,
    col: 0
  };
    //if (0)west([row][col - 1]) adjacent is opposite color
    console.log(board[row][col - 1]);
    if(board[row][col - 1] === opponent) {
      direction.row = 0;
      direction.col = -1;
      const flipped = piecesToFlip(row, col - 1, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     
    //if (1)southwest([row + 1][col - 1]) adjacent is opposite color
    if(board[row + 1][col - 1] === opponent) {
      direction.row = 1;
      direction.col = -1;
      const flipped = piecesToFlip(row + 1, col - 1, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     
    //if (2)south([row + 1][col]) adjacent is opposite color
    if(board[row + 1][col] === opponent) {
      direction.row = 1;
      direction.col = 0;
      const flipped = piecesToFlip(row + 1, col, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     
    //if (3)southeast([row + 1][col + 1]) adjacent is opposite color
    if(board[row + 1][col + 1] === opponent) {
      direction.row = 1;
      direction.col = 1;
      const flipped = piecesToFlip(row + 1, col + 1, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     
    //if (4)east([row][col + 1]) adjacent is opposite color
    if(board[row][col + 1] === opponent) {
      direction.row = 0;
      direction.col = 1;
      const flipped = piecesToFlip(row, col + 1, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     
    //if (5)northeast([row - 1][col + 1]) adjacent is opposite color
    if(board[row - 1][col] === opponent) {
      direction.row = -1;
      direction.col = 1;
      const flipped = piecesToFlip(row - 1, col + 1, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     
    //if (6)north([row - 1][col]) adjacent is opposite color
    if(board[row][col-1] === opponent) {
      direction.row = -1;
      direction.col = 0;
      const flipped = piecesToFlip(row - 1, col, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     
    //if (7)northwest([row - 1][col - 1]) adjacent is opposite color
    if(board[row - 1][col - 1] === opponent) {
      direction.row = -1;
      direction.col = -1;
      const flipped = piecesToFlip(row - 1, col - 1, direction);
      console.log(flipped);
      if(flipped.length) {
        piecesFlipped = true;
        for(let i = 0; i < flipped.length; i++) {
          board[flipped[i].row][flipped[i].col] = player;
        }
      }
    }     

  if(piecesFlipped) {
    board[row][col] = player;
  } else {
    alert('invalid move, try again!');
  }

  console.log('linebreak');
  console.log(board);
}

//instantiate the first player's color
let player = 'w';

//set the initial state of the logical board
const board = [
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','w','b',' ',' ',' '],
  [' ',' ',' ','b','w',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],    
];

//test move
const theMove = {
  row: 2,
  col: 5
}

Game(theMove, player);



