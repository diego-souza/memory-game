var MemoryGame = MemoryGame || {};

MemoryGame.Piece = function(value){
  var self = this;
  self.flipped = false;
  self.selected = false;
  self.value = value;

  self.getValue = function(){
    return self.value;
  }

  self.isFlipped = function(){
    return self.flipped;
  }

  self.isSelected = function(){
    return self.selected;
  }

  self.matches = function(piece){
    return self.value == piece.value;
  }

  self.getContent = function(){
    if (self.isFlipped()){
      return self.value;
    }
    else {
      return "?";
    }
  }

  self.flip = function(){
    if(!self.isFlipped()){
      self.flipped = true;
    }
    else{
      throw new Error("Piece is already flipped.");
    }
  }

  self.select = function(){
    self.flip()
    self.selected = true
  }

  self.reset = function(){
    if (self.isSelected()) {
      self.flipped = false
      self.selected = false
    }
    else {
      throw new Error("Piece is not selected.")
    }
  }

  self.pin = function(){
    if (self.isSelected()) {
      self.selected = false
    }
    else {
      throw new Error("Piece is not selected.")
    }
  }
}

