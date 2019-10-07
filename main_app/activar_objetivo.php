<?php
$mysqli=conectarDB();
function activarObjetivo($id)
{ 
global $mysqli;
    $stmt = $mysqli->prepare("UPDATE objetivos SET activo=1 WHERE id_objetivo = ?");
	  $stmt->bind_param("i",$id);
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
  if ($mysqli) {
       mysqli_close($mysqli);
}
}

 ?>
