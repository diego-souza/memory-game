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
      expect(new MemoryGame.Game(6).getScore()).toEqual(0);
    });

    describe("board", function(){

      it("should have a board", function() {
        expect(new MemoryGame.Game().getBoard()).toBeDefined();
      });


      it("content should be question mark at the beginnig", function() {
        game = new MemoryGame.Game(1);
        expect(game.getBoard()[0].getContent()).toEqual("?");
        expect(game.getBoard()[1].getContent()).toEqual("?");
      });

    });

  });

  describe("Playing Game", function(){
    it("should change board when picking a piece", function(){
      game = new MemoryGame.Game(1);
      game.play(game.getBoard()[0]);
      expect(game.getBoard()[0].getContent()).toEqual(1);
      expect(game.getBoard()[1].getContent()).toEqual("?");
      game.play(game.getBoard()[1]);
      expect(game.getBoard()[0].getContent()).toEqual(1);
      expect(game.getBoard()[1].getContent()).toEqual(1);
    });

    describe("playing two pieces that matches", function(){
      beforeEach(function(){
        game = new MemoryGame.Game(1);
        game.play(game.getBoard()[0]);
        game.play(game.getBoard()[1]);
        game.finishTurn();
      });

      it("should get point", function(){
        expect(game.getScore()).toEqual(1);
      });

      it("should have one less pair remaining", function(){
        expect(game.remainingPairs()).toEqual(0)
      });

      describe("when they are the last ones", function(){
        it("should be game over", function(){
          expect(game.over()).toBeTruthy()
        });
      });

    });

    describe("playing two pieces that doesn't match", function(){
      beforeEach(function(){
        game = new MemoryGame.Game(2);
        board = game.getBoard()
        if (!board[0].matches(board[1])){
          game.play(board[0]);
          game.play(board[1]);
        }
        else {
          game.play(board[0]);
          game.play(board[2]);
        }
        game.finishTurn();
      });

      it("should not get point", function(){
        expect(game.getScore()).toEqual(0);
      });

      it("should have same number of pairs remaining", function(){
        expect(game.remainingPairs()).toEqual(2)
      });

      it("should not be game over", function(){
        expect(game.over()).not.toBeTruthy()
      });

    });

  });

});
