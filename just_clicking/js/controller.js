var JC = JC || {};

JC.controller = (function(model, view, $){
  var init = function(){
    view.init();
    gameLoop();
  };

  // Interval to add new squares to the board.
  var gameLoop = function(){
    setInterval( function(){
      var square = model.pickSquare();
      view.lightUpSquare(square);
      view.renderScore(model.getScore);
    }, 1000);
  };

  var scoreClick = function(x,y){
    model.scoreClick(x, y);
    console.log(x,y);
  };

  return {
    init: init,
    scoreClick: scoreClick
  };

})(JC.model, JC.view, $);
