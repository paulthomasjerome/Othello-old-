//instantiate the first player's color
let player = 'black';

//instantiate counter for filled spaces
let discCounter = 4;

/** 
 * Renders the current board state to the users viewport
*/
const drawBoard = board => {
  console.log('begin drawBoard()');
  //select the board
  $test = $('#test');
  //for each row of the board
  for(let row = 0; row < board.length; row++) {
    //add this row to the board
    $test.append('<div class="row"></div>');
    //for each space in this row
    // for(let col = 0; col < board.length; col++) {
    //   //add a cell to this row
    //   $('.row')[row].html().append('<div class="square"><div class="placement"></div></div>');
    //   //index the cell with data atributes
    // }
  }
}

//POF for placing a disc, will be modified to represent the board array
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

/**
 * Initializes the initial state of the game and renders the board based on that state
 */
const startGame = () => {
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

  drawBoard(board);

  //for each row of the board
    //for each space in this row
      //if a user clicks on this space
        //if this space is empty
          //if this is player black

          //if this is player white
        //else
          //alert the user that this space is occupied

}

//flip over pieces depending on the board state
const updateState = () => {

}

startGame();
//DELCOM we may have to encapsulate this in its own function to be part of the board drawing method
discPlacement(player);
