function Deck() {
  this.cards = []

  for( var i = 0; i < Card.SUITS.length; i++ ) {
    for( var j = 0; j < Card.NUMBERS.length; j++ ) {
      this.cards.push( new Card( Card.NUMBERS[ j ], Card.SUITS[ i ] ))
    }
  }
}

Deck.prototype.shuffle = function() {
  for( var i = 0; i < this.cards.length; i++ ) {
    var random = Math.floor( Math.random() * this.cards.length )

    var temp = this.cards[ i ]
    this.cards[ i ] = this.cards[ random ]
    this.cards[ random ] = temp
  }
}