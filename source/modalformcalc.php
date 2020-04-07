<?
if((isset($_POST['item-1'])&&$_POST['item-1']!="")&&(isset($_POST['calculatorTel'])&&$_POST['calculatorTel']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dkfolkin@gmail.com,info@cleanprofit.ru, anutapelipenko@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок c Калькулятора'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Вещь-1: '.$_POST['item-1'].'</p>
                        <p>Вещь-2: '.$_POST['item-2'].'</p>
                        <p>Вещь-3: '.$_POST['item-3'].'</p>
                        <p>Вещь-4: '.$_POST['item-4'].'</p>
                        <p>Дополнительно: '.$_POST['addSelect'].'</p>
                        <p>Телефон: '.$_POST['calculatorTel'].'</p>
                        <p>Предварительная цена: '.$_POST['calcPrice'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>