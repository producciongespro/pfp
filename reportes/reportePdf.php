<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../css/estilos.css">

    <script src="../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../vendor/alertify/alertify.min.js"></script>
    <script src="../js/model/model.js"></script>
    <script src="../js/controller/c_login.js"></script>
    <title>Planes de formación</title>

    <!-- <link rel="stylesheet" href="style.css" /> -->
</head>
<body>
    <div class="jumbotron jumbo-encabezado">
        <div class="row">
            <div class="col-sm-2">
                <img src="../img/mep_idp.png" alt="Logo MEP - IDP" class="img-fluid">
            </div>
            <div class="col-sm-8 text-center">
                    <img src="../img/pfp.png" alt="Logo MEP - IDP" class="logo-banner">
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>

<body>
<div id="content">
<center>
<h1>Planes de formación disponibles</h1>
</center>
<hr />

<?php
	include("../login/funcs\conexion.php");
	$conectar = conectarDB();
	$strConsulta = "SELECT * from planes";
	$pacientes = $conectar->query($strConsulta);
	$numlista = 0;
  echo "<script>console.log('EStoy en el php')</script>";
  echo "<center>";
	echo '<div class="col-sm-8">';
	echo '<table class="table table-hover">';
	echo '<thead><tr><td>No.</td><td>ID</td><td>INSTANCIA</td><td>CURSO</td><td>PDF</td></tr></thead>';
	foreach ($pacientes as $fila)
	{
		$numlista++;
		echo '<tr><td>'.$numlista.'</td>';
		echo '<td>'.$fila['id'].'</td>';
        echo '<td>'.utf8_encode($fila['instancia']).'</td>';
        echo '<td>'.utf8_encode($fila['nombre']).'</td>';

		echo '<td><a href="reporte_historial.php?id='.$fila['id'].'">ver</a></td></tr>';
	}
	echo "</table>";
  echo "</div>";
  echo "<a href='index.html'>VOLVER</a>";
    echo "</center>";
?>

</div>
</body>
</html>
