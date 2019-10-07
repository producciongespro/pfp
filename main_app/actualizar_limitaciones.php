<?php
  require 'conectar.php';  
   $id_limitacion =  $_POST['id_limitacion'];
   $interna = utf8_decode($_POST['interna']);     

  $mysqli = conectarDB(); 
  mysqli_query($mysqli,"UPDATE limitaciones SET interna='$interna' WHERE id_limitacion = $id_limitacion") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();  
   if ($mysqli) {
       mysqli_close($mysqli);
	}
  
  ?>
