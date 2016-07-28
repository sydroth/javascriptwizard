function overlay() {
  console.log( 'clicked')
  el = document.getElementById("overlay");
  el.style.display = el.style.display === 'block' ? 'none' : 'block'
}

var playerHand = new Array(7);
var opponentHand = new Array(7);
var deck = new Array(52);

function fname() {
  return this.num + this.suit + ".gif";
}


function Card(num,suit) {
   this.num = num;
   this.suit = suit;
   this.fname = fname;
}

function drawCard() {
  shuffle();
  setImage(cardImage,o)
}
//removes card from unplayed-deck, displays it in hand instead

function Pass () {

}
  //switches Turn to opponent 


function playCard () {

}
//moves clicked card from hand and into played-cards, becomes the last-played-card



// function Deal() {
// var Card1Image=document.getElementById("card1")
// var Card2Image=document.getElementById("card2")
// var Card3Image=document.getElementById("card3")
// var Card4Image=document.getElementById("card4")
// var Card5Image=document.getElementById("card5")
// var Card6Image=document.getElementById("card6")
// var Card7Image=document.getElementById("card7")
// assignCards();
// }

// function assignCards() {
// for(var i = 0;i<53;++i)
// Cards[i]="Card"+(i+1)+"this.suit";

// for(var i = 0;i<26;++i)
// Cards[i]="Card"+(i-12)+"this.suit";

// for(var i = 0;i<39;++i)
// Cards[i]="Card"+(i-23)+"this.suit";

// for(var i = 0;i<52;++i)
// Cards[i]="Card"+(i-34)+"this.suit";

// for(var i = 0;i<39;++i)
// Cards[i]="Card"+(i-23)+"this.suit";

// for(var i = ;i<52;++i)
// Cards[i]="Card"+(i-34)+"this.suit";
// }

