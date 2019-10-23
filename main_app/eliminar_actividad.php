<?php
  require 'conectar.php';
  $id_actividad =  $_POST['idActividad'];   
  $id_instancia = $_POST['idInstancia'];    
  $mysqli = conectarDB();
  $consulta = "DELETE FROM actividades WHERE id_actividad = $id_actividad";
  $actualizaActividades = "UPDATE `planes` SET `cantidad_actividades`=`cantidad_actividades`-1 WHERE `id_instancia`= $id_instancia";
  mysqli_query($mysqli, $consulta ) or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
  mysqli_query($mysqli, $actualizaActividades ) or die ("Problemas al actualizar la cantidad de actividades".mysqli_error($mysqli));
           echo $consulta;
		$errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
