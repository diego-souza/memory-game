describe("Game", function() {

  describe("New Game", function(){
    it("should be able to start a game", function() {
      expect(new MemoryGame.Game()).toBeDefined;
    });

    it("should have 5 pairs by default", function() {
      expect(new MemoryGame.Game().remainingPairs()).toEqual(5);
    });

    it("should be able to start game with number of pairs", function() {
      expect(new MemoryGame.Game(6).remainingPairs()).toEqual(6);
    });
  });

  describe("board", function(){

    it("should have a board", function() {
      expect(new MemoryGame.Game().board()).toBeDefined;
    });

    it("should have pieces on the board", function() {
      game = new MemoryGame.Game(2)
      expect(game.board().length).toEqual(2);
      expect(game.board()[0] instanceof MemoryGame.Piece).toBeTruthy()
    });

  });

});
