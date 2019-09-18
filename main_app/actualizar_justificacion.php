<?php
  require 'conectar.php';
  require 'verificar_estado.php';
   $instancia =  utf8_decode($_POST['instancia']);
   $justificacion= utf8_decode($_POST['campo']);
   $id= utf8_decode($_POST['id']);
  $estado = '0';
  $mysqli = conectarDB();
  mysqli_query($mysqli,"UPDATE justificaciones SET 	justificacion='$justificacion' WHERE instancia = '$instancia'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
    $mensajes = array();
    if(estadoElemento('1','justificaciones',$id))
    {
      	echo "<script> console.log('El elemento $justificacion se actualizará en los planes en los que aparezca')</script>";
        mysqli_query($mysqli,"UPDATE planes SET justificacion='$justificacion'WHERE id_just = '$id'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
        $estado = '1';
      // $mensajes[] = "El elemento $justificacion se actualizará en los planes en lo que aparezca";
    }
     if ($mysqli) {
       mysqli_close($mysqli);
}
  echo $estado;
  ?>
