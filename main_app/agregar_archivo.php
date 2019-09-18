<?php
  require 'conectar.php';
   $fecha=strftime( "%Y-%m-%d-%H-%M-%S", time() );
	 $instanciaMEP = utf8_decode($_POST['instancia']);
   $archivo  = $fecha.basename($_FILES['archivo']['name'], ".pdf");
   echo $archivo;
   $directorio = "../enviados/";

  $archivo = preg_replace("/[^A-Za-z0-9_-]/", "", $archivo).".pdf";
   if(move_uploaded_file($_FILES['archivo']['tmp_name'], $directorio.$archivo)) {
   $urlArchivo = $directorio.$archivo;
}

/*
$urlArchivo = $directorio.$archivo;*/
  $mysqli = conectarDB();
    mysqli_query($mysqli,"INSERT INTO archivos_enviados (instancia, url, e_archivo ) VALUES ('$instanciaMEP','$urlArchivo', 'Pendiente' )") or die ("Problemas al a«Ðadir elementos a la BD".mysqli_error($mysqli));
    $rs = mysqli_query($mysqli,"SELECT id from archivos_enviados ORDER BY id DESC LIMIT 1");
        if ($row = mysqli_fetch_row($rs)) {
        $idArchivo = trim($row[0]);
      }
      echo "<script>console.log('$idArchivo')</script>";
      mysqli_query($mysqli,"UPDATE planes SET id_archivo='$idArchivo' WHERE instancia = '$instanciaMEP'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));

		$errors = array();
?>