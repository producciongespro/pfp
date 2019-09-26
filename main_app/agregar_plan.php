<?php
  require 'conectar.php';
  // require 'cargarVariables.php';
  require 'actualizar_estado.php';
  $instancia = utf8_decode($_POST['instancia']);
  $correo = utf8_decode($_POST['correo']);
  $nombre = utf8_decode($_POST['nombre']);
  $id_justificacion = utf8_decode($_POST['codJustificacion']);
  $justificacion = utf8_decode($_POST['justificacion']);
  $id_archivo = utf8_decode($_POST['idArchivo']);
  $id_limitaciones = utf8_decode($_POST['idlimitaciones']);
  $interna = utf8_decode($_POST['interna']);  
  $id_objetivo = utf8_decode($_POST['idObj']);
  $objetivo = utf8_decode($_POST['objetivo']);
  $necesidad = utf8_decode($_POST['necesidad']);
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
  cambiarEstado('objetivos', $id_objetivo, 1);
  cambiarEstado('justificaciones', $id_justificacion, 1);
  cambiarEstado('limitaciones', $id_limitaciones, 1);
    $mysqli = conectarDB();
      mysqli_query($mysqli,"INSERT INTO planes (instancia, correo, nombre, e_nombre, id_just, justificacion, id_archivo, id_lim, interna, id_obj, objetivo, necesidad, duracion, e_duracion, sede, e_sede, estado, fecha_envio, tipo, e_tipo, estrato, e_estrato, tipo_actividad, e_tipo_actividad, area, e_area, modalidad, e_modalidad, estrategia, e_estrategia, costo, e_costo ) VALUES
                                    ('$instancia', '$correo', '$nombre','Pendiente','$id_justificacion','$justificacion','$id_archivo','$id_limitaciones','$interna','$id_objetivo', '$objetivo', '$necesidad', '$duracion','Pendiente','$sede','Pendiente','$estado',  NOW(),  '$tipo','Pendiente', '$estrato','Pendiente', '$tipo_actividad','Pendiente',  '$area','Pendiente', '$modalidad','Pendiente', '$estrategia','Pendiente', '$costo','Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
      $errors = array();
 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
