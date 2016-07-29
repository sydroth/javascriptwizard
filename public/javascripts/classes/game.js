function Game( chooseSuitCallback ) {
  this.deck = new Deck()
  this.player = new Player()
  this.opponent = new Player()

  this.currentPlayer = null
  this.lastPlayedCard = null
  this.playedCards = []

  this.playerCanGo = false
  this.playerCanDraw = false
  this.playerDrawCount = 0
  this.message = ''

  this.chooseSuitCallback = chooseSuitCallback
  this.chosenSuit = null
  this.gameOver = false
}

Game.prototype.start = function() {
  this.dealInitialHand()
  this.chooseStartingPlayer()
}

Game.prototype.sortPlayerHand = function() {
  console.log('HAND', this.player.hand)
  this.player.hand.sort( function( a, b ) {
    if (a.sortOrder > b.sortOrder) {
      return 1;
    }
    if (a.sortOrder < b.sortOrder) {
      return -1;
    }
    return 0;
  })
}


Game.prototype.dealInitialHand = function() {
  for( var i = 0; i < 7; i++ ) {
    this.player.draw( this.drawCardFromDeck() )
    this.opponent.draw( this.drawCardFromDeck() )
  }

  this.lastPlayedCard = this.drawCardFromDeck()
  this.chosenSuit = this.lastPlayedCard.suit
  this.sortPlayerHand()
}

Game.prototype.chooseStartingPlayer = function() {
  var choice = Math.floor( Math.random() * 2 )

  this.currentPlayer = choice === 0 ? 
    this.player : this.opponent;

  this.playerCanGo = this.currentPlayer === this.player
  this.playerCanDraw = this.playerCanDrawCard()

  if( this.currentPlayer === this.opponent ) {
    this.doOpponentMove()
    this.message = 'Opponent played first'
  }
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
    this.player.hasSuit( this.chosenSuit )
    

  return this.playerDrawCount < 2 && !canNotDraw 
}

Game.prototype.doOpponentMove = function() {
  this.playerDrawCount = 0

  var cardsDrawn = 0
  var cardPlayed = false

  var lastPlayed = this.lastPlayedCard
  var lastChosenSuit = this.chosenSuit

  while( !cardPlayed && cardsDrawn < 3 ) {
    // Find a card that the opponent can play and play it
    var card = this.opponent.hand.find( function( opponentCard ) {
      return this.cardIsValid( opponentCard )
    }, this )

    // Otherwise draw a card
    if( card ) {
      cardPlayed = true
      this.lastPlayedCard = card
      this.chosenSuit = this.lastPlayedCard.suit
      this.playedCards.push( card )

      this.opponent.playCard( card )

      if( this.opponent.handEmpty() ) {
        this.gameOver = true
        this.message = "YOU LOSE"
      }
    } else {
      cardsDrawn++
      this.opponent.draw( this.drawCardFromDeck() )
    }
  }

  this.currentPlayer = this.player
  this.playerCanDraw = this.playerCanDrawCard()
  this.playerCanGo = true
  this.sortPlayerHand()

  if( cardsDrawn === 3 ) {
    this.message = 'Your opponent passed'
  }
}

Game.prototype.playerPass = function( reRenderCallback ) {
  this.currentPlayer = this.opponent
  this.playerCanDraw = false
  this.playerCanGo = false

  reRenderCallback( this )

  this.doOpponentMove()

  reRenderCallback( this )
}

Game.prototype.drawPlayerCard = function ( reRenderCallback ) {
  this.player.draw( this.drawCardFromDeck() )
  this.playerCanDraw = this.playerCanDrawCard()
  this.playerDrawCount++

  reRenderCallback( this )
}

Game.prototype.playValidCard = function( card, suit, reRenderCallback ) {
  // Remove card from player's hand
  this.player.playCard( card )

  if( this.player.handEmpty() ) {
    this.message = 'YOU WON'
    this.gameOver = true
    reRenderCallback( this )
  } else {
    // Switch turns
    this.currentPlayer = this.opponent
    this.playerCanDraw = false
    this.playerCanGo = false

    // Make it last played card
    this.lastPlayedCard = card
    this.playedCards.push( card )
    this.chosenSuit = suit

    reRenderCallback( this )

    this.doOpponentMove()
    reRenderCallback( this )
  }
}

Game.prototype.drawCardFromDeck = function() {
  if( this.deck.empty() ) {
    this.deck.refreshDeck( this.playedCards )
    this.playedCards = []
  }

  return this.deck.takeCard()
  this.sortPlayerHand()
}

Game.prototype.cardIsValid = function( card ) {
  return card.suit === this.chosenSuit ||
    card.number === this.lastPlayedCard.number ||
    card.number === 'eight'
}

Game.prototype.playCard = function( card, reRenderCallback ) {
  var that = this
  this.message = ''

  if( card.number === 'eight' ) {
    this.chooseSuitCallback( function( suit ) {
      that.playValidCard( card, suit, reRenderCallback)
    })
  } else if( this.cardIsValid( card ) ) {
    this.playValidCard( card, card.suit, reRenderCallback)
  } else {
    this.message = "That card is invalid."
    reRenderCallback( this )
  }
}