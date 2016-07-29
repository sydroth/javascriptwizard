(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game_board'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"card card-hidden\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class=\"card "
    + alias2(alias1((depth0 != null ? depth0.cardClass : depth0), depth0))
    + " player-card\" data-number="
    + alias2(alias1((depth0 != null ? depth0.number : depth0), depth0))
    + " data-suit="
    + alias2(alias1((depth0 != null ? depth0.suit : depth0), depth0))
    + "></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <button class=\"player-pass\">Pass</button>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.playerCanDraw : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "      <button class=\"draw-card\">Draw Card</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression;

  return "<div class=\"opponent\">\n  <div class=\"player-info\">\n    <img src=\"/images/opponent.png\" alt=\"Opponent\" />\n    <h2>Opponent</h2>\n  </div>\n\n  <div class=\"hand\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.opponent : depth0)) != null ? stack1.hand : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n\n<div class=\"played-cards\">\n  <div class=\"unplayed-deck\">\n    <div class=\"card card-hidden\" onclick=\"drawCard()\"></div>\n  </div>\n\n  <div class=\"last-played-card\">\n    <div class=\"card "
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.lastPlayedCard : depth0)) != null ? stack1.cardClass : stack1), depth0))
    + "\"></div>\n  </div>\n</div>\n\n<div class=\"player\">\n  <div class=\"hand\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.hand : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"actions\">\n    "
    + alias2(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.playerCanGo : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"player-info\">\n    <img src=\"/images/opponent.png\" alt=\"Opponent\" />\n    <h2>Player</h2>\n  </div>\n</div>\n";
},"useData":true});
})();