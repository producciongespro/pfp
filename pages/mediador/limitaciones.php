<?php
  session_start();
  if (isset($_SESSION['usuario'])) {
   
    

      } else {
          header('Location: ../../');
  }
?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Limitaciones</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../../css/estilos.css">

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/alertify/alertify.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>    

    <script src="../../js/model/model.js"></script>  
    <script src="../../js/views/v_limitaciones.js"></script>  
    <script src="../../js/controller/c_limitaciones.js"></script>    
</head>

<body>
    <div class="jumbotron jumbo-encabezado">
        <div class="row">
            <div class="col-sm-2">
                <img src="../../img/mep_idp.png" alt="Logo MEP - IDP" class="img-fluid">
            </div>
            <div class="col-sm-8 text-center">
                    <img src="../../img/pfp.png" alt="Logo MEP - IDP" class="logo-banner">
            </div>
            <div class="col-sm-2"></div>
        </div>                          
    </div>
    <div class="row row-nav">
        <div class="col-sm-4">
            <div class="alert alert-primary alert-custom" role="alert">
                LIMITACIONES
            </div>
        </div>
        <div class="col-sm-6">
                <div class="alert alert-primary alert-custom" id="infoUser" role="alert">
                   
                </div>
        </div>
        <div class="col-sm-2">
            <div class="alert alert-secondary alert-custom" role="alert">
     <a href="./menu.php">Ir a Menú</a>
            </div>
        </div>          
   </div>
   <br>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <div class="form-group">
                    <label for="txtInerna"><strong>Limitación interna:</strong></label>
                    <textarea class="form-control"  id="txtInterna" cols="15" rows="4"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
                <div class="col-sm-10">
                    <div class="form-group">
                        <label for="txtInerna"><strong>Limitación externa:</strong></label>
                        <textarea class="form-control"  id="txtExterna" cols="15" rows="4"></textarea>
                    </div>
                </div>
                <div class="col-sm-2">
                    <i class="item-invisible fas fa-pencil-alt fa-edicion" id="btnActivarEdicion" ></i>
                </div>
        </div>


   





            <div class="row">
                    <div class="col-sm-12 text-right">
                        <input type="button"  class="btn btn-primary"  id="btnEnviarLimitaciones" value="">
                    </div>
            </div>
        
    </div>





         
  
    
</body>
</html>