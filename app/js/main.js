$(function () {
  $(".product-tabs__top-item").on("click", function (e) {
    e.preventDefault();
    $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");
    $(this).addClass("product-tabs__top-item--active");

    $(".product-tabs__content-item").removeClass(
      "product-tabs__content-item--active"
    );
    $($(this).attr("href")).addClass("product-tabs__content-item--active");
  });

  $(".product-details__form-input").styler();

  $(".product-slide__thumb").slick({
    asNavFor: ".product-slide__big",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $(".product-slide__big").slick({
    asNavFor: ".product-slide__thumb",
    draggable: false,
    arrows: false,
    fade: true,
  });

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "5px",
  });

  $(".star--big").rateYo({
    rating: 3.6,
    starWidth: "18px",
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
