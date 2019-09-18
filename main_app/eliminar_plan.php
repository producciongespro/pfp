<?php
  require 'conectar.php';
  $codigo =  utf8_decode($_POST['id']);
	$instanciaMEP = utf8_decode($_POST['instancia']);
  $usuario = utf8_decode($_POST['usuario']);
  $objetivo = utf8_decode($_POST['objetivo']);

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

  mysqli_query($mysqli,"DELETE FROM planes WHERE id = '$codigo'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
                /* if ($query) {
                        echo ("Cuento agregado exitosamente");
                        session_destroy();
                      } else {
                       echo ("Error al agregar el cuento");
          	}*/
		$errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
