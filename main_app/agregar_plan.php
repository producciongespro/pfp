<?php
  require 'conectar.php';
  // require 'cargarVariables.php';
  require 'activar_objetivo.php';
  $id_instancia = utf8_decode($_POST['id_instancia']);  
  $correo = utf8_decode($_POST['correo']);
  $nombre = utf8_decode($_POST['nombre']);
  $id_justificacion = utf8_decode($_POST['id_justificacion']);  
  $id_archivo = utf8_decode($_POST['id_archivo']);
  $id_limitacion = utf8_decode($_POST['id_limitacion']);  
  $id_objetivo = utf8_decode($_POST['id_objetivo']); 
  $duracion = utf8_decode($_POST['duracion']);
  $sede = utf8_decode($_POST['sede']);
  $estado = utf8_decode($_POST['estado']);
  $tipo = utf8_decode($_POST['tipo']);
  $tipo_actividad = utf8_decode($_POST['tActividad']);
  $estrato = utf8_decode($_POST['estrato']);
  $area = utf8_decode($_POST['area']);
  $modalidad = utf8_decode($_POST['modalidad']);
  $estrategia = utf8_decode($_POST['estrategia']);
  $costo = utf8_decode($_POST['costo']);
    
    $mysqli = conectarDB();
      mysqli_query($mysqli,"INSERT INTO planes (id_instancia, correo, nombre, e_nombre, id_justificacion, id_archivo, id_limitacion,  id_objetivo, duracion, e_duracion, sede, e_sede, estado, fecha_envio, tipo, e_tipo, estrato, e_estrato, tipo_actividad, e_tipo_actividad, area, e_area, modalidad, e_modalidad, estrategia, e_estrategia, costo, e_costo ) VALUES
                                    ( '$id_instancia', '$correo', '$nombre','Pendiente','$id_justificacion', '$id_archivo','$id_limitacion', '$id_objetivo', '$duracion','Pendiente','$sede','Pendiente','$estado',  NOW(),  '$tipo','Pendiente', '$estrato','Pendiente', '$tipo_actividad','Pendiente',  '$area','Pendiente', '$modalidad','Pendiente', '$estrategia','Pendiente', '$costo','Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
      
	  activarObjetivo($id_objetivo);
	  $errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
