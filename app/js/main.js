$(function () {
  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });
  var mixer = mixitup(".trends__items");
  var secondMixer = mixitup(".new-products__items");
});
