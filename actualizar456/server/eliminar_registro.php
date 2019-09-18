<?php

  require('conectar.php');
  sleep(1);
  $mysqli = conectarDB();

  $idValor =  utf8_decode($_POST['idVal']);
  $usuario =  utf8_decode($_POST['nombreUsuario']);
  $evento = utf8_decode("Eliminación");

  // $sql = "SELECT ingresos.id_cat,ingresos.nombre_proyecto, ingresos.usu_ingreso, usuarios.nombre1, usuarios.apellido1  FROM ingresos
  //         INNER JOIN usuarios
  //         ON usuarios.correo = ingresos.correo";
  $sql = "SELECT id, nombre, instancia FROM planes WHERE id='$idValor'";
  $result = mysqli_query($mysqli, $sql);
  // $result = $mysqli->query($sql);
  if (mysqli_num_rows($result)>0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
      $nombre =  $row["nombre"];
      $instancia = $row["instancia"];
}
}
  mysqli_query($mysqli,"DELETE FROM planes WHERE id = '$idValor' ") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
  mysqli_query($mysqli,"INSERT INTO bitacora (usuario,evento,actividad, instancia) VALUES ('$usuario','$evento','$nombre','$instancia')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
  //cerrar conexion
     mysqli_close($mysqli);
		$errors = array();

?>
