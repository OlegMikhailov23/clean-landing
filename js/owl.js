
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
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
            items:1,
						dots: false
        },
        700:{
            items:3,
            nav:false,
						autoplay: false,
        },
    }
});
});