<?php
require 'conectar.php';
$mysqli=conectarDB();

$id_instancia =  $_POST['id_instancia'];
$id_estado =   $_POST['id_estado'];

cambiarEstado( $id_instancia, $id_estado);

function cambiarEstado($id_instancia, $id_estado)
{
    echo "<script> console.log('$id_instancia')</script>";
    echo "<script> console.log('$id_estado')</script>";
  	global $mysqli;
    $stmt = $mysqli->prepare("UPDATE planes SET id_estado = ? WHERE id_instancia  = ?");
    $stmt->bind_param("ii",$id_estado,$id_instancia );
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
  }
?>
