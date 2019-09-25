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
    <title>Agregar actividad</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/alertify.min.css">
    <link rel="stylesheet" href="../../vendor/alertify/css/themes/default.min.css">
    <link rel="stylesheet" href="../../css/estilos.css">

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>
    <script src="../../vendor/alertify/alertify.min.js"></script>


    <script src="../../js/model/model.js"></script>
    <script src="../../js/views/v_actividad_pfp.js"></script>
    <script src="../../js/controller/c_actividad_pfp.js"></script>
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


    <div class="row ">
        <div class="col-sm-4">
            <div class="alert alert-primary alert-custom" role="alert">
                AGREGAR ACTIVIDAD AL PFP
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

          <div class="container container-form">



            <div class="form-group">
                <label for="alrObj"> <strong>1 - </strong>Objetivo estratégico:</label>
                <div id="alrObj" class="alert alert-dark alert-click" role="alert">Clic para seleccionar el objetivo</div>
            </div>

            <div class="form-group">
                <label for="alrNeed"><strong>2 -</strong> Brecha educativa a la que responde el objetivo:</label>
                <div id="alrNeed" class="alert alert-dark" role="alert">Brecha...</div>
            </div>



            <div class="form-group">
                    <div class="row row-radios" >
                            <div class="col">
                                <strong>3 - </strong> Actividad:
                            </div>
                            <div class="col">
                                    <div class="form-check">
                                            <input class="form-check-input" type="radio" name="tipo" id="rdoAdentro" value="Dentro" >
                                            <label class="form-check-label" for="rdoAdentro">
                                              Dentro
                                            </label>
                                    </div>
                            </div>
                            <div class="col">
                                    <div class="form-check">
                                            <input class="form-check-input" type="radio" name="tipo" id="rdoAfuera" value="Fuera">
                                            <label class="form-check-label" for="rdoAfuera">
                                              Fuera
                                            </label>
                                    </div>
                            </div>
                        </div>
            </div>

       <div class="row">
           <div class="col">
                <div class="form-group">
                        <label for="txtNombre"><strong>4 -</strong> Nombre de la actividad:</label>
                        <input type="text"  disabled="true" class="form-control" id="txtNombre" placeholder="Nombre de la actividad. (Debe primero seleccionar el objetivo)"  >
                    </div>
           </div>
       </div>

            <hr>

            <div class="row">
                <div class="col">
                        <div class="form-group">
                                <label for="selArea"><strong>5 -</strong> Área estratégica de formación permanente:</label>
                                <select class="form-control" id="selArea">
                                    <option disabled selected>Seleccione un área</option>
                                    <option>Prácticas Docentes</option>
                                    <option>Gestión de Centros Educativos</option>
                                    <option>Gestión Pública Educativa </option>
                                </select>
                            </div>
                </div>
                <div class="col">
                    <div class="row">
                            <label for="selEstrato"><strong>6 -</strong> Estrato:</label>
                    </div>
                    <div class="row">
                        <button id="btnEstrato" class="btn btn-light"> Clic para seleccionar/ver los estratos </button>
                    </div>
              
                </div>
                <div class="col">
                        <div class="form-group" id="frmModalidad"  >
                                <label for="selModalidad"><strong>7 -</strong> Modalidad:</label>
                                <br>
                                <small>Debe seleccionar primero el tipo de actividad  (Dentro-Fuera)  (item 3) </small>
                           
                        </div>
                </div>
            </div>

            <div class="row">
                        <div class="col">
                                <div class="form-group">
                                        <label for="selEstrategia"><strong>8 -</strong> Estrategia metodológica:</label>
                                        <select class="form-control" id="selEstrategia">
                                                <option class="estrategia-no-presencial"  disabled selected >Seleccione una estrategia</option>
                                                <option>Presencial</option>
                                                <option class="estrategia-no-presencial">Virtual</option>
                                                <option class="estrategia-no-presencial">A distancia</option>
                                                <option class="estrategia-no-presencial" >Mixta (presencial/virtual)  </option>
                                                <option class="estrategia-no-presencial" >Mixta (presencial/a distancia)  </option>
                                        </select>
                                </div>
                        </div>
                        <div class="col">
                                <div class="form-group"  id="formGroupTipo"  >                                        
                                        <label for=""> <strong>9 -</strong> Clase de actividad </label>
                                        <br>
                                        <small>Debe seleccionar primero la modalidad  (item 7) </small>
                                </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                 <label for="txtDuracion"> <strong>10 -</strong> Duración de la actividad: (horas)  </label>
                                 <input type="number" min="1"  class="form-control" id="txtDuracion" >
                            </div>
                    </div>
            </div>


            <hr>
            <!--Mòdulo de agregar registros a la tabla -->
            <div class="row">
                    <div class="alert alert-primary" role="alert">
                            <strong>11 - </strong> Grupos por regional donde se impartirá la actividad:
                    </div>
            </div>

            <div class="row">
                    <div class="col">
                        <div class="form-group" id="gorupSelectorInstance"></div>

                    </div>
                    <div class="col"><div class="form-group"><label for="selMesIni">Mes de inicio:</label>        <select class="form-control" id="selMesIni"><option selected="" disabled=""> Seleccione el mes:  </option><option>  Enero  </option><option>  Febrero  </option><option>  Marzo  </option><option>  Abril  </option><option>  Mayo  </option><option>  Junio  </option><option>  Julio  </option><option>  Agosto  </option><option>  Setiembre  </option><option>  Octubre  </option><option>  Noviembre  </option><option>  Diciembre  </option> </select></div>
                </div>

                <div class="col"><div class="form-group"><label for="selMesFin">Mes de finalización:</label>        <select class="form-control" id="selMesFin"><option selected="" disabled=""> Seleccione el mes:  </option><option>  Enero  </option><option>  Febrero  </option><option>  Marzo  </option><option>  Abril  </option><option>  Mayo  </option><option>  Junio  </option><option>  Julio  </option><option>  Agosto  </option><option>  Setiembre  </option><option>  Octubre  </option><option>  Noviembre  </option><option>  Diciembre  </option> </select></div></div>

                <div class="col">
                    <div class="form-group">
                             <label for="txtCantidad"> Cantidad de grupos:</label>
                             <input type="number" min="1" class="form-control" id="nmbGrupos" >
                    </div>
                </div>

                <div class="col">
                    <button class="btn btn-secondary  btn-block" id="btnAgregarGrupo"> Agregar </button>
                </div>


            </div>



                 <!-- fin de fila -->

                 <!-- Inicio de la fila de tabla -->
            <div class="row">
                <div class="col-sm-12"  id="colTableGroupos"  >

                </div>
            </div>

            <hr>

                    <div class="row  item-invisible " id="rowCosto"  >
                        <div class="col-sm-3 " >
                            <label for="nmbCosto"><strong>12 -</strong> Costo de la actividad (colones):  </label>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">

                                <input type="number" class="form-control" id="nmbCosto" rows="3" >
                            </div>
                        </div>
                        <div class="col-sm-6"></div>
                    </div>
                    <br>

                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <button class="btn btn-primary" id="btnEnviarActividad"> Agregar actividad al PFP</button>
                        </div>
                    </div>




          </div>
<br>

           <!-- Modal Objetivo -->
  <div class="modal fade" id="modalObj" tabindex="-1" role="dialog" aria-labelledby="modalObjLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalObjLabel">Haga clic en el objetivo que desea seleccionar:</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="mdlBody">

        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>



  <!--modal estratos-->
  <div class="modal fade" id="modalEst" tabindex="-1" role="dialog" aria-labelledby="modalEstLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalEstLabel">Seleccione uno o varios estratos:</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="mdlBodyEst">

                    <div class="row">
                        <div class="col">
                                <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input form-checkbox" estrato="Administrativo docente jefatura" id="chk1">
                                        <label class="custom-control-label" for="chk1">Administrativo docente jefatura</label>
                                </div>
                        </div>
                        <div class="col">
                                <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input form-checkbox" estrato="Artístico jefatura" id="chk2">
                                        <label class="custom-control-label" for="chk2">Artístico jefatura</label>
                                </div>                            
                        </div>
                        <div class="col">
                                <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input form-checkbox" estrato="Artístico ejecutor" id="chk3">
                                        <label class="custom-control-label" for="chk3">Artístico ejecutor</label>
                                </div>                            
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                            <div class="col">
                                    <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input form-checkbox" estrato="Calificado" id="chk4">
                                            <label class="custom-control-label" for="chk4">Calificado</label>
                                    </div>
                            </div>
                            <div class="col">
                                    <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input form-checkbox"  estrato="Técnico"  id="chk5">
                                            <label class="custom-control-label" for="chk5">Técnico</label>
                                    </div>                            
                            </div>
                            <div class="col">
                                    <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input form-checkbox"  estrato="Profesional jefatura"  id="chk6">
                                            <label class="custom-control-label" for="chk6">Profesional jefatura</label>
                                    </div>                            
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                                <div class="col">
                                        <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input form-checkbox" estrato="Profesional ejecutor" id="chk7">
                                                <label class="custom-control-label" for="chk7">Profesional ejecutor</label>
                                        </div>
                                </div>
                                <div class="col">
                                        <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input form-checkbox"  estrato="Técnico docente jefatura"  id="chk8">
                                                <label class="custom-control-label" for="chk8">Técnico docente jefatura</label>
                                        </div>                            
                                </div>
                                <div class="col">
                                        <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input form-checkbox"  estrato="Docente"  id="chk9">
                                                <label class="custom-control-label" for="chk9">Docente</label>
                                        </div>                            
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                    <div class="col">
                                            <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input form-checkbox" estrato="Técnico docente ejecutor" id="chk10">
                                                    <label class="custom-control-label" for="chk10">Técnico docente ejecutor</label>
                                            </div>
                                    </div>
                                    <div class="col">
                                            <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input form-checkbox"  estrato="Administrativo docente ejecutor"  id="chk11">
                                                    <label class="custom-control-label" for="chk11">Administrativo docente ejecutor</label>
                                            </div>                            
                                    </div>
                                    <div class="col">
                                            <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input form-checkbox"  estrato="Gerentes"  id="chk12">
                                                    <label class="custom-control-label" for="chk12">Gerentes</label>
                                            </div>                            
                                    </div>
                                </div>



                    
    
            </div>
            <div class="modal-footer">
                    <button type="button"  id="btnGuardarEstratos" class="btn btn-primary">Guardar selección</button>
            </div>
          </div>
        </div>
      </div>

        <div class="div-shadow invisible">
                <img class="img-ajax-loading" src="../../img/ajax-loader.gif" alt="Loading">                
        </div>

</body>
</html>
