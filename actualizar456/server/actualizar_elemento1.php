<?php
require 'conectar.php';
$mysqli=conectarDB();
$id = utf8_decode($_POST['id']);
$objetivo = utf8_decode($_POST['objetivo']);
$necesidad = utf8_decode($_POST['necesidad']);


echo $id;
echo $objetivo;
echo $necesidad;


	global $mysqli;
    $stmt = $mysqli->prepare("UPDATE planes SET objetivo=?, necesidad=?   WHERE id = ?");

	

		$stmt->bind_param("ssi", $objetivo,$necesidad,$id);
  		$result = $stmt->execute();
		$stmt->close();
		return $result;
 ?>
