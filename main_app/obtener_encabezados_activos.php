<?php
$sql = "SELECT * FROM estado_pfp   
INNER JOIN justificaciones ON justificaciones.id_instancia = estado_pfp.id_instancia
INNER JOIN limitaciones ON limitaciones.id_instancia = estado_pfp.id_instancia
INNER JOIN archivos_enviados ON archivos_enviados.id_instancia = estado_pfp.id_instancia
INNER JOIN instancias ON instancias.id_instancia = estado_pfp.id_instancia
WHERE  estado_pfp.id_estado != 1  ORDER BY estado_pfp.id_instancia ASC";
include "conectar.php";
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
