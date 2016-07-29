function Player() {
  this.hand = []
}

Player.prototype.draw = function( card ) {
  this.hand.push( card )
}

Player.prototype.hasEight = function() {
  return this.hand.find( function( card ) {
    return card.number === 'eight'
  })
}

Player.prototype.hasNumber = function( number ) {
  return this.hand.find( function( card ) {
    return card.number === number
  })
}

Player.prototype.hasSuit = function( suit ) {
  return this.hand.find( function( card ) {
    return card.suit === suit
  })
}

Player.prototype.playCard = function( card ) {
  var index = this.hand.indexOf( card )

  this.hand = this.hand.slice( 0, index )
    .concat( this.hand.slice( index + 1 ))
}