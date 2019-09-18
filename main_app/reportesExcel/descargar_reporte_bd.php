<?php
///// INCLUIR LA CONEXIÓN A LA BD /////////////////
include('conexion.php');
///// CONSULTA A LA BASE DE DATOS /////////////////
$alumnos="SELECT * FROM alumnos order by id_alumno";
$resAlumnos=$conexion->query($alumnos);
?>

<html lang="es">
	<head>
		<title>Descargar Reportes en Excel desde la BD</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
		<link href="css/estilos.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	</head>
	<body>
		<header>
			<div class="alert alert-info">
			<h2>Descargar Reportes en Excel desde la BD</h2>
			</div>
		</header>
		<section>
			<table class="table">
				<tr class="bg-primary">
					<th>ID_Alumno</th>
					<th>Nombre</th>
					<th>Carrera</th>
					<th>Grupo</th>
					<th>Fecha de Ingreso</th>
				</tr>
				<?php
				while ($registroAlumnos = $resAlumnos->fetch_array(MYSQLI_BOTH))
				{
					echo'<tr>
						 <td>'.$registroAlumnos['id_alumno'].'</td>
						 <td>'.$registroAlumnos['nombre'].'</td>
						 <td>'.$registroAlumnos['carrera'].'</td>
						 <td>'.$registroAlumnos['grupo'].'</td>
						 <td>'.$registroAlumnos['fecha_ingreso'].'</td>
						 </tr>';
				}
				?>
			</table>
		</section>

		<form method="post" class="form" action="reporte.php">
		<input type="date" name="fecha1">
		<input type="date" name="fecha2">
		<input type="submit" name="generar_reporte">
		</form>
	</body>
</html>


