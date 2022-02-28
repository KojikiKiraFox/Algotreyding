$(document).ready(function () {
     const swiper = new Swiper('.swiper-benefits', {
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      const secondSwiper = new Swiper(".lessons-swiper", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },},
          navigation: {
            nextEl: '.lessons-swiper-button-next',
            prevEl: '.lessons-swiper-button-prev',
          },
      });
      
    new WOW().init();

    // Валидация формы

    $('.Class-name').validate({
        errorClass: "invalid",
        rules: {
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2,
            },
            userPhone: "required",
            // compound rule
            userEmail: {
              required: true,
              email: true
            }
          },
        messages: {
        userName:{
            required: "Имя обязательно",
            minlength: "Имя не короче двух букв"
        },
        userPhone: "Телефон обязателен",
        userEmail: {
            required: "Обязательно укажите email",
            email: "Введите в формате: name@domain.com"
        }
        },
    });
    // Маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});
});