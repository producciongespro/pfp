<?php
  require 'conectar.php';  
  $mysqli = conectarDB();
  for ($i=1; $i < 26; $i++) { 
      mysqli_query($mysqli,"INSERT INTO `planes` (`id_instancia`,`fecha_plan`) VALUES ('$i','0001-01-01')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
		$errors = array(); 
  }
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
