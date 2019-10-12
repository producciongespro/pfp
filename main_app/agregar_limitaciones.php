<?php
  require 'conectar.php';  
	$id_instancia = $_POST['id_instancia'];
	$interna = utf8_decode($_POST['interna']);   

  $mysqli = conectarDB();
    mysqli_query($mysqli,"INSERT INTO limitaciones (id_instancia, interna, e_limitaciones) VALUES ('$id_instancia','$interna', 'Pendiente')") or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
		$errors = array();

/*update 2 en la tabla planes*/
  if ($mysqli)
  {
  $actualizacionPlan = "UPDATE planes SET limitacion_agregado = true WHERE id_instancia = $id_instancia";
     mysqli_query($mysqli,  $actualizacionPlan  ) or die ("Problemas al añadir elementos a la BD".mysqli_error($mysqli));
     $json=array(1=>$mysqli->affected_rows);
    }
    else{
                $json=array(2=>"La petición ajax no envió los datos correctamente");
    }


		 if ($mysqli) {
       mysqli_close($mysqli);
}
?>
