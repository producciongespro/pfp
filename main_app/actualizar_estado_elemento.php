<?php
require 'conectar.php';
$mysqli=conectarDB();
 $tabla=utf8_decode($_POST['tabla']);
 $id=utf8_decode($_POST['id']);
 $elemento=utf8_decode($_POST['elemento']);
 $valor=utf8_decode($_POST['valor']);

/*
$tabla='planes';
$id='72';
$elemento='e_tipo';
$valor='Reprobado';
*/
cambiarEstado($tabla, $id, $elemento, $valor);
function cambiarEstado($tabla, $id, $elemento, $valor)
{
  // echo "<script> console.log('$tabla')</script>";
  echo "<script> console.log('$id')</script>";
  echo "<script> console.log('$valor')</script>";
		global $mysqli;
    $stmt = $mysqli->prepare("UPDATE $tabla SET $elemento = ? WHERE id = ?");
	  $stmt->bind_param("si", $valor,$id);
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
 if ($mysqli) {
       mysqli_close($mysqli);
}
}
 ?>
