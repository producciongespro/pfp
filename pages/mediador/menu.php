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
    <title>Menú</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../../css/estilos.css">

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>

    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>

    <script src="../../vendor/alertify/alertify.min.js"></script>
    <script src="../../js/model/model.js"></script>
    <script src="../../js/views/v_menu.js"></script>
    <script src="../../js/controller/c_menu.js"></script>
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
                        MENÚ
                    </div>
                </div>
                <div class="col-sm-6">
                        <div class="alert alert-primary alert-custom" id="infoUser" role="alert">                           
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="alert alert-secondary alert-custom" role="alert">
                        <a href="#" id="lnkCloseSession">
                                Cerrar Sesión
                        </a>
                    </div>
                </div>
          
              </div>

    <div class="container">

        <div class="row">
            <div class="col-9"></div>            
            <div class="col-3 notificacion-info" id="avisoMenu" ></div>
        </div>

    

        <div class="row">                 

                <div class="col-6 col-menu-botonera">  
                        <button  type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnJustificacion" disabled> Justificación general</button>                        
                        <button type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnObjetivos"  disabled > Brechas formativas y objetivos</button>                        
                        <button type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnLimitaciones" disabled> Limitaciones </button>                        
                        <button type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnArchivoPfp"  disabled>Informe DNFP</button>                    
                </div>

                <div class="col-6 col-menu-botonera">                   
                        <button type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnActividad"  disabled >Agregar actividad</button>
                        <button type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnVerPfP" disabled >Actividades del PFP</button>
                        <button type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnAyuda"  >Ayuda</button>
                        <button type="button" class="btn btn-outline-info btn-lg btn-block btn-menu" id="btnAcercaDe" >Acerca de...</button>                         
                </div>                                    
        </div>
    </div>

    <br>



  
  <!-- Modal -->
  <div class="modal fade" id="modalAcercaDe" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">Sistema PFP-IDP V 1.0</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">            
            <strong>Ministerio de Educación Pública</strong> <br>
          Sistema Desarrollado por Departamento de Gestión y Producción de Recursos Tecnológicos. (GESPRO - DRTE) 
          <br> <br>
          Orientaciones técnicas: <br>
          <ul>
              
              <li>Alexander Castro Mena</li>
              <li>Mario Avendaño Arguedas</li>
              <li>Adriana Retana Varela</li>
              <li>Yamilette López Rodríguez</li>
              <li>Álvaro Artavia Medrano</li>
              <li>Ileana Ruiz Rodríguez</li>
          </ul>


          Desarrolladores: 
          <ul>
              <li>Patricia Hernández Conejo</li>
              <li>Oscar Pérez Ramírez</li>
              <li>Luis Chacón Campos</li>
          </ul>
          
        </div>
        <div class="modal-footer">
          
        </div>
      </div>
    </div>
  </div>

    <div class="div-shadow invisible">
        <img class="img-ajax-loading" src="../../img/ajax-loader.gif" alt="Loading">        
    </div>

</body>
</html>