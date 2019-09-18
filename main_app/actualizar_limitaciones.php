<?php
  require 'conectar.php';
  require 'verificar_estado.php';
   $id =  utf8_decode($_POST['id']);
   $internas = utf8_decode($_POST['interna']);
   $externas = utf8_decode($_POST['externa']);
  $estado = '0';

  $mysqli = conectarDB();
  mysqli_query($mysqli,"UPDATE limitaciones SET interna='$internas', externa='$externas' WHERE id = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();
    if(estadoElemento('1','limitaciones',$id))
    {
      	      mysqli_query($mysqli,"UPDATE planes SET interna='$internas', externa='$externas' WHERE id_lim = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
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
