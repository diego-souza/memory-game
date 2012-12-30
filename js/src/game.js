function Game(numberOfPairs){
  numberOfPairs = typeof numberOfPairs !== 'undefined' ? numberOfPairs : 5;
  this.remainingPairs = numberOfPairs;
}

