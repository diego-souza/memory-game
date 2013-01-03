var MemoryGame = MemoryGame || {}

MemoryGame.Piece = function(value){
  var self = this
  self.flipped = false
  self.value = value

  self.getValue = function(){
    return self.value
  }

  self.isFlipped = function(){
    return self.flipped
  }

  self.matches = function(piece){
    return self.value == piece.value
  }

  self.getContent = function(){
    if (self.isFlipped()){
      return self.value
    }
    else {
      return "?"
    }
  }

  self.flip = function(){
    if(self.isFlipped()){
      throw new Error("Piece is already fliped.");
    }
    else{
      self.flipped = true
    }
  }
}

