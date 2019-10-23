<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../css/estilos.css">
    <script src="../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>

 <!--
    <script src="../vendor/alertify/alertify.min.js"></script>
    <script src="../js/model/model.js"></script>
    <script src="../js/controller/c_login.js"></script>
    <title>Planes de formación</title>

    <link rel="stylesheet" href="style.css" /> -->
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
<div class="row row-nav">
        <div class="col-sm-4">
            <div class="alert alert-primary alert-custom" role="alert">
                PLANES DE FORMACIÓN AVALADOS POR INSTANCIA
            </div>
        </div>
        <div class="col-sm-6">
                <div class="alert alert-primary alert-custom" id="infoUser" role="alert">
                   
                </div>
        </div>
        <div class="col-sm-2">
            <div class="alert alert-secondary alert-custom" role="alert">
                <a href='../reportes'>
                        VOLVER
                </a>
            </div>
        </div>
  
      </div>
<hr />

<?php
	include("../login/funcs/conexion.php");
	$conectar = conectarDB();
	$strConsulta = "SELECT * from planes INNER JOIN instancias ON planes.id_instancia=instancias.id_instancia WHERE planes.id_estado = 5";
	$instanciasConPlanes = $conectar->query($strConsulta);
	$numlista = 0;
  $instanciasAEscribir=array();
  foreach ($instanciasConPlanes as $fila) {
  // if (!in_array(utf8_encode($fila['instancia']), $instanciasAEscribir)) {
    array_push($instanciasAEscribir,utf8_encode($fila['nombre']));
    // echo "<script>console.log('$instanciasAEscribir[$numlista]')</script>";
  // }
}
  echo "<script>console.log('EStoy en el php')</script>";
  echo "<center>";
	echo '<div class="col-sm-8">';
	echo '<table class="table table-hover">';
	echo '<thead><tr><td>No.</td><td>INSTANCIA</td><td>WORD</td></tr></thead>';
//  $data = file_get_contents("../data/instancias.txt");
  // $data = file_get_contents("../data/instancias.txt");
    // $instancias = json_decode($data, true);
    $consultaInstancias = "SELECT * from instancias";
  	$instancias = $conectar->query($consultaInstancias);
  foreach ($instancias as $fila)
	{
    $numlista++;
		echo '<tr><td>'.$numlista.'</td>';
		echo '<td>'.utf8_encode($fila['nombre']).'</td>';
    if (in_array(utf8_encode($fila['nombre']),$instanciasAEscribir)) {
  	echo '<td><a href="html_to_word/planesInstancia.php?id='.(     utf8_encode( $fila['nombre']))           .'">ver</a></td></tr>';
    }
  }

	echo "</table>";
  echo "</div>";
  echo "<a href='../reportes/index.html'> <img src='../img/volver.png' alt=''>  </a>";
    echo "</center>";
?>

</div>
</body>
</html>
