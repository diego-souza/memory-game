function GameViewModel(){
  var self = this
  self.game = new MemoryGame.Game(8);
  self.score = ko.observable(self.game.getScore());
  self.pieces = ko.observableArray(self.game.getBoard());
  self.first = false
  self.playPiece = function(piece){
    self.game.play(piece);
    if(self.first){
      self.first = false;
      setTimeout(function(){this.g.endTurn()}, 1000);
    }
    else{
      self.first = true;
    }
    self.refresh()
  }
  self.endTurn = function (){
    self.game.finishTurn()
    self.refresh()
  }

  self.refresh = function(){
    self.score(0);
    self.score(self.game.getScore());
    self.pieces([]);
    self.pieces(self.game.getBoard());
  }
}

g = new GameViewModel()
ko.applyBindings(g);
