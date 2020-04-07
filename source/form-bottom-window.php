<?
if((isset($_POST['window-bottom'])&&$_POST['window-bottom']!="")&&(isset($_POST['balcon-window-bottom'])&&$_POST['balcon-window-bottom']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dkfolkin@gmail.com,anutapelipenko@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Clean Profit: Обратный звонок c Окон нижняя форма'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><strong>Количество окон:</strong> '.$_POST['window-bottom'].'</p>
                        <p><strong>Количетсво балконов:</strong> '.$_POST['balcon-window-bottom'].'</p>
                        <p><strong>Телефон:</strong> '.$_POST['intro-form-tel-bottom'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>