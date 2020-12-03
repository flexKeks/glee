$(function () {
  $(".star").rateYo({
    rating: 3.6,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "5px",
  });
  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.1,
    onStart: function (data) {
      console.log(data.from);
      $(".filter-price__from").text(data.from + ".00");
      $(".filter-price__to").text(data.to + ".00");
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from + ".00");
      $(".filter-price__to").text(data.to + ".00");
    },
  });

  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
  });
  var mixer = mixitup(".trends__items");
  var secondMixer = mixitup(".new-products__items");
});
