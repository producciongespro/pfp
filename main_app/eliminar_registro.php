<?php
  require 'conectar.php';
  $idRegistro =  utf8_decode($_POST['id']);  
  $tabla =  utf8_decode($_POST['tabla']);
  // $instanciaMEP = utf8_decode($_POST['instancia']);
  // $usuario = utf8_decode($_POST['usuario']);
  // $objetivo = utf8_decode($_POST['objetivo']);
  $mysqli = conectarDB();

  mysqli_query($mysqli,"DELETE FROM $tabla WHERE id = '$idRegistro' ") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
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