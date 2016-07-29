var game;

var renderBoard = function( currentGame ) {
  var html = Handlebars.templates[ 'game_board' ]( currentGame )
  $('.tablebox').html( html )

  hookCards()
  hookButtons()
}

var hookCards = function() {
  $('.player-card').off( 'click' )

  if( game.playerCanGo ) {
    $('.player-card').on( 'click', function() {
      var data = $(this).data()

      game.playCard( game.findUserCard( data ), function( result ) {
        renderBoard( result )
      })
    })
  }
}

var hookButtons = function() {
  $('.actions button').off( 'click' )

  $('button.player-pass').on( 'click', function() {
    console.log( 'PLAYER PASS')
    game.playerPass( renderBoard )
  })

  $('button.draw-card').on( 'click', function() {
    console.log( "DRAW CARD")
    game.drawPlayerCard( renderBoard )
  })
}

var hookStartGameButton = function() {
  $('#start-game').on( 'click', function( event ) {
    game = new Game()
    game.start()

    renderBoard( game )
  })
}

$(document).ready( function() {
  hookStartGameButton()
})