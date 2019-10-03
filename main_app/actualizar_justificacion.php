<?php
  require 'conectar.php';
  require 'verificar_estado.php';
   $id_instancia =  $_POST['id_instancia'];
   $justificacion= utf8_decode($_POST['campo']);   
  $estado = '0';
  $mysqli = conectarDB();
  mysqli_query($mysqli,"UPDATE justificaciones SET 	justificacion='$justificacion' WHERE id_instancia = '$id_instancia'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();  
     if ($mysqli) {
       mysqli_close($mysqli);}
  echo $estado;
  ?>
