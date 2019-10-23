<?php
  require 'conectar.php';
   $fecha=strftime( "%Y-%m-%d-%H-%M-%S", time() );
	$id_instancia = utf8_decode($_POST['id_instancia']);
   $archivo  = $fecha.basename($_FILES['archivo']['name'], ".pdf");
   echo $archivo;
   $directorio = "../enviados/";

  $archivo = preg_replace("/[^A-Za-z0-9_-]/", "", $archivo).".pdf";
   if(move_uploaded_file($_FILES['archivo']['tmp_name'], $directorio.$archivo)) {
   $urlArchivo = $directorio.$archivo;
}
  $mysqli = conectarDB();  
    mysqli_query($mysqli,"UPDATE archivos_enviados SET url = '$urlArchivo' WHERE id_instancia = '$id_instancia'");  
	mysqli_close($mysqli);

?>