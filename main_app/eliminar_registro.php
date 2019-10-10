<?php
  require 'conectar.php';
  $idNombre =  utf8_decode($_POST['idNombre']);  
  $idValor =  utf8_decode($_POST['idValor']);  
  $tabla =  utf8_decode($_POST['tabla']);
  // $instanciaMEP = utf8_decode($_POST['instancia']);
  // $usuario = utf8_decode($_POST['usuario']);
  // $objetivo = utf8_decode($_POST['objetivo']);
  $mysqli = conectarDB();
  $consulta = "DELETE FROM $tabla WHERE $idNombre = '$idValor' ";

  mysqli_query($mysqli, $consulta ) or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));
           echo $consulta;
		$errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
