//instantiate the first player's color
let player = 'black';

//instantiate counter for filled spaces
let discCounter = 4;

// draw the gameboard
const drawBoard = () => {

}

//place a disc
const discPlacement = player => {
  //if the user clicks on a square
  $('.placement').click(function(){
    //if this is an open space
    if($(this).css('background-color') === 'rgb(0, 128, 0)') {
      //if the current player is black
      if(player === 'black') {
        //draw black disk in this space
        $(this).toggleClass('black');
        //increase disc counter by 1
        discCounter++;
        //change player
        player = 'white';
      } else {
        //draw white disk in this space
        $(this).toggleClass('white');
        //change player
        player = 'black';
        //increase disc counter by 1
        discCounter++;
      }
    }
  });
}

//flip over pieces depending on the board state
const updateState = () => {

}


discPlacement(player);
