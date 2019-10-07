<?php
  require 'conectar.php';  
	$id_instancia = $_POST['id_instancia'];
	$interna = utf8_decode($_POST['interna']);   

  $mysqli = conectarDB();
    mysqli_query($mysqli,"INSERT INTO limitaciones (id_instancia, interna, e_limitaciones) VALUES ('$id_instancia','$interna', 'Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
		$errors = array();
		 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
