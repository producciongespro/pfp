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
    <title>Archivo DNFP</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../../css/estilos.css">

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/alertify/alertify.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>
    <script src="../../js/model/model.js"></script>
    <script src="../../js/views/v_dnfp.js"></script>
    <script src="../../js/controller/c_dnfp.js"></script>
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
                        INFORME DNFP
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


           <br><br>
           <div class="container">
               <div class="row">
                   <div class="col text-center">
                        <h4>Informe de Diagnóstico de Necesidades de Formación Permanente</h4>
                   </div>
               </div>
               <div class="row">
                   <div class="col-2"></div>
                   <div class="col-8" id="colFile"  >
                        <div class="row">
                                <p>
                                        <strong>Nota: </strong> El archivo debe estar en PDF y no debe sobrepasar de más de 12 páginas.
                                    </p>
                                    <div class="input-group">
                                            <div class="input-group-prepend">
                                              <span class="input-group-text"></span>
                                            </div>
                                            <div class="custom-file">
                                              <input type="file" class="custom-file-input" id="inputGroupFile01" accept="application/pdf" >
                                              <label id="lblfile1"  class="custom-file-label" for="inputGroupFile01">Seleccione el archivo que enviará</label>
                                            </div>
                                      </div>
                        </div>
                        <br>
                        <div class="row">
                                <div class="col">                      
                                        <div class="form-group">      
                                                <button class="btn btn-primary btn-lg btn-block item-invisible " disabled    id="btnEnviar"> Enviar archivo </button>      
                                        </div>
                                  </div>
                        </div>

                   </div>
                   <div class="col-2"></div>
               </div>
          
           </div>
</body>
</html>