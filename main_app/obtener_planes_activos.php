<?php

$sql = "SELECT * from planes  
INNER JOIN estados ON estados.id_estado = planes.id_estado
INNER JOIN archivos_enviados ON archivos_enviados.id_instancia = planes.id_instancia
INNER JOIN justificaciones ON justificaciones.id_instancia = planes.id_instancia
INNER JOIN limitaciones ON limitaciones.id_instancia =planes.id_instancia
INNER JOIN instancias ON instancias.id_instancia =planes.id_instancia
WHERE  NOT (planes.id_estado = 1 OR planes.id_estado = 2)  ORDER BY planes.id_instancia ASC";

include "conectar.php";
function desconectar($conexion){

    $close = mysqli_close($conexion);

        if($close){
            echo '';
        }else{
            echo 'Ha sucedido un error inexperado en la desconexion de la base de datos';
        }

    return $close;
}

//TODO hacer validacion cuando no hayan registros encontrados

function obtenerArreglo($sql){
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

    desconectar($conexion); //desconectamos la base de datos

    return $arreglo; //devolvemos el array
	
}

       $r = obtenerArreglo($sql);	
       echo json_encode($r);
	   
		
?>