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
    <script src="../../js_analista/views/v_detalle_actividad.js"></script>
    <script src="../../js_analista/controller/c_detalle_actividad.js"></script>
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
                EDITAR ACTIVIDAD PFP
            </div>
        </div>
        <div class="col-sm-6">
                <div class="alert alert-primary alert-custom" id="infoUser" role="alert">
                   
                </div>
        </div>
        <div class="col-sm-2">
            <div class="alert alert-secondary alert-custom" role="alert">
                    <a href="./lista_pfp.php">Ir a lista</a>
            </div>
        </div>          
   </div>


    <br>
       
          <div class="container container-form">
            

            
        <div class="row row-obj bg-info">
               
                        <div class="col-10  ">
                                <div class="form-group">
                                        <label for="alrObj"> <strong>1 - </strong>Objetivo estratégico:</label>
                                        <div id="alrObj" class="alert alert-dark" role="alert"> objetivo</div>
                                </div>
                        </div>
                        <div class="col-2 ">
                                <div class="row">                       
                                   <i class="fas fa-edit btn-edit-obj-nece"  id="btnModalObj" title="Editar objetivos y brechas formativas." ></i>                                   
                                </div>
                        
                        </div>
          
                
        </div>

        <div class="row row-nec bg-info">
            <div class="col-10">
                    <div class="form-group ">
                        <label for="alrNeed"><strong>2 -</strong> Brechas formativa a la que responde el objetivo:</label>
                        <div id="alrNeed" class="alert alert-dark" role="alert">Brecha formativa </div>
                    </div>
            </div>
            <div class="col-2 bg-info">
                <div class="row">         
                        <div class="col-6">
                        <i class="fas fa-times-circle fa-status"    target="e_objetivos"  status="Rechazado" ></i>
                        </div>
                        <div class="col-6">
                        <i class="fas fa-check-circle  fa-status"   target="e_objetivos" status="Aprobado" ></i>
                        </div>          
                    </div>
            </div>
            
        </div>
       
            <hr>

       <div class="row">
           <div class="col-3">
                <div class="form-group">
                    <label for="selTipo">  <strong>3 - </strong> Actividad:  </label>
                        <select class="form-control form-selector" id="selTipo">
                                <option > Dentro  </option>
                                <option > Fuera  </option>
                            </select>
                </div>
           </div>

           <div class="col-1">
                <div class="col-2">                       
                        <i class="far fa-save  btn-edit-activity item-edit-inactivo"  edit="false" field="tipo"  id="btnselTipo" ></i>
                </div>
           </div>



           <div class="col-2">
                   <br>
                <div class="row">         
                        <div class="col-6">
                        <i class="fas fa-times-circle fa-status" target="e_tipo" status="Rechazado" ></i>
                        </div>
                        <div class="col-6">
                        <i class="fas fa-check-circle  fa-status" target="e_tipo" status="Aprobado" ></i>
                        </div>          
                </div>
           </div>
           <div class="col-6"></div>
       </div>

       <div class="row">
           <div class="col-8">
                <div class="form-group">
                        <label for="txtNombre"><strong>4 -</strong> Nombre de la actividad:</label> 
                        <input type="text"   class="form-control form-selector " id="txtNombre"  >
                    </div>
           </div>
           <div class="col-1">                       
            <i class="far fa-save  btn-edit-activity item-edit-inactivo"  edit="false" field="nombre_actividad"  id="btntxtNombre" ></i>
           </div>

           <div class="col-3">
                   <br>
                        <div class="row">         
                                        <div class="col-6">
                                        <i class="fas fa-times-circle fa-status" target="e_nombre" status="Rechazado" ></i>
                                        </div>
                                        <div class="col-6 ">
                                        <i class="fas fa-check-circle  fa-status" target="e_nombre" status="Aprobado" ></i>
                                        </div>          
                                </div>
           </div>
       </div>

            <hr>

            <div class="row">
                <div class="col">
                        <div class="form-group">
                                <label for="selArea"><strong>5 -</strong> Área estratégica:</label>
                                <select class="form-control form-selector" id="selArea">
                                    
                                        <option>Prácticas Docentes</option>
                                        <option>Gestión de Centros Educativos</option>
                                        <option>Gestión Pública Educativa </option>
                                </select>
                            </div>
                </div>
                <div class="col">                       
                    <i class="far fa-save  btn-edit-activity  item-edit-inactivo" edit="false"  field="area" id="btnselArea" ></i>
                </div>
                <div class="col">
                        <br>
                                <div class="row">         
                                                <div class="col-6">
                                                <i class="fas fa-times-circle fa-status" target="e_area" status="Rechazado" ></i>
                                                </div>
                                                <div class="col-6">
                                                <i class="fas fa-check-circle  fa-status" target="e_area" status="Aprobado" ></i>
                                                </div>          
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
                    <i class="far fa-save btn-edit-activity item-edit-inactivo" edit="false" field="estrato" id="btnselEstrato" ></i>
                </div>

                <div class="col">
                                <br>                                                        
                                <div class="row"> 
                                    <div class="col-6">
                                                <i class="fas fa-times-circle fa-status" target="e_estrato" status="Rechazado" ></i>
                                                </div>
                                                <div class="col-6">
                                                <i class="fas fa-check-circle  fa-status" target="e_estrato" status="Aprobado" ></i>
                                                </div>          
                                        </div>
                </div>

               

           

            </div>
            <hr>

            <div class="row">
                <div class="col">
                        <div class="form-group">
                                <label for="selModalidad"><strong>7 -</strong> Modalidad:</label>
                                <select class="form-control form-selector" id="selModalidad"  >
                                        
                                        <option>Aprovechamiento</option>
                                        <option>Participación</option>                                                                      
                                        <option>Asistencia</option>                                                                      
                                        
                                </select>
                        </div>
                </div>
                <div class="col">                       
                    <i class="far fa-save  btn-edit-activity  item-edit-inactivo" edit="false" field="modalidad"  id="btnselModalidad" ></i>
                </div>

                <div class="col">
                        <br>
                                <div class="row">         
                                                <div class="col-6">
                                                <i class="fas fa-times-circle fa-status" target="e_modalidad" status="Rechazado" ></i>
                                                </div>
                                                <div class="col-6">
                                                <i class="fas fa-check-circle  fa-status" target="e_modalidad" status="Aprobado" ></i>
                                                </div>          
                                        </div>
                </div>

                <div class="col">
                                <div class="form-group">
                                        <label for="selEstrategia"><strong>8 -</strong> Estrategia metodológica:</label>
                                        <select class="form-control form-selector" id="selEstrategia">                                                
                                        <option>Presencial</option>
                                                <option class="estrategia-no-presencial">No presencial: A distancia</option>
                                                <option class="estrategia-no-presencial">No presencial: Autoformación</option>
                                                <option class="estrategia-no-presencial">No presencial: Virtual</option>                                                
                                                <option class="estrategia-no-presencial" >Mixta (presencial/virtual)  </option>
                                                <option class="estrategia-no-presencial" >Mixta (presencial/a distancia)  </option>
                                        </select>
                                </div>                            
                </div>
                        <div class="col">                       
                            <i class="far fa-save btn-edit-activity item-edit-inactivo" edit="false" field="estrategia" id="btnselEstrategia" ></i>
                        </div>

                        <div class="col">
                                        <div class="row">         
                                                        <div class="col-6">
                                                        <i class="fas fa-times-circle fa-status" target="e_estrategia" status="Rechazado" ></i>
                                                        </div>
                                                        <div class="col-6">
                                                        <i class="fas fa-check-circle  fa-status" target="e_estrategia" status="Aprobado" ></i>
                                                        </div>          
                                                </div>
                        </div>



            </div>
            <hr>

            <div class="row">               
                
                        <div class="col">
                                <div class="form-group"  id="formGroupTipo"  >
                                    <label for='selTipoActividad'> <strong> 9 - </strong> Clase de actividad:</label>
                                    <select  class='form-control form-selector' id='selTipoActividad'>                                        
                                        <option > Curso </option>
                                        <option > Taller </option>
                                        <option > Seminario </option>
                                        <option> Charla </option> 
                                        <option> Asesoramiento </option> 
                                        <option> Taller </option> 
                                        <option> Seminario </option>
                                        <option> Conferencia </option>
                                        <option> Encuentro </option>
                                        <option> Jornada de Trabajo </option>
                                        <option> Conversatorio </option>
                                        <option> Telepresencia </option>
                                </select>
                                </div>
                        </div>

                        <div class="col">                       
                            <i class="far fa-save  btn-edit-activity item-edit-inactivo" edit="false" field="tipo_actividad" id="btnselTipoActividad" ></i>
                        </div>

                        <div class="col">
                                <br>
                                        <div class="row">         
                                                        <div class="col-6">
                                                        <i class="fas fa-times-circle fa-status" target="e_tipo_actividad" status="Rechazado" ></i>
                                                        </div>
                                                        <div class="col-6">
                                                        <i class="fas fa-check-circle  fa-status" target="e_tipo_actividad" status="Aprobado" ></i>
                                                        </div>          
                                                </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                 <label for="txtDuracion"> <strong>10 -</strong> Duración: </label>
                                 <input type="number" min="1"  class="form-control form-selector" id="txtDuracion" >
                            </div> 
                    </div> 
                    <div class="col">                       
                        <i class="far fa-save btn-edit-activity item-edit-inactivo" edit="false" field="duracion"  id="btntxtDuracion" ></i>
                    </div>

                    <div class="col">
                            <br>
                                <div class="row">         
                                                <div class="col-6">
                                                <i class="fas fa-times-circle fa-status" target="e_duracion" status="Rechazado" ></i>
                                                </div>
                                                <div class="col-6">
                                                <i class="fas fa-check-circle  fa-status" target="e_duracion" status="Aprobado" ></i>
                                                </div>          
                                        </div>
                </div>


            </div> 
            <hr>
            <div class="row">
                <div class="col-10">
                        <div class="alert alert-primary" role="alert">
                                <strong>11 - </strong> Grupos por regional donde se impartirá la actividad:
                                &nbsp;  &nbsp;   &nbsp;  
                                <i class="far fa-save  item-edit-inactivo" edit="false" field="sede" id="btnJsonGrupos" ></i>
                        </div>
                </div>

                <div class="col-2">
                        <br>
                                <div class="row">         
                                                <div class="col-6">
                                                <i class="fas fa-times-circle fa-status" target="e_sede" status="Rechazado" ></i>
                                                </div>
                                                <div class="col-6">
                                                <i class="fas fa-check-circle  fa-status" target="e_sede" status="Aprobado" ></i>
                                                </div>          
                                        </div>
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
                             <label for="nmbGrupos"> Cantidad de grupos:</label>
                             <input type="number" min="1" class="form-control" id="nmbGrupos" >
                    </div>
                </div>

                <div class="col">
                    <div class="form-group">
                             <label for="nmbCantParticipantes"> Cantidad de participantes:</label>
                             <input type="number" min="1" class="form-control" id="nmbCantParticipantes" >
                    </div>
                </div>

                <div class="col">
                    <button class="btn btn-secondary  btn-block" id="btnAgregarGrupo"> Agregar </button>
                </div>


            </div>      

    
            <hr>
             
                 <!-- fin de fila -->

                 <!-- Inicio de la fila de tabla -->
            <div class="row">
                <div class="col-sm-12"  id="colTableGroupos"  >
                        
                </div>
            </div>

            <hr>

                    <div class="row "  >                        
                        <div class="col">
                            <div class="form-group"> 
                                    <label for="nmbCosto"><strong>12 -</strong> Costo de la actividad (colones):  </label>                              
                                <input type="number" class="form-control form-selector" id="nmbCosto" rows="2" >
                            </div>
                        </div>
                        <div class="col">                       
                            <i class="far fa-save btn-edit-activity item-edit-inactivo" edit="false" field="costo"  id="btnnmbCosto" ></i>
                        </div>
                        <div class="col">
                                <br>
                                        <div class="row">         
                                                        <div class="col-6">
                                                        <i class="fas fa-times-circle fa-status" target="e_costo" status="Rechazado" ></i>
                                                        </div>
                                                        <div class="col-6">
                                                        <i class="fas fa-check-circle  fa-status" target="e_costo" status="Aprobado" ></i>
                                                        </div>          
                                                </div>
                        </div>
                    </div>
                    

          </div> 
          <br><br><br>


           <!-- Modal Objetivo -->
  <div class="modal fade" id="modalObj" tabindex="-1" role="dialog" aria-labelledby="modalObjLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" >Edición de objetivos y brechas formativas:</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="mdlBody"> 
            <small>Objetivo Estratégico:</small>
            <textarea  class="form-control" id="txtObj" cols="20" rows="5"></textarea>
            <small>brecha formativa:</small>
            <textarea  class="form-control" id="txtNec" cols="20" rows="5"></textarea>
                
        </div>
        <div class="modal-footer">
            <button class="btn btn-success" id="btnActualizarObj" > Actualizar </button>
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





</body>
</html>