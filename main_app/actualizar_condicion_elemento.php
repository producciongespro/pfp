<?php
require 'conectar.php';
$mysqli=conectarDB();
 
 $tabla= $_POST['tabla'];
 $id_instancia = $_POST['idInstancia'];
 $campo=$_POST['campo'];
 $condicion= $_POST['condicion'];


cambiarCondicion($tabla, $id_instancia, $campo, $condicion);

function cambiarCondicion($tabla, $id_instancia, $campo, $condicion)
{
  // echo "<script> console.log('$tabla')</script>";
  echo "<script> console.log( '$id_instancia')</script>";
  echo "<script> console.log('$campo')</script>";
  echo "<script> console.log('$condicion')</script>";
  
global $mysqli;
    $stmt = $mysqli->prepare("UPDATE $tabla SET $campo = ? WHERE id_instancia = ?");
	  $stmt->bind_param("si", $condicion, $id_instancia);
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
 if ($mysqli) {
       mysqli_close($mysqli);
}
}
 ?>
