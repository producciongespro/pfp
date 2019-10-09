<?php
  session_start();
  if (isset($_SESSION['usuario'])) {   
        if ($_SESSION['usuario']['tipo']=='1') {
          header('Location: ./pages/mediador/menu.php');
        };
        if ($_SESSION['usuario']['tipo']=='2') {
          header('Location: ./pages/analista/menu.php');
        }
      };
?>



<!DOCTYPE html>
<html lang="es">
<head>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129164311-14"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-129164311-14');
</script>

    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Login</title>
    <link rel="icon" href="./img/notebook.png" type="image/png" > 

    <link rel="stylesheet" href="vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="css/estilos.css">

    <script src="vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="vendor/alertify/alertify.min.js"></script>
    <script src="js/model/model.js"></script>
    <script src="js/controller/c_login.js"></script>
</head>
<body>
    <div class="jumbotron jumbo-encabezado">
        <div class="row">
            <div class="col-sm-2">
                <img src="./img/mep_idp.png" alt="Logo MEP - IDP" class="img-fluid">
            </div>
            <div class="col-sm-8 text-center">
                    <img src="./img/pfp.png" alt="Logo MEP - IDP" class="logo-banner">
            </div>
            <div class="col-sm-2"></div>
        </div>                  
    </div>

  <div class="container">
    <div class="row"></div>
    <div class="row">
      <div class="col-sm-4 col-img-pfp"></div>
      <div class="col-sm-4 col-login">
          <form action="" id="formLg" >
              <div class="form-group">
                <label for="txtUsuario">Correo electrónico: </label>
                <input type="email" class="form-control" id="txtUsuario"  name="key"  required placeholder="Escriba su correo electrónico.">                
              </div>
              <div class="form-group">
                <label for="txtPass">Contraseña</label>
                <input type="password" class="form-control"  id="txtPass"  name="pass" required  placeholder= "Escriba la contraseña." >
              </div>              
              
                <input type="submit" class="btn btn-primary" id="btnLogin" value="Acceder" ></input>
              <a id="enlace" style="float:right; font-size:14px" href="login/recupera.php">Olvidé mi contraseña</a>
            </form>
      </div>
      <div class="col-sm-4 col-img-pfp"></div>      
    </div>
<br>
    <div class="row">
    <div class="col-2"></div>
          <div class="col-8 col-info">
          El sistema PFP se diseñó como apoyo para facilitar la elaboración del plan de formación de cada unidad gestora. Los usuarios de este sistema son los funcionarios que cada unidad tiene asignados para esta tarea.
          </div>
          <div class="col-2"></div>
    </div>



  </div>
</body>
</html>