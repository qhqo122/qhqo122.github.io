$(window).load(function() {
    //header Function
    $('header ul li').click(function(){
        $('header ul li').removeClass('on');
        $(this).addClass('on');
    })

    $('header ul li a').click(function(){
        el = $(this).data('target');
        eloff = $(el).offset().top;
        $('html,body').animate({scrollTop:eloff},300);
        $('header nav').removeClass('on');
        $('.trigger').removeClass('on');
    })

    $('.trigger').click(function(){
        $('body').toggleClass('hidden');
        $(this).toggleClass('on');
        $('header nav').toggleClass('on');
    })

    //scroll menu function
    $(window).scroll(function(){
        var curr = $(this).scrollTop();
        var home = $('.main_vis').offset().top - $(window).height()/2;
        var recomm = $('.recomm').offset().top - $(window).height()/2;
        var charts = $('.charts').offset().top - $(window).height()/2; 
        var music = $('.music').offset().top - $(window).height()/2;
        var news = $('.news').offset().top - $(window).height()/2;
        var blog = $('.blog').offset().top - $(window).height()/2;
        $('.gnb li').removeClass('on');
        if(blog < curr){
            $('.gnb li').eq(5).addClass('on')
        }else if(news < curr){
            $('.gnb li').eq(4).addClass('on')
        }else if(music < curr){
            $('.gnb li').eq(3).addClass('on')
        }else if(charts < curr){
            $('.gnb li').eq(2).addClass('on')
        }else if(recomm < curr){
            $('.gnb li').eq(1).addClass('on')
        }else if(home < curr) {
            $('.gnb li').eq(0).addClass('on')
        }
    })


    //Recom
    var swiper = new Swiper(".recom-slide", {
        slidesPerView: 'auto',
        breakpoints: {
            768: {
            slidesPerView: 'auto',
            },
            1024: {
            slidesPerView: 'auto',
            }
        }
    });

    //Music
    var swiper = new Swiper(".music-slide", {
        slidesPerView: 'auto',
        slidesBetween: 20,
    });

    //News
    var swiper = new Swiper(".news-slide", {
        slidesPerView: 'auto',
        slidesBetween: 20,
    });

    //Togglebox Function
    $('.check label').click(function(){
        $(this).toggleClass('on');
    })

    //이메일 정규식
    $("#emailletter").submit(function() {
        if($('#check').is(":checked") == false){
            alert('Please check first.')
            return false;
        }
        else if($('#txt').val() == ''){
            alert('Please enter your e-mail address.');
            $('#txt').focus();
            return false;
        }
    });

    // external js: isotope.pkgd.js
    //Blog
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });

  //theme change
    $('.theme-btn').click(function(){
        if($('body').hasClass('on')) {
            $('body').removeClass('on');
            $('.theme-btn span').text('White Theme');
        }
        else {
            $('body').addClass('on');
            $('.theme-btn span').text('Dark Theme');
        }
    
})
})