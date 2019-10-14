<?php
require 'conectar.php';
$mysqli=conectarDB();
$id_instancia =  $_POST['id_instancia'];
$id_estado = 3;


cambiarEstado($id_estado, $id_instancia);

function cambiarEstado($id_estado, $id_instancia)
{
    echo "<script> console.log('$id_instancia')</script>";
    echo "<script> console.log('$id_estado')</script>";
  	global $mysqli;
    $stmt = $mysqli->prepare("UPDATE planes SET id_estado = ?, fecha_plan= NOW()  WHERE id_instancia = ?");
    $stmt->bind_param("ii", $id_estado, $id_instancia);
  	$result = $stmt->execute();
		$stmt->close();
		return $result;
   if ($mysqli) {
       mysqli_close($mysqli);
}
    
}
 //fecha_plan= NOW()
?>
