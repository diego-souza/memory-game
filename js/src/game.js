var MemoryGame = MemoryGame || {}

MemoryGame.Game = function (numberOfPairs){
  var self = this
  self.pairs = typeof numberOfPairs !== 'undefined' ? numberOfPairs : 5;
  self.gameBoard = new MemoryGame.Board

  self.remainingPairs = function (){
    return self.pairs
  }

  self.board = function (){
    return self.gameBoard.space()
  }

  self.play = function(pieceNumber){

  }
}

MemoryGame.Board = function(){
  var self = this
  self.space = function(){
    return [new MemoryGame.Piece, new MemoryGame.Piece]
  }

  self.play = function(){
  }
}

MemoryGame.Piece = function(){
  var self = this
}
