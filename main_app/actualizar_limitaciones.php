<?php
  require 'conectar.php';  
   $id =  $_POST['id'];
   $interna = utf8_decode($_POST['interna']);     

  $mysqli = conectarDB(); 
  mysqli_query($mysqli,"UPDATE limitaciones SET interna='$interna' WHERE id = $id") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();  
   if ($mysqli) {
       mysqli_close($mysqli);
	}
  
  ?>
