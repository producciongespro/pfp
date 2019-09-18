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
    <title>Ayuda</title>
    <link rel="stylesheet" href="../../vendor/bootstrap-4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/estilos.css">

    <script src="../../vendor/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <script src="../../vendor/bootstrap-4.1/js/bootstrap.min.js"></script>
    <script src="../../js/model/model.js"></script>
    <script src="../../js/views/v_ayuda.js"></script>
    <script src="../../js/controller/c_ayuda.js"></script>
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
                        AYUDA
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

           <br>

<div class="container">  
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home">Generales</a>
    </li>
  
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu2">Documentos importantes</a>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
      <h3>Generales</h3>
      <p>El PFP es un documento de carácter oficial y requisito en el ámbito público, considerado también como una herramienta que integra las diferentes acciones dirigidas al desarrollo profesional y el fortalecimiento del quehacer de las funcionarias y los funcionarios del Ministerio de Educación Pública. Todo en el marco de la formación permanente para el logro de la excelencia educativa. </p>

                <p>Desde esta perspectiva, el proceso de elaboración del PFP debe ser visto como un ejercicio organizativo que facilita la adecuada detección de necesidades de capacitación del recurso humano, para llegar a la planificación del proceso, el diseño y ejecución de las actividades formativas para finalmente evaluar los resultados obtenidos. </p>
                
                <p>Por ello, el ejercicio previo a la formulación del Plan de Formación demanda la identificación de los requerimientos formativos a lo interno de la dependencia a corto y mediano plazo, pero también, de la consideración explicita de políticas, directrices y lineamientos  vinculantes al quehacer de este Ministerio y de sus funcionarias y funcionarios.</p>
    </div>
 
 
    <div id="menu2" class="container tab-pane fade"><br>
      <h3>Documentos importantes</h3>
      <ul>
          <li type="square">   
			<a href="http://www.idp.mep.go.cr/sites/all/files/idp_mep_go_cr/publicaciones/orientaciones_pfp_0.pdf" target="_blanl" > Orientaciones técnicas para la elaboración del PFP 2019 </a>
          </li>
          <li type="square">   
			<a href="http://www.idp.mep.go.cr/sites/all/files/idp_mep_go_cr/publicaciones/lineamientos_del_pfp_0.pdf" target="_blanl"> Lienamientos del PFP 2019 </a>
          </li>
		  <li type="square">   
			<a href="../../pdf/manual_sistema_pfp.pdf" target="_blanl"> Manual de usuario - Sistema PFP V 1.0 </a>
          </li>
      </ul>
      
    </div>
  </div>
</div>



   

    
</body>
</html>