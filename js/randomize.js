'use strict';

var cards = $(".teamMember");
for(var i = 0; i < cards.length - 1; i++) {
  var target = Math.floor(Math.random() * cards.length - 1) + 1;
  var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
  cards.eq(target).before(cards.eq(target2));
}

var carouselCards = $(".carouselRandom");
for(var i = 0; i < carouselCards.length - 1; i++) {
  var target = Math.floor(Math.random() * carouselCards.length - 1) + 1;
  var target2 = Math.floor(Math.random() * carouselCards.length - 1) + 1;
  carouselCards.eq(target).before(carouselCards.eq(target2));
}
