$(document).ready(() => {
  $(".menuOpen").click(() => {
    $(".menu").addClass("active");
  });
  $(".menuClose").click(() => {
    $(".menu").removeClass("active");
  });
});

//slide
var slides = $(".sliderImage");
slides.hide();

var min = 0;
var max = slides.length - 1;
var current = min;
slides.eq(current).show();
$("#slide-right").click(function () {
  slides.eq(current).hide();
  current++;
  if (current > max) {
    current = min;
  }
  slides.eq(current).show();
});

$("#slide-left").click(function () {
  slides.eq(current).hide();
  current--;
  if (current < min) {
    current = max;
  }
  slides.eq(current).show();
});
