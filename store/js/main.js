var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      "@1.00": {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      "@1.50": {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  var swiper = new Swiper(".ptop", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    autoplay:{
      delay:5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });