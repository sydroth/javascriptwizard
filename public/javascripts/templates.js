(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game_board'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <h2>"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression, alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"opponent\">\n  <div class=\"player-info\">\n    <img src=\"/images/opponent.png\" alt=\"Opponent\" />\n    <h2>Opponent</h2>\n  </div>\n\n  <div class=\"hand\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.opponent : depth0)) != null ? stack1.hand : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n\n<div class=\"played-cards\">\n  <div class=\"playable-values\">\n    "
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.lastPlayedCard : depth0)) != null ? stack1.number : stack1), depth0))
    + ",\n    "
    + alias3(((helper = (helper = helpers.chosenSuit || (depth0 != null ? depth0.chosenSuit : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"chosenSuit","hash":{},"data":data}) : helper)))
    + "\n  </div>\n\n  <div class=\"unplayed-deck\">\n    <div class=\"card card-hidden\" onclick=\"drawCard()\"></div>\n  </div>\n\n  <div class=\"last-played-card\">\n    <div class=\"card "
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.lastPlayedCard : depth0)) != null ? stack1.cardClass : stack1), depth0))
    + "\"></div>\n  </div>\n</div>\n\n<div class=\"player\">\n  <div class=\"hand\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.hand : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"actions\">\n    "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.playerCanGo : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"player-info\">\n    <img src=\"/images/opponent.png\" alt=\"Opponent\" />\n    <h2>Player</h2>\n  </div>\n</div>\n\n<div id=\"suit-dialog\">\n  <h3>Choose Suit</h3>\n\n  <button value=\"clubs\">clubs</button>\n  <button value=\"spades\">spades</button>\n  <button value=\"hearts\">hearts</button>\n  <button value=\"diamonds\">diamonds</button>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"card card-hidden\"></div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class=\"card "
    + alias2(alias1((depth0 != null ? depth0.cardClass : depth0), depth0))
    + " player-card\" data-number="
    + alias2(alias1((depth0 != null ? depth0.number : depth0), depth0))
    + " data-suit="
    + alias2(alias1((depth0 != null ? depth0.suit : depth0), depth0))
    + "></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <button class=\"player-pass game-button\">Pass</button>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.playerCanDraw : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "      <button class=\"draw-card game-button\">Draw Card</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.gameOver : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();