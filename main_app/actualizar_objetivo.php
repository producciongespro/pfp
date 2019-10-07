<?php
  require 'conectar.php';  
   $id =  utf8_decode($_POST['id']);
   $objetivo = utf8_decode($_POST['campo1']);
   $necesidad = utf8_decode($_POST['campo2']);
  
  
  $mysqli = conectarDB();
  mysqli_query($mysqli,"UPDATE objetivos SET objetivo='$objetivo', necesidad='$necesidad' WHERE id = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();

         if ($mysqli) {
       mysqli_close($mysqli);  
	   }
?>