$(function () {
  $(".related__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    infinite: true,
    draggable: false,
    variableWidth: true,
    speed: 300,
    prevArrow:
      '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path class="cls-1" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>',
  });

  $(".shop-content__filter-btn").on("click", function () {
    $(".shop-content__filter-btn").removeClass(
      "shop-content__filter-btn--active"
    );
    $(this).addClass("shop-content__filter-btn--active");
  });
  $(".button-list").on("click", function () {
    $(".product-item").addClass("product-item--list");
    $(".shop__content").addClass("shop__content--list");
    $(".shop__content-box").addClass("shop__content-box--list");
  });
  $(".button-grid").on("click", function () {
    $(".product-item").removeClass("product-item--list");
    $(".shop__content").removeClass("shop__content--list");
    $(".shop__content-box").removeClass("shop__content-box--list");
  });

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
    starSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>',
  });

  $(".big-star").rateYo({
    rating: 3.6,
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "5px",
    starSvg:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>',
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

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.711457896387095, lng: -73.99685419822131 },
    zoom: 13,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            hue: "#ff4400",
          },
          {
            saturation: -68,
          },
          {
            lightness: -4,
          },
          {
            gamma: 0.72,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [
          {
            hue: "#0077ff",
          },
          {
            gamma: 3.1,
          },
        ],
      },
      {
        featureType: "water",
        stylers: [
          {
            hue: "#00ccff",
          },
          {
            gamma: 0.44,
          },
          {
            saturation: -33,
          },
        ],
      },
      {
        featureType: "poi.park",
        stylers: [
          {
            hue: "#44ff00",
          },
          {
            saturation: -23,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            hue: "#007fff",
          },
          {
            gamma: 0.77,
          },
          {
            saturation: 65,
          },
          {
            lightness: 99,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            gamma: 0.11,
          },
          {
            weight: 5.6,
          },
          {
            saturation: 99,
          },
          {
            hue: "#0091ff",
          },
          {
            lightness: -86,
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            lightness: -48,
          },
          {
            hue: "#ff5e00",
          },
          {
            gamma: 1.2,
          },
          {
            saturation: -23,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
          {
            saturation: -64,
          },
          {
            hue: "#ff9100",
          },
          {
            lightness: 16,
          },
          {
            gamma: 0.47,
          },
          {
            weight: 2.7,
          },
        ],
      },
    ],
  });
}
