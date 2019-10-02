<?php
  require 'conectar.php';
  require 'verificar_estado.php';
   $id =  utf8_decode($_POST['id']);
   $objetivo = utf8_decode($_POST['campo1']);
   $necesidad = utf8_decode($_POST['campo2']);
  $estado = '0';
  /*
  $id = '34';
  $objetivo= utf8_decode("Nuevo objetivo para el plan 3 ");
  $necesidad = utf8_decode("Nueva necesidad para el plan 3 ");
  */
  $mysqli = conectarDB();
  mysqli_query($mysqli,"UPDATE objetivos SET objetivo='$objetivo', necesidad='$necesidad' WHERE id = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();

         if ($mysqli) {
       mysqli_close($mysqli);
}
  echo $estado;
  ?>
