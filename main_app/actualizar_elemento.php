<?php
require 'conectar.php';
$mysqli=conectarDB();
$id = utf8_decode($_POST['id']);
$elemento = utf8_decode($_POST['elemento']);
$valor= utf8_decode($_POST['valor']);
		global $mysqli;
    $stmt = $mysqli->prepare("UPDATE planes SET $elemento=? WHERE id = ?");
	  $stmt->bind_param("si", $valor,$id);
  	$result = $stmt->execute();
		$stmt->close();
		mysqli_close($mysqli);
		return $result;
 ?>
