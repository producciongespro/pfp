<?php

	require 'funcs/conexion.php';
	require 'funcs/funcs.php';

	$errors = array();

	if(!empty($_POST))
	{
		$nombre = utf8_decode($_POST['nombre']);
		$apellido1 = utf8_decode($_POST['apellido1']);
		$apellido2 = utf8_decode($_POST['apellido2']);
		$instancia = utf8_decode($_POST['instancia']);
		$email = ($_POST['email']);
		$password = ($_POST['password']);
		$con_password = ($_POST['con_password']);
		$activo = 0;
		$tipo_usuario = 1;
		if(isNull($nombre, $apellido1, $apellido2, $password, $con_password, $email))
		{
			$errors[] = "Debe llenar todos los campos";
			}

 		if(!isMepEmail ($email))
		{
			$errors[] = "Para registrarse debe usar un correo de alguna de las instituciones permitidas (MEP, FOD o Hacienda)";
		}

		if(!isEmail($email))
		{
			$errors[] = "Dirección de correo inválida";
		}

		if(!validaPassword($password, $con_password))
		{
			$errors[] = "Las contraseñas no coinciden";
		}

	/*	if(usuarioExiste($usuario))
		{
			$errors[] = "El nombre de usuario $usuario ya existe";
		}
        */
		if(emailExiste($email))
		{
			$errors[] = "El correo electronico $email ya existe";
		}
		        $totalErrores = count($errors);

		if(count($errors) == 0)
		{


				$pass_hash = hashPassword($password);
				$token = generateToken();

				$registro = registraUsuario($pass_hash, $nombre, $apellido1, $apellido2, $instancia, $email, $activo, $token, $tipo_usuario);

				if($registro > 0 )
				{

					$url = 'http://'.$_SERVER["SERVER_NAME"].'/login/activar.php?id='.$registro.'&val='.$token;

					$asunto = 'Activar Cuenta - Sistema de Usuarios';
					$cuerpo = "Saludos! $nombre: <br /><br />Para continuar con el proceso de registro, es indispensable que acceda el siguiente link: <a href='$url'>Activar Cuenta</a>";

					if(enviarEmail($email, $nombre, $asunto, $cuerpo)){

					echo "<br>  Para terminar el proceso de registro siga las instrucciones que le hemos enviado la direccion de correo electronico indicado anteriormente." ;

				
					exit;

					} else {
						$erros[] = "Error al enviar Email";
					}

					} else {
					$errors[] = "Error al Registrar";
				}



		}

	}
	echo json_encode($errors);
	//echo ($errors);
?>
