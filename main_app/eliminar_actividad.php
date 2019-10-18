<?php
  require 'conectar.php';
  $id_actividad =  $_POST['idActividad'];   

  $mysqli = conectarDB();
  $consulta = "DELETE FROM actividades WHERE id_actividad = $id_actividad";

  mysqli_query($mysqli, $consulta ) or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
           echo $consulta;
		$errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
