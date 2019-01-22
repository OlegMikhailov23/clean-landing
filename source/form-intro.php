<?
if((isset($_POST['room-count'])&&$_POST['room-count']!="")&&(isset($_POST['bath-count'])&&$_POST['bath-count']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dkfolkin@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок c Уборок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><strong>Количество комнат:</strong> '.$_POST['room-count'].'</p>
                        <p><strong>Количетсво санузлов:</strong> '.$_POST['bath-count'].'</p>
                        <p><strong>Телефон:</strong> '.$_POST['intro-form-tel'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>