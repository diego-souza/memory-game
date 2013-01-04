var MemoryGame = MemoryGame || {};

MemoryGame.Game = function (numberOfPairs){
  var self = this;
  self.numberOfPairs = typeof numberOfPairs !== 'undefined' ? numberOfPairs : 5;

  self.createPieces = function(){
    arrayOfPieces = []
    for (var i=1; i <= self.numberOfPairs; i++) {
      arrayOfPieces.push(new MemoryGame.Piece(i), new MemoryGame.Piece(i));
    }
    MemoryGame.shuffle(arrayOfPieces)
    return arrayOfPieces
  }

  self.pieces = self.createPieces()

  self.getScore = function (){
    return self.getPinned().length / 2;
  }

  self.remainingPairs = function (){
    return self.getNotFlipped().length / 2
  }

  self.getBoard = function (){
    returnArray = [];
    self.pieces.forEach(function(p){ returnArray.push(p.getContent()) })
    return self.pieces;
  }

  self.getNotFlipped = function (){
    returnArray = [];
    self.pieces.forEach(function(p){ if(!p.isFlipped()) {returnArray.push(p)} })
    return returnArray;
  }

  self.getSelected = function (){
    returnArray = [];
    self.pieces.forEach(function(p){ if(p.isSelected()) {returnArray.push(p)} })
    return returnArray;
  }

  self.getPinned = function (){
    returnArray = [];
    self.pieces.forEach(function(p){ if(p.isPinned()) {returnArray.push(p)} })
    return returnArray;
  }

  self.play = function(piece){
    piece.select();
  }

  self.matchingPieces = function(){
    selectedPieces = self.getSelected()
    return selectedPieces[0].matches(selectedPieces[1])
  }

  self.finishTurn = function(){
    selectedPieces = self.getSelected()
    if (self.matchingPieces()){
      selectedPieces[0].pin()
      selectedPieces[1].pin()
    }
    else{
      selectedPieces[0].reset()
      selectedPieces[1].reset()
    }
  }

  self.over = function(){
    return self.remainingPairs() == 0
  }
}

MemoryGame.shuffle = function(arr){
  arr.sort(function(a,b) {
    return (0.5 - Math.random());
  });
}
