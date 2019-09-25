<?php
  require 'conectar.php';
  require 'verificar_estado.php';
   $id =  $_POST['id'];
   $interna = utf8_decode($_POST['interna']);   
  $estado = '0';

  $mysqli = conectarDB(); 
  mysqli_query($mysqli,"UPDATE limitaciones SET interna='$interna' WHERE id = $id") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();
    //TODO: Esto no sería necesario si se referncia mediante el id de la tabla limitaciones
	if(estadoElemento('1','limitaciones',$id))
    {
      	      mysqli_query($mysqli,"UPDATE planes SET interna='$interna', WHERE id_lim = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
        $estado = '1';
      }
      else
      {
        	echo "<script> console.log('El elemento no aparece aun en ningún plan')</script>";
        }
         if ($mysqli) {
       mysqli_close($mysqli);
}
  echo $estado;
  ?>
