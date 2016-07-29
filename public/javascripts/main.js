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
    game.playerPass( renderBoard )
  })

  $('button.draw-card').on( 'click', function() {
    game.drawPlayerCard( renderBoard )
  })
}

var showSuitDialog = function( chooseValueCallback ) {
  $('#suit-dialog').show()

  $('#suit-dialog button').on( 'click', function() {
    chooseValueCallback( $(this).val() )

    $('#suit-dialog button').off( 'click' )
    $('#suit-dialog').hide()
  })
}

var hookStartGameButton = function() {
  $('#start-game').on( 'click', function( event ) {
    game = new Game( showSuitDialog )
    game.start()

    renderBoard( game )
  })
}

$(document).ready( function() {
  hookStartGameButton()
})