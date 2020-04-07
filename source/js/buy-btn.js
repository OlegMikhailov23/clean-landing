$(function() {
            $(window).scroll(function() {
                var scrollPosition = $(this).scrollTop();
                var windowScrollPos = 7000;
                var screenWidth = $(window).width();

               
                if (screenWidth > 780) {
                    windowScrollPos = 7000;
                } else if (screenWidth > 900) {
                    windowScrollPos = 7000;
                } else {
                    windowScrollPos = 9800;
                };


                if (scrollPosition < 500) {
                    $("#buyBtn").css("display", "none");
                } else if (scrollPosition > windowScrollPos) {
                    $("#buyBtn").slideUp();
                } else {
                    $("#buyBtn").slideDown();
                };
            });

                $(".buy-now-btn__wrapper").on("click", 'a', function(event) {
                    event.preventDefault();
                    var id = $(this).attr('href'),
                        top = $(id).offset().top;
                    $('body,html').animate({ scrollTop: top }, 1000);
                });
});

// $(function() {
//             $(window).scroll(function() {
//                 var scrollPosition = $(this).scrollTop();
//                 var windowScrollPos = 7000;
//                 var screenWidth = $(window).width();

               
//                 if (screenWidth > 780) {
//                     windowScrollPos = 6000;
//                 } else if (screenWidth > 900) {
//                     windowScrollPos = 3000;
//                 } else {
//                     windowScrollPos = 8500;
//                 };


//                 if (scrollPosition < 500) {
//                     $("#buyBtn").css("display", "none");
//                 } else if (scrollPosition > windowScrollPos) {
//                     $("#buyBtn").slideUp();
//                 } else {
//                     $("#buyBtn").slideDown();
//                 };
//             });

//                 $(".buy-now-btn__wrapper").on("click", 'a', function(event) {
//                     event.preventDefault();
//                     var id = $(this).attr('href'),
//                         top = $(id).offset().top;
//                     $('body,html').animate({ scrollTop: top }, 1000);
//                 });
// });