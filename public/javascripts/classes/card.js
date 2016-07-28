function Card( number, suit ) {
  this.number = number
  this.suit = suit
}

Card.prototype.className = function() {
  return 'card-' + this.number + '-' + this.suit
}

Card.SUITS = [ 'clubs', 'spades', 'hearts', 'diamonds' ]
Card.NUMBERS = [ 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king' ]


// array= ["card-two-hearts", "card-two-hearts"]