$(function(){
    //header
    $('header .left-area .gnb li a, .mobile_menu a').click(function(){
        el = $(this).data('target');
        eloff = $(el).offset().top;
        $('html,body').animate({scrollTop:eloff},300)
    })

    //product
    $(window).scroll(function(){
        curr = $(this).scrollTop();

        scrollAni01('.prd01', 200);
        scrollAni01('.prd02', 200);
        scrollAni01('.prd03', 200);
        scrollAni01('.prd04', 100);
        scrollAni01('.prd05', 400);
        scrollAni01('.prd06', 300);

        //author
        scrollAni01('.author-content .image-wrap', 300);
        scrollAni01('.txt_ani01', 300);
        scrollAni01('.txt_ani02', 300);
        scrollAni01('.txt_ani03', 300);
        scrollAni01('.txt_ani04', 300);
    })

    function scrollAni01(el, num) {
        target = $(el).offset().top - num;
        if(curr > target ) {
            $(el).addClass('on')
        }
    }

    //top-seller
    var swiper = new Swiper(".seller-slide", {
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        breakpoints: {
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
        },
    });

    //Magazine
    var swiper = new Swiper(".magazine-slide", {
        pagination: {
            el: ".magazine .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".magazine .next",
            prevEl: ".magazine .prev",
        },
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,

        breakpoints: {
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
        },
    });

    //Overlay slide
    var swiper = new Swiper(".overlay-slide", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 1.7,
            spaceBetween: 40,
            centeredSlides: true
            },
        }

    });

    $('.overlay').mousemove(function(e) {
        $('.drag-box').addClass('on')
        TweenMax.to($('.drag-box'), 0.5, {
            x: e.clientX+20,
            y: e.clientY+20,
            ease: Power3.easeOut
        });
    });

    $('.overlay').mouseout(function(e){
        $('.drag-box').removeClass('on')
    })

    //photo-view
    var controller = new ScrollMagic.Controller();

    var txt01 = TweenMax.to('.items01', 0.5, {
        x: '-100%'
    });

    var txt02 = TweenMax.to('.items02', 0.5, {
        x: '50%'
    });

    var scene = new ScrollMagic.Scene({
    triggerElement: ".photo-view",
    duration: "100%",
    offset:$(window).height()/ 4
    })
  // .setPin(".photo-view")
    .setTween(txt01)
    .addTo(controller)
  // .addIndicators({
  //   name: "1"
  // })
  //
    var scene = new ScrollMagic.Scene({
    triggerElement: ".photo-view",
    duration: "100%",
    offset:$(window).height()/ 3
    })
  // .setPin(".photo-view")
    .setTween(txt02)
    .addTo(controller)
  // .addIndicators({
  //   name: "2"
  // })


    //mobile_menu
    $('.menu').click(function(){
        $('body').addClass('hidden');
        $('.mobile_menu').addClass('on');
    })

    $('.mobile_menu a').click(function(){
        $('.mobile_menu').removeClass('on')
    })

    $('.close-btn').click(function(){
        $('body').removeClass('hidden');
        $('.mobile_menu').removeClass('on');
    })

    //Arrow up button
    $(window).scroll(function(){
        home = $('.collection').offset().top - $(window).height()/2 ;
        if(home < curr) {
            $('.arrow-up').addClass('on')
        } else {
            $('.arrow-up').removeClass('on')
        }
    })

    $('.arrow-up').click(function(){
        $('html').animate({scrollTop : 0})
    })

})
