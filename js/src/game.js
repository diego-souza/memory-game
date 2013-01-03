var MemoryGame = MemoryGame || {};

MemoryGame.Game = function (numberOfPairs){
  var self = this;
  self.pairs = typeof numberOfPairs !== 'undefined' ? numberOfPairs : 5;
  self.gameBoard = new MemoryGame.Board;
  self.gameScore = 0;

  self.score = function (){
    return self.gameScore;
  }

  self.remainingPairs = function (){
    return self.pairs;
  }

  self.board = function (){
    return self.gameBoard.space();
  }

  self.play = function(pieceNumber){
    return self.gameBoard.play(pieceNumber);
  }
}

MemoryGame.Board = function(){
  var self = this;
  self.pieces = [new MemoryGame.Piece(1), new MemoryGame.Piece(1)];
  self.space = function(){
    returnArray = [];
   self.pieces.forEach(function(x){ returnArray.push(x.getContent()) })
    return returnArray;
  }

  self.play = function(pieceNumber){
    //pinnedPieces = self.pieces.filter(MemoryGame.Piece.isPinned)
    self.pieces[pieceNumber].flip();
  }
}
