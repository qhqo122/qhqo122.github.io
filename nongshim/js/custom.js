$(function(){
    //header
    $('header ul li a').click(function(){
        el = $(this).data('target');
        eloff = $(el).offset().top;
        $('html,body').animate({scrollTop:eloff},300)
    })

    // Swiper 
    var swiper = new Swiper(".main_vis", {
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        
        pagination: {
        el: ".main_vis .swiper-pagination",
        type: "progressbar",
        },
        
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        speed: 500,
        autoplay: {
            delay: 3000
        }
    });

    //product_view
    countFlag = 0;
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        product_view = $('.news_view').offset().top - $(window).height()/2.1;
        count_section = $('.count_section').offset().top - $(window).height()/2.1;
        if(curr > product_view) {
            TweenMax.staggerTo($('.news_view .news-item'), 1, {opacity:1, y:0}, 0.15);
        }
        
        if(curr > count_section) {
            if(countFlag == 0) {
                new numberCounter("cnt01", 12153);
                new numberCounter("cnt02", 3235);
                new numberCounter("cnt03", 1620);
                new numberCounter("cnt04", 2153);
                countFlag = 1;
            }
        }
    })

    //mission_con 참고: https://nykim.work/30
    var controller = new ScrollMagic.Controller();

    var mission01 = TweenMax.to('.mission_section .mission_con li.mission01', 0.5, {
        y:-100
    });
    var mission02 = TweenMax.to('.mission_section .mission_con li.mission03', 0.5, {
        y:100
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".mission_con",
        duration: "100%"
    })
    .setTween(mission01)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: ".mission_con",
        duration: "100%"
    })
    .setTween(mission02)
    .addTo(controller) 

    //slider_slider
        var bg_slide = new Swiper(".bg_slide", {
            simulateTouch: false,
            speed: 600,
            parallax: true,
    });

    var slide_view = new Swiper(".slide_view", {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 20
    });
    
    slide_view.on('slideChange', function () {
        idx = slide_view.realIndex;
        bg_slide.slideTo(idx)
});
    
    //count    
    function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
    };
    numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
    if(this.diff > 0) {
    self.count += Math.ceil(this.diff / 5);
}
    // 정규식 EX)이메일형식 주민번호 형식 등..
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if(this.count < this.target_count) {
    this.timer = setTimeout(function() { self.counter(); }, 50);
    } else {
    clearTimeout(this.timer);
    }
};

    //global_section
    var swiper = new Swiper(".global_slide", {
        slidesPerView: 'auto'
    });

    // global_Scroll Animation
    AOS.init();

    // Arrow up button
    $(window).scroll(function(){
        home = $('.main_vis').offset().top;
    if(home < curr) {
        $('.arrow_up').addClass('on')
    } else {
        $('.arrow_up').removeClass('on')
    }
    })

    $('.arrow_up').click(function(){
        $('html').animate({scrollTop : 0})
    })
})