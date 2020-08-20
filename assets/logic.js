// Animating welcome page
$(".explore").delay(100).animate({"opacity": "1"}, 70);

function rendertwinkle() {
for (var i = 0; i < 100; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $(".stars").append(star);
  }
}
rendertwinkle();

