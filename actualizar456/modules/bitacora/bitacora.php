<?php
  session_start();
  if (isset($_SESSION['usuario'])) {
   
          if ($_SESSION['usuario']['id_tipo'] =='1') {
            header('Location: ../mediador/menu.php');
          };

      } else {
          header('Location: ../../');
  }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title class="spnVersion" ></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="shortcut icon" href="../../assets/ico/creative.png" type="image/png">
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.18/r-2.2.2/datatables.min.css"/>
    <link rel="stylesheet" href="../../css/master.css">
    

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/alertify/alertify.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.18/r-2.2.2/datatables.min.js"></script>

    <script src="../../script/model.js"></script>
    <script src="../../script/view.js"></script>
    <script src="../../script/main.js"></script>
    <script src="./js/bitacora.js"></script>
  
</head>
<body>


    <div class="jumbotron">
       <h1> <span class="spnVersion" ></span> - bitácora de eliminaciones -</h1>
    </div>
    <br>
    <div class="row">
      <div class="col-12 text-center">
      <a href="../../../reportes/index.html"> Ir a menú </a>
      </div>
    </div>
    <br>

    <div class="container">

      
        <hr>
        <div class="row">
          <div class="col-12">
            
          </div>
        </div>
        <br>
        <div class="row">
            <div id="visor"  class="col-10 offset-1"></div>
        </div>

          
                  
    </div>

    <div class="div-shadow invisible">    
        <img class="img-ajax-loading" src="../../assets/gif/ajax-loader1.gif" alt="Loading">
    </div>


  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edición</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                    <label for="txtObjetivo"> Objetivo: </label>
                    <textarea  class="form-control"  id="txtObjetivo" cols="30" rows="10"></textarea>
            </div>
            <br>
            <div class="form-group">
                    <label for="txtNecesidad"> Necesidad: </label>
                    <textarea  class="form-control"  id="txtNecesidad" cols="30" rows="10"></textarea>
            </div>
         
        </div>
        <div class="modal-footer">          
          <button type="button" id="btnSave" class="btn btn-primary">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>


    
</body>
</html>