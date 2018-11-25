<?
if((isset($_POST['nameFT'])&&$_POST['nameFT']!="")&&(isset($_POST['emailFT'])&&$_POST['emailFT']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dkfolkin@gmail.com,info@cleanprofit.ru,kasatkin.igor.87@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['nameFT'].'</p>
                        <p>Телефон: '.$_POST['emailFT'].'</p>                     
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>