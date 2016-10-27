'use strict';

var cards = $(".teamMember");
for(var i = 0; i < cards.length - 1; i++) {
  var target = Math.floor(Math.random() * cards.length - 1) + 1;
  var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
  cards.eq(target).before(cards.eq(target2));
}
