var MemoryGame = MemoryGame || {};

MemoryGame.Game = function (numberOfPairs){
  var self = this;
  self.numberOfPairs = typeof numberOfPairs !== 'undefined' ? numberOfPairs : 5;
  self.pieces = [new MemoryGame.Piece(1), new MemoryGame.Piece(1)];
  self.score = 0;

  self.getScore = function (){
    return self.score;
  }

  self.remainingPairs = function (){
    return self.numberOfPairs;
  }

  self.getBoard = function (){
    returnArray = [];
    self.pieces.forEach(function(x){ returnArray.push(x.getContent()) })
    return returnArray;
  }

  self.play = function(pieceNumber){
    self.pieces[pieceNumber].select();
  }
}
