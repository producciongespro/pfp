<?php
require 'conectar.php';
$mysqli=conectarDB();
 
 $tabla= $_POST['tabla'];
 $id_item = $_POST['idItem'];
 $campo=$_POST['campo'];
 $condicion= $_POST['condicion'];
 $campoId = "id_instancia";
 /*
 Validación de campo id en caso que se consulte la tabla objetivos 
 (Debido a que una instancia pueda tener varios objetivos )
 */
 if ($tabla == "objetivos") {
	 $campoId = "id_objetivo";
	}
if ($tabla == "actividades") {
	 $campoId = "id_actividad";
	}





cambiarCondicion($tabla, $id_item, $campo, $condicion, $campoId);

function cambiarCondicion($tabla, $id_item, $campo, $condicion, $campoId)
{
  // echo "<script> console.log('$tabla')</script>";
  echo "<script> console.log( '$id_item')</script>";
  echo "<script> console.log('$campo')</script>";
  echo "<script> console.log('$condicion')</script>";
  
global $mysqli;
    $stmt = $mysqli->prepare("UPDATE $tabla SET $campo = ? WHERE $campoId = ?");
	  $stmt->bind_param("si", $condicion, $id_item);
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
 if ($mysqli) {
       mysqli_close($mysqli);
}
}
 ?>
