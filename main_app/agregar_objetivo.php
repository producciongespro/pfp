<?php

  require 'conectar.php';
	$instanciaMEP = utf8_decode($_POST['instancia']);
  $correo_usuario = utf8_decode($_POST['correo_usuario']);
  $necesidad = utf8_decode($_POST['necesidad']);
  $objetivo = utf8_decode($_POST['objetivo']);
  $estado='0';
  $mysqli = conectarDB();
    mysqli_query($mysqli,"INSERT INTO objetivos (instancia,correo_usuario,necesidad, objetivo, estado, e_objetivos) VALUES ('$instanciaMEP','$correo_usuario','$necesidad','$objetivo','$estado','Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
		$errors = array();
		 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
