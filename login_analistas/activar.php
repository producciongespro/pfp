<?php

	require 'funcs/conexion.php';
	require 'funcs/funcs.php';

	if(isset($_GET["id"]) AND isset($_GET['val']))
	{

		$idUsuario = $_GET['id'];
		$token = $_GET['val'];

		$mensaje = validaIdToken($idUsuario, $token);
	}
?>

<html>
	<head><meta http-equiv="Content-Type" content="text/html; charset=big5">
		<title>Registro</title>
		<link rel="stylesheet" href="css/bootstrap.min.css" >
		<link rel="stylesheet" href="css/bootstrap-theme.min.css" >
		<script src="js/bootstrap.min.js" ></script>

	</head>

	<body>
		<div class="container">
			<div class="jumbotron">

				<h1><?php echo $mensaje; ?></h1>

				<br />
				<p>Ya su cuenta está activa. Puede acceder al sistema PFP e ingresar sus credenciales:</p>
				<p> 
				    <a href="http://sistemapfp.mep.go.cr/" > Sistema PFP </a> 
				</p>
			</div>
		</div>
	</body>
</html>
