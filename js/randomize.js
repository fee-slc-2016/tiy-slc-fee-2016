'use strict';

var navCards = $(".navMember");
for(var i = 0; i < navCards.length - 1; i++) {
  var target = Math.floor(Math.random() * navCards.length - 1) + 1;
  var target2 = Math.floor(Math.random() * navCards.length - 1) + 1;
  navCards.eq(target).before(navCards.eq(target2));
}

var carouselCards = $(".carouselRandom");
for(var i = 0; i < carouselCards.length - 1; i++) {
  var target = Math.floor(Math.random() * carouselCards.length - 1) + 1;
  var target2 = Math.floor(Math.random() * carouselCards.length - 1) + 1;
  carouselCards.eq(target).before(carouselCards.eq(target2));
}

var cards = $(".teamMember");
for(var i = 0; i < cards.length - 1; i++) {
  var target = Math.floor(Math.random() * cards.length - 1) + 1;
  var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
  cards.eq(target).before(cards.eq(target2));
}

// DrewMattOnHover

$('#drewMattHover').hover(function() {
  $(this).attr('src', './images/drewMatt3.jpg')
}, function() {
  $(this).attr('src', './images/drewMatt2.jpg')
})

// twitter javascript
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
