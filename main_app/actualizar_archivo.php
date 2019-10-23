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
    
	//En caso de que el usuario suba otro archivo:
	$rs = mysqli_query($mysqli,"SELECT id_archivo from archivos_enviados ORDER BY id_archivo DESC LIMIT 1");
        if ($row = mysqli_fetch_row($rs)) {
        $idArchivo = trim($row[0]);
      }
	 
      echo "<script>console.log('$idArchivo')</script>";
      //mysqli_query($mysqli,"UPDATE planes SET id_archivo='$idArchivo' WHERE id_instancia = '$id_instancia'") or die ("Problemas al actualizar elementos a la BD".mysqli_error($mysqli));


	  /*update 2 en la tabla planes*/
  if ($mysqli)
  {
  $actualizacionPlan = "UPDATE planes SET archivo_agregado = true WHERE id_instancia = $id_instancia";
     mysqli_query($mysqli,  $actualizacionPlan  ) or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
     
    }
    else{
                //Error
    }



		$errors = array();
?>