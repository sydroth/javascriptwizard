function Card( number, suit ) {
  this.number = number
  this.suit = suit
  this.cardClass = this.className()
}

Card.prototype.className = function() {
  return 'card-' + this.number + '-' + this.suit
}

Card.SUITS = [ 'clubs', 'spades', 'hearts', 'diamonds' ]
Card.NUMBERS = [ 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king' ]
