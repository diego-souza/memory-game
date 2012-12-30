describe("Game", function() {

  describe("New Game", function(){
    it("should be able to start a game", function() {
        expect(new Game()).toBeDefined;
      });

    it("should have 5 pairs by default", function() {
        expect(new Game().remainingPairs).toEqual(5);
      });

    it("should be able to start game with number of pairs", function() {
        expect(new Game(6).remainingPairs).toEqual(6);
      });
  })

});
