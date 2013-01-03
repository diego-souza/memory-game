describe("Game", function() {

  describe("New Game", function(){
    it("should be able to start a game", function() {
      expect(new MemoryGame.Game()).toBeDefined();
    });

    it("should have 5 pairs by default", function() {
      expect(new MemoryGame.Game().remainingPairs()).toEqual(5);
    });

    it("should be able to start game with number of pairs", function() {
      expect(new MemoryGame.Game(6).remainingPairs()).toEqual(6);
    });

    it("should start with score 0", function() {
      expect(new MemoryGame.Game(6).score()).toEqual(0);
    });
  });

  describe("board", function(){

    it("should have a board", function() {
      expect(new MemoryGame.Game().board()).toBeDefined();
    });


    it("content should be question mark at the beginnig", function() {
      game = new MemoryGame.Game(1);
      expect(game.board()[0]).toEqual("?");
      expect(game.board()[1]).toEqual("?");
    });

  });

  describe("Playing Game", function(){
    it("should change board when picking a piece", function(){
      //var myBoard = new MemoryGame.Board
      //spyOn(myBoard, 'play').andReturn(true)
      //spyOn(MemoryGame, 'Board').andReturn(myBoard);
      game = new MemoryGame.Game(1);
      game.play(0);
      expect(game.board()[0]).toEqual(1);
      expect(game.board()[1]).toEqual("?");
      game.play(1);
      expect(game.board()[0]).toEqual(1);
      expect(game.board()[1]).toEqual(1);
    });

    it("should get point after playing two pieces of the same value", function(){
      game = new MemoryGame.Game(1);
      game.play(0);
      game.play(1);
      expect(game.score()).toEqual(1);
    });
  });

});
