<?php
  require 'conectar.php';
	$id_plan =  utf8_decode($_POST['id_plan']);
	$id_instancia = utf8_decode($_POST['id_instancia']);
	$usuario = utf8_decode($_POST['usuario']);
	
	/*TODO:
	Revisar la pertinencia de estos parametros:
	*/
  $nombre = utf8_decode($_POST['nombre']);
  $area = $_POST['area'];
  $modalidad = $_POST['modalidad'];
  $tipo = $_POST['tipo'];
  $duracion = $_POST['duracion'];
  $repeticiones = $_POST['repeticiones'];

  $sedes = utf8_decode($_POST['sedes']);
  $fechaInicio = $_POST['fechaInicio'];
  $fechaFinal = $_POST['fechaFinal'];

  $mysqli = conectarDB();

  mysqli_query($mysqli,"DELETE FROM planes WHERE id_plan = '$id_plan'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
           
		$errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
