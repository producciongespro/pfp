<?php
  require 'conectar.php';
  $justificacion = utf8_decode($_POST['justificacion']);
  $id_instancia = utf8_decode($_POST['id_instancia']);
  $mysqli = conectarDB();
  if ($mysqli)
  {
     mysqli_query($mysqli,"INSERT INTO justificaciones (id_instancia, justificacion, estado, e_justificaciones) VALUES ( '$id_instancia',  '$justificacion', '0','Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
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
