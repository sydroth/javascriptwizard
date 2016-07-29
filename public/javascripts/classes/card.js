function Card( number, suit ) {
  this.number = number
  this.suit = suit
  this.sortOrder = (Card.NUMBERS.indexOf(number) + 1);
  this.sortOrder = suit+' '+(this.sortOrder < 10 ? '0'+this.sortOrder : this.sortOrder)

  this.cardClass = this.className()
}

Card.prototype.className = function() {
  return 'card-' + this.number + '-' + this.suit
}

Card.SUITS = [ 'clubs', 'spades', 'hearts', 'diamonds' ]
Card.NUMBERS = [ 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king' ]
