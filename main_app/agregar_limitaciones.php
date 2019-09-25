<?php
  require 'conectar.php';
  /*
  $instanciaMEP = utf8_decode("Dirección de Recursos Tecnológicos");
  $interna = utf8_decode("Falta de compromiso de los educadores con su propia formación profesional");
  $externa = utf8_decode("Contexto sociocultural de la institución");
  $archivo =  "limitaciones de la escuela Elías Jiménez";
  $directorio = "../enviados/";
  */
	 $instanciaMEP = utf8_decode($_POST['instancia']);
   $interna = utf8_decode($_POST['interna']);   

  $mysqli = conectarDB();
    mysqli_query($mysqli,"INSERT INTO limitaciones (instancia, interna, estado, e_limitaciones) VALUES ('$instanciaMEP','$interna', '0','Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
		$errors = array();
		 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
