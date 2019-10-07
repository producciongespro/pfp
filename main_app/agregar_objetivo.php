<?php

  require 'conectar.php';
	$id_instancia = utf8_decode($_POST['id_instancia']);
  $correo_usuario = utf8_decode($_POST['correo_usuario']);
  $necesidad = utf8_decode($_POST['necesidad']);
  $objetivo = utf8_decode($_POST['objetivo']);
  $activo='0';
  $mysqli = conectarDB();
    mysqli_query($mysqli,"INSERT INTO objetivos (id_instancia,correo_usuario,necesidad, objetivo, activo, e_objetivos) VALUES ('$id_instancia','$correo_usuario','$necesidad','$objetivo','$activo','Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
		$errors = array();
		 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
