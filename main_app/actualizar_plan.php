<?php
  require 'conectar.php';
  $codigo =  utf8_decode($_POST['id']);
	$instanciaMEP = utf8_decode($_POST['instancia']);
  $usuario = utf8_decode($_POST['usuario']);
  $objetivo = utf8_decode($_POST['objetivo']);
  $necesidad = utf8_decode($_POST['necesidad']);
  $interna = utf8_decode($_POST['interna']);
  $externa = utf8_decode($_POST['externa']);
  $nombre = utf8_decode($_POST['nombre']);
  $area = $_POST['area'];
  $modalidad = $_POST['modalidad'];
  $tipo = $_POST['tipo'];
  $duracion = $_POST['duracion'];
  $repeticiones = $_POST['repeticiones'];

  $trimestre1 = $_POST['trim1'];
  $trimestre2 = $_POST['trim2'];
  $trimestre3 = $_POST['trim3'];
  $trimestre4 = $_POST['trim4'];

  $sede = utf8_decode($_POST['sedes']);
  $fechaInicio = $_POST['fechaInicio'];
  $fechaFinal = $_POST['fechaFinal'];
  $costo = $_POST['costo'];
  $tipo_actividad= $_POST['t_actividad'];
  $estado='Enviado';
  $mysqli = conectarDB();

  mysqli_query($mysqli,"UPDATE planes SET instancia='$instanciaMEP', usuario='$usuario', objetivo='$objetivo', necesidad = $necesidad, interna = $interna, externa = $externa, nombre='$nombre', area='$area', modalidad='$modalidad', tipo='$tipo', estrato='$estrato', costo='$costo', tipo_actividad=$tipo_actividad, duracion='$duracion', veces='$repeticiones', sede='$sede',
    f_inicio= '$fechaInicio', f_final='$fechaFinal', trimestre1 = '$trimestre1', trimestre2 = '$trimestre2', trimestre3 = '$trimestre3', trimestre4 = '$trimestre4', costo = '$costo' WHERE id = '$codigo'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));

		$errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
