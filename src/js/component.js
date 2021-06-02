$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  if ($(window).scrollTop() > 0) {
    $('.nav').addClass('fixed');
  }

  $('#nav-icon').click(function () {
    $('.hamburger').toggleClass('is-active')
    $('.nav').toggleClass('menu-open')

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(100);
    $('header, main,footer').toggleClass('blur');
    $('body').toggleClass('overflow-hidden')

  });



  $(window).resize(function () {
    console.log($(this).width());
    if ($(this).width() > 1023) {
      $('#menu').css({
        'display': 'flex'
      })
      $('.nav').removeClass('open');
      $('body *').removeClass('blur');

      $('#nav-icon').css({
        'display': 'none !important'
      })

      $('.home').removeClass('overflow-hidden')
    } else {
      if (!$('#nav-icon').hasClass('open')) {
        $('#menu').css({
          'display': 'none'
        })
        $('#nav-icon').css({
          'display': 'block !important'
        })
      } else {
        $('#menu').css({
          'display': 'block'
        })
        $('.home').addClass('overflow-hidden');
        $('header, main,footer').addClass('blur');
      }
    }
  })



  $('.header__item').click(function (e) {
    const parent = $(e.currentTarget).parent();

    if (parent.hasClass('expand__item')) {
      e.preventDefault();

      if (parent.hasClass('active')) {
        parent.removeClass('active');
        parent.mouseleave();
      } else {
        $('.expand__item').removeClass('active');
        parent.addClass('active');
      }

      return;
    }

    if ($(window).width() <= 1023) toggleMenu()
  })


  function toggleMenu() {
    $('.hamburger').toggleClass('is-active')
    $('.nav').toggleClass('menu-open')

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(100);
    $('header, main,footer').toggleClass('blur');
    $('body').toggleClass('overflow-hidden');
  }
});


$(document).ready(function () {
  $('.footer-btn--more').click(function (e) {
    e.preventDefault();

    $(this).hide();
    $('.more-tools').slideDown(0).addClass('active');

    if ($(window).width() > 1030) {
      $('.footer_new-politic ul li:last-child').css('margin-top', $('.more-tools').height() + 124);
    }

  })

  $(window).resize(function () {
    if ($(window).width() > 1030 && $('.more-tools').hasClass('active')) {
      $('.footer_new-politic ul li:last-child').css('margin-top', $('.more-tools').height() + 124);
    } else {
      $('.footer_new-politic ul li:last-child').removeAttr('style');
    }
  })

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });
})

$(document).ready(function () {
  //ACCORDION
  $('.accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('.accordion__item-text')

    $(this).closest('.accordion').find('.accordion__item-text').not(dropDown).slideUp()

    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    } else {
      $(this).closest('.accordion').find('a.active').removeClass('active')
      $(this).addClass('active')
    }

    dropDown.stop(false, true).slideToggle(200)

    j.preventDefault()
  });

  
      $('.testimonials__slider').slick({
        slidesToShow: 3, //3
        slidesToScroll: 3, //2
        infinite: false,
        variableWidth: false,
        swipe: false,
        adaptiveHeight: true,
        appendArrows: '.reviews__arrows',
        prevArrow: '<div class="arrow arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none"><path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z"fill="#505876"/></svg></div>',
        nextArrow: '<div class="arrow arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none"><path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z"fill="#505876"/></svg></div>',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  adaptiveHeight: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    variableWidth: false,
                    dotsClass: 'dots dots_grey',
                    adaptiveHeight: true,
                    swipe: true,
                    arrows: false
                }
            }
        ]
    })
  
})