$(function(){
          $('#my-contact-form').submit(function(e){
                e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
                var formdata='name='+$('#name').val()+'&email='+$('#email').val()+'&text='+$('#text').val();
                //запишем все данные формы в переменную data
                $.ajax({
                  url: 'formdark.php',
                  data: formdata,
                  type: 'post',
                  success: function(respond){
                    $(".temno").css('display', 'block') && $(".messages").css('display', 'block') && $("#name").val("") && $("#email").val("");
                  },
                  error: function(){
                    alert('Произошла ошибка. Повторите попытку позже.');
                  }
                });
              });
            });
            
            
            
        $(function(){
          $('#my-contact-formZv').submit(function(e){
                e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
                var formdata='nameZv='+$('#nameZv').val()+'&emailZv='+$('#emailZv').val()+'&text='+$('#text').val();
                //запишем все данные формы в переменную data
                $.ajax({
                  url: 'formdark2.php',
                  data: formdata,
                  type: 'post',
                  success: function(respond){
                    $(".FormZv input").css('display', 'none') && $(".messagesZv").css('display', 'block') && $(".FormZv p").css('display', 'none') && $(".FormZv br").css('display', 'none'); 
                  },
                  error: function(){
                    alert('Произошла ошибка. Повторите попытку позже.');
                  }
                });
              });
            });
            
            $(function(){
          $('#my-contact-formFT').submit(function(e){
                e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
                var formdata='nameFT='+$('#nameFT').val()+'&emailFT='+$('#emailFT').val()+'&text='+$('#text').val();
                //запишем все данные формы в переменную data
                $.ajax({
                  url: 'formdark3.php',
                  data: formdata,
                  type: 'post',
                  success: function(respond){
                    $(".FormFT input").css('display', 'none') && $(".messagesFT").css('display', 'block') && $(".FormFT p").css('display', 'none') && $(".FormFT br").css('display', 'none'); 
                  },
                  error: function(){
                    alert('Произошла ошибка. Повторите попытку позже.');
                  }
                });
              });
            });