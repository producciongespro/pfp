<?php
  require 'conectar.php';
  $justificacion = utf8_decode($_POST['justificacion']);
  $id_instancia = utf8_decode($_POST['id_instancia']);
  $mysqli = conectarDB();
  
  /*Insercción 1 en la tabla justificaciones*/
  if ($mysqli)
  {
     mysqli_query($mysqli,"INSERT INTO justificaciones (id_instancia, justificacion, e_justificaciones) VALUES ( '$id_instancia',  '$justificacion', 'Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
     $json=array(1=>$mysqli->affected_rows);
    }
    else{
                $json=array(2=>"La petición ajax no envió los datos correctamente");
    }

	 /*update 2 en la tabla planes*/
  if ($mysqli)
  {
  $actualizacionPlan = "UPDATE planes SET justificacion_agregado = true WHERE id_instancia = $id_instancia";
     mysqli_query($mysqli,  $actualizacionPlan  ) or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
     $json=array(1=>$mysqli->affected_rows);
    }
    else{
                $json=array(2=>"La petición ajax no envió los datos correctamente");
    }



     if ($mysqli) {
       mysqli_close($mysqli);
}
echo json_encode($json);
?>
