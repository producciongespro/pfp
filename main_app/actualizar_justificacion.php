<?php
  require 'conectar.php';
  
   $id_instancia =  $_POST['id_instancia'];
   $justificacion= utf8_decode($_POST['campo']);   
  
  $mysqli = conectarDB();
  mysqli_query($mysqli,"UPDATE justificaciones SET 	justificacion='$justificacion' WHERE id_instancia = '$id_instancia'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();  
     if ($mysqli) {
       mysqli_close($mysqli);
	   }  
  ?>
