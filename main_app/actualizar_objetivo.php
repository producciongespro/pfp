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
  mysqli_query($mysqli,"UPDATE objetivos SET 	objetivo='$objetivo', necesidad='$necesidad' WHERE id = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();
    if(estadoElemento('1','objetivos',$id))
    {
      	echo "<script> console.log('El elemento $objetivo se actualizará en los planes en los que aparezca')</script>";
        mysqli_query($mysqli,"UPDATE planes SET objetivo='$objetivo', necesidad='$necesidad' WHERE id_obj = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
        $estado = '1';
      }
      else
      {
        	echo "<script> console.log('El elemento $objetivo no aparece aun en ningún plan')</script>";
        }
         if ($mysqli) {
       mysqli_close($mysqli);
}
  echo $estado;
  ?>
