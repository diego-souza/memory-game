describe("Piece", function(){
  beforeEach(function(){
    piece = new MemoryGame.Piece(1)
  });

  it("should not be flipped by default", function(){
    expect(piece.isFlipped()).not.toBeTruthy()
  })

  it("should have the value passed as param", function(){
    expect(piece.getValue()).toEqual(1)
  });

  describe("Not flipped", function(){
    it("should not be flipped", function(){
      expect(piece.isFlipped()).not.toBeTruthy()
    });

    it("can be flipped", function(){
      piece.flip()
      expect(piece.isFlipped()).toBeTruthy()
    });

    it("content is question mark", function(){
      expect(piece.getContent()).toEqual("?")
    });
  });

  describe("Flipped", function(){
    beforeEach(function(){
      piece.flip()
    });

    it("should be flipped", function(){
      expect(piece.isFlipped()).toBeTruthy()
    });

    it("can't be flipped again", function(){
      expect(function() {piece.flip()}).toThrow("Piece is already fliped.")
    });
  });
});
