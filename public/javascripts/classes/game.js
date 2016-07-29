function Game() {
  this.deck = new Deck()
  this.player = new Player()
  this.opponent = new Player()

  this.currentPlayer = null
  this.lastPlayedCard = null

  this.playerCanGo = false
  // TODO: set when I draw a card, or when anyone's turn starts
  this.playerCanDraw = false
  this.message = ''
}

Game.prototype.start = function() {
  this.dealInitialHand()
  this.chooseStartingPlayer()
}

Game.prototype.dealInitialHand = function() {
  for( var i = 0; i < 7; i++ ) {
    this.player.draw( this.deck.takeCard() )
    this.opponent.draw( this.deck.takeCard() )
  }

  this.lastPlayedCard = this.deck.takeCard()
}

Game.prototype.chooseStartingPlayer = function() {
  this.currentPlayer = this.player
  this.playerCanGo = true
  this.playerCanDraw = this.playerCanDrawCard()
  // var choice = Math.floor( Math.random() * 2 )

  // this.currentPlayer = choice === 0 ? 
  //   this.player : this.opponent;

  // this.playerCanGo = this.currentPlayer === this.player
  // this.playerCanDraw = this.playerCanDrawCard()
}

Game.prototype.findUserCard = function( info ) {
  return this.player.hand.find( function( card ) {
    return card.number === info.number && 
      card.suit === info.suit
  }) || {}
}

Game.prototype.playerCanDrawCard = function() {
  var canNotDraw = this.player.hasEight() || 
    this.player.hasNumber( this.lastPlayedCard.number ) ||
    this.player.hasSuit( this.lastPlayedCard.suit )

  return ! canNotDraw
}

Game.prototype.doOpponentMove = function() {
  // Do Opponent's move

  this.currentPlayer = this.player
  this.playerCanDraw = this.playerCanDrawCard()
  this.playerCanGo = true
}

Game.prototype.playerPass = function( reRenderCallback ) {
  this.currentPlayer = this.opponent
  this.playerCanDraw = false
  this.playerCanGo = false

  reRenderCallback( this )
}

Game.prototype.drawPlayerCard = function ( reRenderCallback ) {
  this.player.draw( this.deck.takeCard() )
  this.playerCanDraw = this.playerCanDrawCard()

  reRenderCallback( this )
}

Game.prototype.playCard = function( card, reRenderCallback ) {
  this.message = ''

  var validCard = card.suit === this.lastPlayedCard.suit ||
    card.number === this.lastPlayedCard.number

  if( card.number === 'eight' ) {
    console.log( 'played an eight' )
  } else if( validCard ) {
    // Remove card from player's hand
    this.player.playCard( card )
    // Switch turns
    this.currentPlayer = this.opponent
    this.playerCanDraw = false
    this.playerCanGo = false
    // Make it last played card
    this.lastPlayedCard = card
    reRenderCallback( this )

    this.doOpponentMove()
    reRenderCallback( this )
  } else {
    this.message = "That card is invalid."
    reRenderCallback( this )
  }
}