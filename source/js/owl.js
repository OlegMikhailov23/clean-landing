
$(document).ready(function(){
$('.cleaner-slide').owlCarousel({
    loop:true,
    dots:true,
    items:1,
    autoplay: true,
    nav: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 10000,
    mouseDrag: true,
    touchDrag: true,
    margin: 0,
		responsive:{
        0:{
            items:1.6,
			dots: false
        },
        700:{
            items: 3,
            nav:false,
            autoplay: false,
            touchDrag: false,
            mouseDrag: false,
        },
    }
});

    $('.advantage-slide').owlCarousel({
        loop:true,
        dots:true,
        items: 2,
        autoplay: true,
        nav: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 10000,
        mouseDrag: true,
        touchDrag: true,
        margin: 0,
        responsive:{
            0:{
                items:1.4,
                dots: false
            },
            700:{
                items:3,
                nav:false,
                autoplay: false,
                touchDrag: false,
                mouseDrag: false,
            },
        }
    });

    $('.cleaning-workers-slide').owlCarousel({
        loop:true,
        dots:true,
        items:1,
        autoplay: true,
        nav: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 9000,
        mouseDrag: true,
        touchDrag: true,
        margin: 0,
        responsive:{
            0:{
                items:1.6,
                dots: false,
            },
            580:{
                items:3,
                nav:false,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
            },
            980:{
                items:4,
                dots: false,
            },
        }
    });

    $('.feedbacks__slide').owlCarousel({
        loop:true,
        dots:true,
        items:1,
        autoplay: true,
        nav: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 10000,
        mouseDrag: true,
        touchDrag: true,
        margin: 0,
        responsive:{
            0:{
                items:1.3,
                dots: false,
            },
            580:{
                items:3,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
            },
            980:{
                items:3,
                dots: false,
            },
        }
    });
});