<?php
  $material=$_POST['material'];
  $square=$_POST['square'];
  $add1=$_POST['add1'];
  $add2=$_POST['add2'];
  $add3=$_POST['add3'];
  $add4=$_POST['add4'];
  $add5=$_POST['add5'];
  $price=$_POST['price'];
  $tel=$_POST['tel'];
  $msg="Материал: {$material}\nМетраж: {$square}\nДополнительно: {$add1}\nДополнительно: {$add2}\nДополнительно: {$add3}\nДополнительно: {$add4}\nДополнительно: {$add5}\nЦена: {$price}\nТелефон: {$tel} ";
  mail('dkfolkin@gmail.com, anutapelipenko@gmail.com','+7 (812) 926-31-29 Заказ с сайта, Clean Profit', $msg);
  echo "Ваше сообщение успешно отправлено";
?>
