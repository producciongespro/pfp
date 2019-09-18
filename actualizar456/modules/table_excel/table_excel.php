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
    <link rel="stylesheet" href="../../vendor/jquery-ui-1.12.1.custom/jquery-ui.min.css">
    <link rel="stylesheet" href="../../vendor/jquery-ui-1.12.1.custom/jquery-ui.theme.min.css">
    <link rel="stylesheet" href="../../css/master.css">
    

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/alertify/alertify.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>
    <script src="../../vendor/jquery-ui-1.12.1.custom/jquery-ui.js"></script>
    
    <script src="../../script/model.js"></script>
    <script src="../../script/view.js"></script>
    <script src="../../script/main.js"></script>
    <script src="./js/table_excel.js"></script>

    <style>
      .botonExcel {
        cursor: pointer;
      }
    
    </style>
  
</head>
<body>


    <div class="jumbotron">
       <h1> <span class="spnVersion" ></span> - Sedes por actividad PFP - </h1>
    </div>
    <br>
    <div class="row">
      <div class="col-12 text-center">
      <a href="../../../reportes/index.html"> Ir a menú </a>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-10 text-right">
        <div class="form-group">
          <label for="txtInstancia">  Digite el nombre de la Instancia: </label>
          <input type="text" id="txtInstancia" >
     
        </div>       
      </div>
      <div class="col-2" >
      <button id="btnBuscar" class="btn btn-success" > Buscar </button>
      </div>
    </div>

<br>
<div class="row">
  <div class="col-12 text-center">
  <form action="ficheroExcel.php" method="post" target="_blank" id="FormularioExportacion">
<p>Exportar a Excel  <img src="export_to_excel.gif" class="botonExcel" /></p>
<input type="hidden" id="datos_a_enviar" name="datos_a_enviar" />
</form>
  </div>
</div>

<br>

<div class="row">
  <div class="col-6 text-right">
    Instancia seleccionada: <span id="spnIntancia" ></span>
  </div>
  <div class="col-6 text-left">
    Cantidad de sedes por actividad: <span id="spnCantActividades" ></span>
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


  


    
</body>
</html>