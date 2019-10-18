<?php
$id_instancia = $_GET['id_instancia'];
include "conectar.php";
//$sql="";
$consultaEstado = "SELECT id_estado from planes WHERE id_instancia = $id_instancia";
   //Creamos la conexion con la funcion anterior
    $conexion = conectarDB();
	
  $resultado=mysqli_query($conexion,$consultaEstado);
if (mysqli_num_rows($resultado)>0)
	{
		while ($fila = $resultado->fetch_array()) {
			$id_estado = $fila['id_estado'];
			}
		if ($id_estado !== '1') {
		$hayRechazados = consultarObjetivos($id_instancia);
		$sql = "SELECT * from planes 
		INNER JOIN archivos_enviados ON archivos_enviados.id_instancia = planes.id_instancia
		INNER JOIN justificaciones ON justificaciones.id_instancia = planes.id_instancia
		INNER JOIN limitaciones ON limitaciones.id_instancia = planes.id_instancia
		INNER JOIN estados ON estados.id_estado = planes.id_estado
		WHERE planes.id_instancia='$id_instancia'
		ORDER BY planes.id_plan";
		
		# code...
} else {
		$hayRechazados = 'false';
		$sql = "SELECT * from planes  
		INNER JOIN estados ON estados.id_estado = planes.id_estado 
		WHERE planes.id_instancia='$id_instancia'
		ORDER BY planes.id_plan";	
	}
	} else {
			
	}
$close = mysqli_close($conexion);





function desconectar($conexion){

    $close = mysqli_close($conexion);

        if($close){
            echo '';
        }else{
            echo 'Ha sucedido un error inexperado en la desconexion de la base de datos
';
        }

    return $close;
}

//$arrayEstados = array();
function consultarObjetivos($id_instancia){
	$rechazados = 'false';
	$consultarObjetivo = "SELECT * from objetivos WHERE id_instancia = $id_instancia";
	$conexion = conectarDB();
	$resultado=mysqli_query($conexion,$consultarObjetivo);
	if (mysqli_num_rows($resultado)>0)
	{
		while ($fila = $resultado->fetch_array()) {
			if ($fila['e_objetivos']== "Rechazado"){
				$rechazados = 'true';
			}					
	}
			return $rechazados;
}
}

function obtenerArreglo($sql,$hayRechazados){
    //Creamos la conexion con la funcion anterior
    $conexion = conectarDB();

    //generamos la consulta

        mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$resultado = mysqli_query($conexion, $sql)) die(); //si la conexi贸n cancelar programa

    $arreglo = array(); //creamos un array

    //guardamos en un array todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_assoc($resultado))
    {
        $arreglo[$i] = $row;
        $i++;
    }
	array_push($arreglo, $hayRechazados);
    desconectar($conexion); //desconectamos la base de datos

    return $arreglo; //devolvemos el array
}

        $r = obtenerArreglo($sql,$hayRechazados);
        echo json_encode($r);
?>