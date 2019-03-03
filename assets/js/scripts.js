(function($) {
    "use strict";
    $(function(){

        var sticker, navToggle, userMobile, backToTopBtn;

        // Sticky filter menu
            sticker = $('.sticker');
            if(sticker.length){
                $('.sticker').sticky({
                    topSpacing: 0,
                    zIndex: 999
                });
            };
        
        // Navigation
            navToggle = $('.navbar-toggler');
            navToggle.on('click', function(){
                $('.navbar-collapse').slideToggle('fast');
                $('.user-menu').slideUp('fast');
            });

        // Mobile user menu
            userMobile = $('.user-mobile');
            userMobile.on('click', function(){
                $('.user-menu').slideToggle('fast');
                $('.navbar-collapse').slideUp('fast');
            });

        // Share animation
            var postShareBtn = $('.post-share-title');
            postShareBtn.on('click', function(){
                $('.social-icons-share a').toggleClass('share-clicked');
            });
        
        // Main slider
            var mainSlider = new Swiper('.main-slider', {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.main-slider-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.main-slider-next',
                    prevEl: '.main-slider-prev',
                }
            });

        // Back to top button
            backToTopBtn = $('.back-to-top');

            if (backToTopBtn.length) {
                var scrollTrigger = 400, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        backToTopBtn.addClass('show');
                    } else {
                        backToTopBtn.removeClass('show');
                    }
                };

                backToTop();

                $(window).on('scroll', function () {
                    backToTop();
                });

                backToTopBtn.on('click', function (e) {
                    e.preventDefault();
                    $('html,body').animate({
                        scrollTop: 0
                    }, 700);
                });
            }

        // Newslatter animation
            Splitting();
            $('.signup').submit(function(event){
                event.preventDefault();
                
                var emailText = $('.email').val();
                $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
                Splitting();
                $(".newslatter-wrap").addClass("plunge");
                setTimeout(function(){	
                    $('.email').val('');
                    $( ".field p" ).remove();
                    $(".newslatter-wrap").removeClass("plunge");
                }, 4000);
            });

    });
})(jQuery);