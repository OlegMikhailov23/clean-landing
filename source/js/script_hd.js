$(function () {
    $('#my-contact-form').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'name=' + $('#name').val() + '&email=' + $('#email').val() + '&text=' + $('#text').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'formdark.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".temno").css('display', 'block') && $(".messages").css('display', 'block') && $("#name").val("") && $("#email").val("");
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});


$(function () {
    $('#my-contact-formZv').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'nameZv=' + $('#nameZv').val() + '&emailZv=' + $('#emailZv').val() + '&text=' + $('#text').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'formdark2.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".FormZv input").css('display', 'none') && $(".messagesZv").css('display', 'block') && $(".FormZv p").css('display', 'none') && $(".FormZv br").css('display', 'none');
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

$(function () {
    $('#my-contact-formFT').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'nameFT=' + $('#nameFT').val() + '&emailFT=' + $('#emailFT').val() + '&text=' + $('#text').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'formdark3.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".FormFT input").css('display', 'none') && $(".messagesFT").css('display', 'block') && $(".FormFT p").css('display', 'none') && $(".FormFT br").css('display', 'none');
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

$(function () {
    $('#introYborkaForm').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'room-count-top=' + $('#room-count-top').val() + '&bath-count-top=' + $('#bath-count-top').val() + '&intro-form-tel=' + $('#intro-form-tel').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'form-intro.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".modal-background").css('display', 'block') && $(".success-message").css('display', 'block') && $("#room-counte").val("") && $("#bath-count").val("");
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

$(function () {
    $('#form-btm').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'room-count-top=' + $('#room-count-bottom').val() + '&bath-count-top=' + $('#bath-count-bottom').val() + '&intro-form-tel=' + $('#intro-form-tel-bottom').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'form-bottom.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".modal-background").css('display', 'block') && $(".success-message").css('display', 'block') && $("#room-counte").val("") && $("#bath-count").val("");
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

//Окна верх форма

$(function () {
    $('#introWindowForm').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'window-top=' + $('#window-top').val() + '&balcon-window-top=' + $('#balcon-window-top').val() + '&intro-form-tel=' + $('#intro-form-tel').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'form-intro-window.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".modal-background").css('display', 'block') && $(".success-message").css('display', 'block') && $("#room-counte").val("") && $("#bath-count").val("");
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

//Окна верх форма


//Окна низ форма

$(function () {
    $('#form-btm-window').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'window-bottom=' + $('#window-bottom').val() + '&balcon-window-bottom=' + $('#balcon-window-bottom').val() + '&intro-form-tel-bottom=' + $('#intro-form-tel-bottom').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'form-bottom-window.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".modal-background").css('display', 'block') && $(".success-message").css('display', 'block') && $("#room-counte").val("") && $("#bath-count").val("");
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

//Окна низ форма

$(function(){
    $('#modal-form').submit(function(e){
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata='name='+$('#name').val()+'&phone='+$('#phone').val()+'&message='+$('#message').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'modalformsend.php',
            data: formdata,
            type: 'post',
            success: function(respond){
                $(".modal-content").css('display', 'none') &&
                $(".modal-background").css('display', 'block') &&
                $(".success-message").css('display', 'block') && $("#name").val("") && $("#phone").val("") && $("#message").val("");
            },
            error: function(){
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

$(function(){
    $('#calcWash').submit(function(e){
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata='item-1='+$('#item-1').val()+'&item-2='+$('#item-2').val()+'&item-3='+$('#item-3').val()+'&item-4='+$('#item-4').val()+'&addSelect='+$('#addSelect').val()+'&calculatorTel='+$('#calculatorTel').val()+'&calcPrice='+$('#calcPrice').text();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'modalformcalc.php',
            data: formdata,
            type: 'post',
            success: function(respond){
                $(".temno").css('display', 'block') && $(".messages").css('display', 'block')
            },
            error: function(){
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});

$(function () {
    $('#calcCarpet').submit(function (e) {
        e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
        var formdata = 'material=' + ($(".calculator__choose-material-item input").filter(':checked').val()) + '&square=' + $('#totalSquare').text() + '&add1=' + $("#add1").filter(':checked').val() + '&add2=' + $("#add2").filter(':checked').val() + '&add3=' + $("#add3").filter(':checked').val() + '&add4=' + $("#add4").filter(':checked').val() + '&add5=' + $("#add5").filter(':checked').val() + '&price=' + $('#calcPrice').text() + '&tel=' + $('#calcTel').val();
        //запишем все данные формы в переменную data
        $.ajax({
            url: 'calcForm.php',
            data: formdata,
            type: 'post',
            success: function (respond) {
                $(".temno").css('display', 'block') && $(".messages").css('display', 'block')
            },
            error: function () {
                alert('Произошла ошибка. Повторите попытку позже.');
            }
        });
    });
});








