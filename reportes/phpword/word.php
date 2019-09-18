<?php
require("../../login/funcs\conexion.php");
 //export.php
$vExcelFileName="export". ".docx"; //replace your file name from here.
$sql = "SELECT * FROM planes ORDER BY id ASC";
header("Content-type: application/x-ms-download"); //#-- build header to download the word file
header("Content-Disposition: attachment; filename=$vExcelFileName");
header('Cache-Control: public');
$conexion = conectarDB();

//generamos la consulta

mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$resultado = mysqli_query($conexion, $sql)) die(); //si la conexi贸n cancelar programa

$arreglo = array(); //creamos un array

//guardamos en un array todos los datos de la consulta
$i=0;

while($row = mysqli_fetch_assoc($resultado))
{

echo "<center>Plan de Formación</center><br/><br/></center>";
echo $row['instancia'];
}

// desconectar($conexion); //desconectamos la base de datos

?>
