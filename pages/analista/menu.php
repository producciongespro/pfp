<?php
  session_start();
  if (isset($_SESSION['usuario'])) {
   
          if ($_SESSION['usuario']['id_tipo'] == '1') {
            header('Location: ../mediador/menu.php');
          };

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
    <title>Sistema PFP - Menú asesor revisor  </title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../../css/estilos.css">

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js "></script>
    <script src="../../vendor/alertify/alertify.min.js"></script>
    <script src="../../vendor/moment/moment.min.js"></script>
    <script src="../../vendor/moment/moment-with-locales.min.js"></script>
    <script src="../../js/model/model.js"></script>
    <script src="../../js_analista/views/v_menu.js"></script>
    <script src="../../js_analista/controller/c_menu.js"></script>
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
                <br>
                <a href="../../reportes/">   <b>  Ir a Reportes </b>
                </a>
           
              </div>
              <br>
       

    <div class="container">
            <div class="row">
            <div class="col" id="colTable" ></div>
            </div>
    </div>



<!-- Modal Justificacion-->
<div class="modal fade" id="mdljustificaciones" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">  Justificación de <span id="spnInstancia" ></span>  </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <textarea  class="form-control"  id="txtJustificacion" cols="10" rows="10"></textarea>
      </div>
      <div class="modal-footer">
      <div class="row">         
            <div class="col-6">
            <i class="fas fa-times-circle fa-status" data-tabla="justificaciones" data-campo="e_justificaciones" data-condicion="Rechazado" ></i>
            </div>
            <div class="col-6">
            <i class="fas fa-check-circle  fa-status" data-tabla="justificaciones" data-campo="e_justificaciones" data-condicion="Aceptado" ></i>
            </div>          
        </div>
      </div>
    </div>
  </div>
</div>




<!-- Modal Archivo  PDF-->
<div class="modal fade" id="mdlarchivos_enviados" tabindex="-1" role="dialog" aria-labelledby="mdlFileLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mdlFileLabel">  Archivo DNFP <span id="spnArchivo" ></span>  </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="mdlBodyArchivo" >
        
      </div>
      <div class="modal-footer">
      <div class="row">         
            <div class="col-6">
            <i class="fas fa-times-circle fa-status"  data-tabla="archivos_enviados"  data-campo="e_archivo" data-condicion="Rechazado" ></i>
            </div>
            <div class="col-6">
            <i class="fas fa-check-circle  fa-status"  data-tabla="archivos_enviados"  data-campo="e_archivo" data-condicion="Aceptado" ></i>
            </div>          
        </div>

    
      </div>
    </div>
  </div>
</div>




<!-- Modal limitaciones-->
<div class="modal fade" id="mdllimitaciones" tabindex="-1" role="dialog" aria-labelledby="lblLimitaciones" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="lblLimitaciones">  Limitaciones: </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h6>Limitaciones: </h6>
        <textarea  class="form-control"  id="txtInterna" cols="10" rows="16"></textarea>               
        
      </div>
      <div class="modal-footer">
      <div class="row">         
            <div class="col-6">
            <i class="fas fa-times-circle fa-status" data-tabla="limitaciones"  data-campo="e_limitaciones" data-condicion="Rechazado" ></i>
            </div>
            <div class="col-6">
            <i class="fas fa-check-circle  fa-status" data-tabla="limitaciones"  data-campo="e_limitaciones" data-condicion="Aceptado" ></i>
            </div>          
        </div>
      </div>
    </div>
  </div>
</div>



<!-- Modal Unlock-->
<div class="modal fade" id="mdlUnlock" tabindex="-1" role="dialog" aria-labelledby="lblmdlUnlock" aria-hidden="true">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="lblmdlUnlock">  Desbloquear PFP como  </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="btn-desbloquear alert alert-success alert-unlock cursor-pointer" data-idestado="5">
              <i class="far fa-arrow-alt-circle-right"></i>  PFP Avalado.
        </div>
        <div class="btn-desbloquear alert alert-danger alert-unlock cursor-pointer" data-idestado="4" >
              <i class="far fa-arrow-alt-circle-right"></i>  Desbloquear para corregir.
        </div>
       
      </div>
      <div class="modal-footer">
 
      </div>
    </div>
  </div>
</div>



<!-- Modal Objetivos-->
<div class="modal fade" id="mdlObjetivos" tabindex="-1" role="dialog" aria-labelledby="lblObjtivos" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="lblObjtivos">  Objetivos de la instancia:   
            <span id="spnNombreInstancia" ></span>
         </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body"  id="modalBodyObjetivos" > 
            
      
      
      
      </div>
   
    </div>
  </div>
</div>

    
    <div class="div-shadow invisible">
        <img class="img-ajax-loading" src="../../img/ajax-loader.gif" alt="Loading">
    </div>
     
</body>
</html>