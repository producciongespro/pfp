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
    <title>Objetivos</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../../css/estilos.css">

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/alertify/alertify.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>    

    <script src="../../js/model/model.js"></script>
    <script src="../../js/views/v_objetivos.js"></script>
    <script src="../../js/controller/c_objetivos.js"></script>    
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
                AGREGAR BRECHA FORMATIVA Y OBJETIVO ESTRATÉGICO
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
            <div class="col-sm-12">
                    <div class="form-group">
                            <label for="txtNeed">Escriba la brecha formativa:</label>
                            <textarea  class="form-control" id="txtNeed" rows="3" placeholder="La brecha formativa debe ser fundamento para el objetivo." ></textarea>
                    </div>                                                                          
            </div>   
        </div>
  
        <br>

        <div class="row">
            <div class="col-sm-12">
                    <div class="form-group">
                            <label for="txtObj">Escriba el objetivo estratégico:</label>
                            <textarea class="form-control" id="txtObj" rows="3" placeholder="El objetivo debe estar relacionado con la brecha formativa." ></textarea>
                    </div>                                                                          
            </div>   
        </div>
        <div class="row">
          <div class="col-sm-12 text-right">
              <button type="button" class="btn btn-secondary" id="btnEnviarObjetivos">Enviar</button> 
          </div>
        </div>
        <hr>
     

        <div class="row">
            <h5>Objetivos y brechas formativas agregadas</h5>            
        </div>
        <div class="row">
            <div class="col-sm-12" id="contTable">
     
            </div>
        </div>
    </div>


     <!-- Modal -->
  <div class="modal fade" id="modalObj" tabindex="-1" role="dialog" aria-labelledby="modalObjTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">  Edición de brechas formativas y Objetivos  </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="mdlBody"> 

                    <div class="row">
                            <div class="col-sm-12">
                                    <div class="form-group">
                                            <label for="txtNeedEdit">Brecha formativa:</label>
                                            <textarea  class="form-control" id="txtNeedEdit" rows="3" ></textarea>
                                    </div>                                                                          
                            </div>   
                        </div>
                
                    <div class="row">
                            <div class="col-sm-12">
                                    <div class="form-group">
                                            <label for="txtObjEdit">Objetivo estretégico:</label>
                                            <textarea class="form-control" id="txtObjEdit" rows="3" ></textarea>
                                    </div>                                                                          
                            </div>   
                    </div>
                    
            </div>
            <div class="modal-footer" id="mdFoot">
                    <button  id="btnUpdate" class="btn btn-success" > Guardar Cambios </button>

            </div>
          </div>
        </div>
      </div>    
</body>
</html>