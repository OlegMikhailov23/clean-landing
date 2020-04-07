<?
if((isset($_POST['window-top'])&&$_POST['window-top']!="")&&(isset($_POST['balcon-window-top'])&&$_POST['balcon-window-top']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dkfolkin@gmail.com,anutapelipenko@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок c Окон'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><strong>Количество окон:</strong> '.$_POST['window-top'].'</p>
                        <p><strong>Количетсво балконов:</strong> '.$_POST['balcon-window-top'].'</p>
                        <p><strong>Телефон:</strong> '.$_POST['intro-form-tel'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>