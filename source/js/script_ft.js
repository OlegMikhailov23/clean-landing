    $('.zakaz_zvonok').mouseup(function() {
        $(".temnoZv").css('display', 'block') && $(".FormZv").css('display', 'block');
     });
    $('.temno').mouseup(function() {
        $(".temno").css('display', 'none') && $(".messages").css('display', 'none');
     });
     
     $('.messages a').mouseup(function() {
        $(".temno").css('display', 'none') && $(".messages").css('display', 'none');
     });
     
     $('.FormZv a').mouseup(function() {
        $(".temnoZv").css('display', 'none') && $(".FormZv").css('display', 'none');
     });
     $('.temnoZv').mouseup(function() {
        $(".temnoZv").css('display', 'none') && $(".FormZv").css('display', 'none');
     });
     
     $('.footer_right span').mouseup(function() {
        $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block');
     });
     
     $('.zakaz_xim span').mouseup(function() {
        $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block');
     });
     $('.temnoFT').mouseup(function() {
        $(".temnoFT").css('display', 'none') && $(".FormFT").css('display', 'none');
     });
     $('.FormFT a').mouseup(function() {
         $(".FormFT").css('display', 'none') && $(".temnoFT").css('display', 'none');
     });
     
     
     
     $('.usluga_opis span').mouseup(function() {
        $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block');
     });
     $('.voprosi span').mouseup(function() {
        $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block');
     });
     
      $(document).ready(function(){
    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $(".page-header__logo").on("click",".page-header__logo-link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});