<?php
  require 'conectar.php';  
   $id_objetivo =  utf8_decode($_POST['id_objetivo']);
   $objetivo = utf8_decode($_POST['objetivo']);
   $necesidad = utf8_decode($_POST['necesidad']);
  
  
  $mysqli = conectarDB();
  mysqli_query($mysqli,"UPDATE objetivos SET objetivo='$objetivo', necesidad='$necesidad' WHERE id_objetivo = '$id_objetivo'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();

         if ($mysqli) {
       mysqli_close($mysqli);  
	   }
?>