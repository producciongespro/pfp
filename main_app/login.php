<?php

// verifica si la peticiòn es de tipo AJAX
  if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH'])== 'xmlhttprequest'    ) {
    require('conectar.php');
    require('../login/funcs/funcs.php');
    $mysqli = conectarDB();
    sleep(1);
    //creaciòn de la sesiòn:
    session_start();

    // Especifica que tipo de carcateres va a escapar
    $mysqli->set_charset('utf8');

    //real escape es para filtrar los carcateres que van a etrar a la consulta SQL para evita SQL inyection

    $usuario = $mysqli->real_escape_string( $_POST['key']);
    $pas = $mysqli->real_escape_string( $_POST['pass']);
    if ($nueva_consulta = $mysqli->prepare("Select nombre, apellido1, apellido2, correo,  id_instancia, instancia, id_tipo, password From usuarios Where correo = ?")) {
        $nueva_consulta->bind_param('s', $usuario);
        $nueva_consulta->execute();
        $resultado = $nueva_consulta->get_result();
        if ($resultado->num_rows == 1) {
            $datos = $resultado->fetch_assoc();
             $encriptado_db = $datos['password'];
            if ((password_verify($pas, $encriptado_db) AND (isActivo($usuario))))
            {

              $_SESSION['usuario'] = $datos;
                echo json_encode(array('error'=>false,'nombre'=>$datos['nombre'], 'apellido1'=>$datos['apellido1'], 'apellido2'=>$datos['apellido2'], 'correo'=>$datos['correo'], 'tipo'=>$datos['id_tipo'],   'id_instancia'=>$datos['id_instancia'], 'instancia'=>$datos['instancia']));}
				
               else {
                    echo json_encode(array('error'=>true));
                    }
        }
        else {
              echo json_encode(array('error'=>true));
        }
        $nueva_consulta->close();
      }
  }
$mysqli->close();
?>
