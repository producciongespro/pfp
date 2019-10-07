<?php
require 'conectar.php';
$mysqli=conectarDB();

$id_instancia =  utf8_decode($_POST['id_instancia']);
$nuevoEstado =   utf8_decode($_POST['estado']);
cambiarEstado($nuevoEstado,$instancia);

function cambiarEstado($nuevoEstado,$instancia)
{
    echo "<script> console.log('$instancia')</script>";
    echo "<script> console.log('$nuevoEstado')</script>";
  	global $mysqli;
    $stmt = $mysqli->prepare("UPDATE planes SET estado= ?, fecha_envio= NOW() WHERE id_instancia  = ?");
    $stmt->bind_param("ss",$nuevoEstado,$id_instancia );
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
  }
?>
