<?php
$mysqli=conectarDB();
function cambiarEstado($tabla, $id, $valor)
{
  // echo "<script> console.log('$tabla')</script>";
  echo "<script> console.log('$id')</script>";
  echo "<script> console.log('$valor')</script>";
		global $mysqli;
    $stmt = $mysqli->prepare("UPDATE $tabla SET estado=? WHERE id = ?");
	  $stmt->bind_param("ii", $valor,$id);
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
  if ($mysqli) {
       mysqli_close($mysqli);
}
}

 ?>
