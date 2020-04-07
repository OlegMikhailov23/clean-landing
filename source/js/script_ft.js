$('.recall').mouseup(function () {
    $(".modal-content").css('display', 'block') && $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block') && $('.name').focus();
});

$('.link-to-modal').mouseup(function () {
    $(".modal-content").css('display', 'block') && $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block') && $('.name').focus();
});

$('.modal-content-close').mouseup(function () {
    $(".modal-content").css('display', 'none') && $(".success-message").css('display', 'none') && $(".modal-background").css('display', 'none');
});

$('.success-content-close').mouseup(function () {
    $(".modal-content").css('display', 'none') && $(".success-message").css('display', 'none') && $(".modal-background").css('display', 'none');
});

$('.zakaz_zvonok').mouseup(function () {
    $(".temnoZv").css('display', 'block') && $(".FormZv").css('display', 'block') && $('#nameZv').focus();
});

$('.modal-background').mouseup(function () {
    $(".modal-background").css('display', 'none') && $(".success-message").css('display', 'none') && $(".modal-content").css('display', 'none');
});

$('.temno').mouseup(function () {
    $(".temno").css('display', 'none') && $(".messages").css('display', 'none');
});

$('.messages button').mouseup(function () {
    $(".temno").css('display', 'none') && $(".messages").css('display', 'none');
});

$('.FormZv button').mouseup(function () {
    $(".temnoZv").css('display', 'none') && $(".FormZv").css('display', 'none');
});
$('.temnoZv').mouseup(function () {
    $(".temnoZv").css('display', 'none') && $(".FormZv").css('display', 'none');
});

$('.footer_right span').mouseup(function () {
    $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block') && $('#nameFT').focus();
});

$('.zakaz_xim span').mouseup(function () {
    $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block') && $('#nameFT').focus();
});
$('.temnoFT').mouseup(function () {
    $(".temnoFT").css('display', 'none') && $(".FormFT").css('display', 'none');
});
$('.FormFT button').mouseup(function () {
    $(".FormFT").css('display', 'none') && $(".temnoFT").css('display', 'none');
});


$('.usluga_opis span').mouseup(function () {
    $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block') && $('#nameFT').focus();
});
$('.voprosi span').mouseup(function () {
    $(".temnoFT").css('display', 'block') && $(".FormFT").css('display', 'block');
});



//Всплывающее модальное окно по таймеру Химчитска

$(window).on('load', function () {
    var modalEmergence = function () {
    $(".temnoZv").css('display', 'block') && $(".FormZv").css('display', 'block') && $('#modal-header').text("Получите консультацию бесплатно") && $('#nameZv').focus();
};

setTimeout(modalEmergence, 45000);
});

//Всплывающее модальное окно по таймеру Химчитска

//Всплывающее модальное окно по таймеру Уборка

$(window).on('load', function () {
    var modalEmergenceClean = function () {
    $(".modal-content").css('display', 'block') && $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block') && $('#modalHeader').text("Закажите уборку с скидкой 10%!") && $('.name').focus();
};

setTimeout(modalEmergenceClean, 45000);
});

$(".modal-content-close").click(function(event) {
        $('#modalHeader').text("Мы обязательно Вам ответим!");
});

//Всплывающее модальное окно по таймеру Уборка

//Выплывающий виджер WhatsUp

$(window).on('load', function () {
    var whatsUpWidget = function () {
    $(".whatsup-widget").css('display', 'block');
};

setTimeout(whatsUpWidget, 10000);
});
//Выплывающий виджер WhatsUp


$(document).ready(function () {
    $(".main-nav__item").on("click", ".main-nav__item-ussual-link", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".page-header__logo").on("click", ".page-header__logo-link", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".sub-nav__list-item").on("click", ".sub-nav__list-link", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".page-footer__menu").on("click", 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".price").on("click", 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".select-price__btn-container").on("click", '.link-to-scroll', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});