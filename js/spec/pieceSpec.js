describe("Piece", function(){
  beforeEach(function(){
    piece = new MemoryGame.Piece(1);
  });

  it("should not be flipped by default", function(){
    expect(piece.isFlipped()).not.toBeTruthy();
  });

  it("should not be selected by default", function(){
    expect(piece.isSelected()).not.toBeTruthy();
  });

  it("should not be pinned by default", function(){
    expect(piece.isPinned()).not.toBeTruthy();
  });

  it("should have the value passed as param", function(){
    expect(piece.getValue()).toEqual(1);
  });

  describe("Not flipped", function(){
    it("should not be flipped", function(){
      expect(piece.isFlipped()).not.toBeTruthy();
    });

    it("can be flipped", function(){
      piece.flip();
      expect(piece.isFlipped()).toBeTruthy();
    });

    it("content is question mark", function(){
      expect(piece.getContent()).toEqual("?");
    });
  });

  describe("Flipped", function(){
    beforeEach(function(){
      piece.flip();
    });

    it("should be flipped", function(){
      expect(piece.isFlipped()).toBeTruthy();
    });

    it("can't be flipped again", function(){
      expect(function() {piece.flip()}).toThrow("Piece is already flipped.");
    });
  });

  describe("Not selected", function(){
    it("should not be selected", function(){
      expect(piece.isSelected()).not.toBeTruthy();
    });

    it("can be selected", function(){
      piece.select();
      expect(piece.isSelected()).toBeTruthy();
    });

    it("can't be reseted", function(){
      expect(function() {piece.reset()}).toThrow("Piece is not selected.");
    });

    it("can't be pinned", function(){
      expect(function() {piece.pin()}).toThrow("Piece is not selected.");
    });

  });

  describe("Selected", function(){
    beforeEach(function(){
      piece.select();
    });

    it("should be selected", function(){
      expect(piece.isSelected()).toBeTruthy();
    });

    it("can't be selected again", function(){
      expect(function() {piece.select()}).toThrow("Piece is already flipped.");
    });

    it("can be reseted", function(){
      piece.reset();
      expect(piece.isFlipped()).not.toBeTruthy();
      expect(piece.isSelected()).not.toBeTruthy();
    });

    it("can be pinned", function(){
      piece.pin();
      expect(piece.isFlipped()).toBeTruthy();
      expect(piece.isSelected()).not.toBeTruthy();
      expect(piece.isPinned()).toBeTruthy();
    });
  });

  describe("Not pinned", function(){
    it("should not be selected", function(){
      expect(piece.isPinned()).not.toBeTruthy();
    });
  });

  describe("Pinned", function(){
    it("should be selected", function(){
      piece.select();
      piece.pin();
      expect(piece.isPinned()).toBeTruthy();
    });
  });
});
