<?php
require 'conectar.php';
$mysqli=conectarDB();
$id_actividad = $_POST['id_actividad'];
$elemento = utf8_decode($_POST['elemento']);
$valor = utf8_decode($_POST['valor']);

echo "$id_actividad ".$id_actividad ."/n";
echo  "$elemento " .$elemento ."/n";
echo "$valor ". $valor; 



global $mysqli;
    $stmt = $mysqli->prepare("UPDATE actividades SET $elemento=? WHERE id_actividad = ?");
	  $stmt->bind_param("si", $valor,$id_actividad);
  	$result = $stmt->execute();
		$stmt->close();
		mysqli_close($mysqli);
		return $result;

?>