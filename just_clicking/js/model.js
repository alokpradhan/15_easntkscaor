var JC = JC || {};

JC.model = (function(){

  // Holds squares that are currently lit up on the board.

  var activeSquares = [];

  // Randomly generates a pair of coordinates.

  var pickSquare = function(){
                var square = {
                      x: Math.floor(Math.random() * 4),
                      y: Math.floor(Math.random() * 4)
                    };
                activeSquares.push( square );
                return square;
              };

  // Checks to see if a click was on an active square.
  var scoreClick = function(x, y){
                for( var i = 0; i < this.activeSquares.length; i++ ){
                  var testSquare = this.activeSquares[i];
                  if( testSquare.x === x && testSquare.y === y ) {
                    this.incrementUpScore();
                    this.activeSquares.splice(i, 1);
                    break;
                  }
                  break;
                }
              };

  // Adds a random number between 5 and 15 to the score.
  var incrementUpScore = function(){
                      var $scoreSpan = $( "#score" );
                      var score = parseInt( $scoreSpan.text());
                      score += ( Math.floor(Math.random() * 15) + 5);
                      $scoreSpan.text( score );
                    };

  return {
    pickSquare: pickSquare,
    scoreClick: scoreClick
  };

})();
