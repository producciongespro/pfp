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

	 /*update 2 en la tabla planes*/
  if ($mysqli)
  {
  $actualizacionPlan = "UPDATE planes SET cantidad_objetivos = 1 WHERE id_instancia = $id_instancia";
     mysqli_query($mysqli,  $actualizacionPlan  ) or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
     $json=array(1=>$mysqli->affected_rows);
    }
    else{
                $json=array(2=>"La petición ajax no envió los datos correctamente");
    }

		 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
