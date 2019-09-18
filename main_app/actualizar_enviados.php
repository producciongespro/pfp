<?php
require 'conectar.php';
$mysqli=conectarDB();
$instancia =  "Curricular";
$instancia =  utf8_decode($_POST['instancia']);
$nuevoEstado = "Enviado";
cambiarEstado($nuevoEstado,$instancia);

function cambiarEstado($nuevoEstado,$instancia)
{
    echo "<script> console.log('$instancia')</script>";
    echo "<script> console.log('$nuevoEstado')</script>";
  	global $mysqli;
    $stmt = $mysqli->prepare("UPDATE planes SET estado= ?, fecha_envio= NOW() WHERE instancia = ?");
    $stmt->bind_param("ss",$nuevoEstado,$instancia);
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
   if ($mysqli) {
       mysqli_close($mysqli);
}
    
}
 
?>
