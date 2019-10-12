<?php
  require 'conectar.php';
  // require 'cargarVariables.php';
  require 'activar_objetivo.php';
  $id_instancia = utf8_decode($_POST['id_instancia']);  
  $correo = utf8_decode($_POST['correo']);
  $nombre_actividad = utf8_decode($_POST['nombre']);      
  $id_objetivo = utf8_decode($_POST['id_objetivo']); 
  $duracion = utf8_decode($_POST['duracion']);
  $sede = utf8_decode($_POST['sede']);  
  $tipo = utf8_decode($_POST['tipo']);
  $tipo_actividad = utf8_decode($_POST['tActividad']);
  $estrato = utf8_decode($_POST['estrato']);
  $area = utf8_decode($_POST['area']);
  $modalidad = utf8_decode($_POST['modalidad']);
  $estrategia = utf8_decode($_POST['estrategia']);
  $costo = utf8_decode($_POST['costo']);    

    $mysqli = conectarDB();
      mysqli_query($mysqli,"INSERT INTO actividades (id_instancia, correo, nombre_actividad, e_nombre, id_objetivo, duracion, e_duracion, sede, e_sede, tipo, e_tipo, estrato, e_estrato, tipo_actividad, e_tipo_actividad, area, e_area, modalidad, e_modalidad, estrategia, e_estrategia, costo, e_costo ) VALUES
                                    ( '$id_instancia', '$correo', '$nombre_actividad','Pendiente', '$id_objetivo', '$duracion','Pendiente','$sede','Pendiente',  '$tipo','Pendiente', '$estrato','Pendiente', '$tipo_actividad','Pendiente',  '$area','Pendiente', '$modalidad','Pendiente', '$estrategia','Pendiente', '$costo','Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
      
	  activarObjetivo($id_objetivo);

	  /*update 2 en la tabla planes*/
  if ($mysqli)
  {
  $actualizacionPlan = 
			"UPDATE planes SET cantidad_actividades = 1 WHERE id_instancia = $id_instancia"; 			
     mysqli_query($mysqli,  $actualizacionPlan  ) or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));

	 //TODO: Eliminar esta seguna consulta
$actualizacionPlan = 
			"UPDATE planes SET id_estado = 2 WHERE id_instancia = $id_instancia"; 			
     mysqli_query($mysqli,  $actualizacionPlan  ) or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
     
    }
    else{
                //Mensaje 2
    }





	  $errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
