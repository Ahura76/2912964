var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "vertical",
  autoHeight: true,
  centeredSlidesBounds: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  autoplay: {
    delay: 5000, // задержка перед автоматической прокруткой слайдов
    disableOnInteraction: false, // продолжить автоматическую прокрутку после взаимодействия
  },
  speed: 900, // скорость переключения слайдов в миллисекундах

  on: {
    slideChangeTransitionEnd: function () {
      var currentSlide = this.slides[this.activeIndex];
      var animatedElement = $(currentSlide).find("h1, h4");

      // Удаляем все классы анимации
      animatedElement.removeClass("animate__shakeX"); // предположим, что мы используем анимацию fadeIn

      // Снова применяем классы анимации через небольшую задержку
      setTimeout(function () {
        animatedElement.addClass("animate__shakeX");
      }, 50); // задержка в 50 миллисекунд должна быть достаточной
    },
  },
});

// конец свипера

var timer;

$(".submenu").on("mouseenter", function () {
  clearTimeout(timer);
  $(this).find("ul").fadeIn();
});

$(".submenu").on("mouseleave", function () {
  var $submenu = $(this);
  timer = setTimeout(function () {
    $submenu.find("ul").fadeOut();
  }, 300); // задержка в миллисекундах
});

// // Инициализация контроллера ScrollMagic
// var controller = new ScrollMagic.Controller();

// // Создаем сцену
// new ScrollMagic.Scene({
//   triggerElement: ".selector-bottom", // элемент, который вызывает изменение, в вашем случае это второй селектор
//   triggerHook: 0, // точка, в которой срабатывает эффект (0 - верх страницы, 1 - низ страницы)
//   duration: "100%", // длительность эффекта, "100%" означает, что эффект будет действовать во время прокрутки всего элемента
// })
//   .setPin(".selector1-wrapper", { pushFollowers: false }) // элемент, которому применяется эффект "pin" (прикрепление к верху страницы), в вашем случае это первый селектор
//   .addTo(controller); // добавление сцены в контроллер
