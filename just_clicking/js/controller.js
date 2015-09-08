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
                view.lightUpSquare( square );
                var click = view.squareClicked();
                if (click !== undefined){
                  console.log(click);
                  scoreClick(click);
                }
              }, 1000);
            };

  var scoreClick = function(arr){
    model.scoreClick(arr[0], arr[1]);
  };

  return {
    init: init
  };
})(JC.model, JC.view, $);
