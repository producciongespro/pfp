"use strict"


var dataset, 
actividades=[];  // Lista de actividades de la instancia seleccionada
$(document).ready(function () {
    console.log("Ready");
    loadDataset();

});



function loadDataset() {
            $.getJSON("../obtener.php", 
            function (data, textStatus, jqXHR) {
                dataset = data;
                loadMod();
            }
        );
}

function loadMod() {
    filtrarInstancia();
}


function filtrarInstancia() {
    var instanciaSeleccionada = $("#instancia").html(),
    limiteDataSet = dataset.length;
    console.log( "Instancia seleccionada: " +  instanciaSeleccionada);
    //Si encuentra una concidencia agrega el objeto en el vector actividades
    for (let index = 0; index < limiteDataSet; index++) {
        //console.log(dataset[index].instancia);          
            if (dataset[index].instancia  ==  instanciaSeleccionada) {
                //Segundo filtro: solo paasa instacioas con estados PFP = enviado
                if (dataset[index].estado == "Enviado"  ||  dataset[index].estado == "Avalado"   ) {
                    //console.log("Instancia Encontrada");   
                    actividades.push(dataset[index]);
                }                
            }        
        
    }
        //Lista de actividades de la instancia seleccionada
        console.log(actividades);
        if (actividades.length > 0 ) {
                //Si la longitud de la array es mayor que cero Renderiza el html con el arreglo cargado
                renderHtml(instanciaSeleccionada,  actividades); 
        } else {
            // En el caso de que el estado del dataset sea diferente de avalado o enviado
            alert ("El PFP aún no ha sido enviado");
        }
      
}


function renderListaEstratos(stringRecord) {
    let tmpListaEstratos = JSON.parse(stringRecord),
    htmlListaEstratos = $("<ul></ul>");
   // console.log("Estratos");    
   // console.log(tmpListaEstratos);
    for (let index = 0; index < tmpListaEstratos.length; index++) {
        let htmllistaElementos = $("<li>"+ tmpListaEstratos[index]  + "</li>"     );
        $(htmlListaEstratos).append(htmllistaElementos);        
    }    
    return htmlListaEstratos;
}


function renderTablaSedes(stringRecord) {
    let tmpListaSedes = JSON.parse(stringRecord);
    //console.log("Lista Sedes");    
    //console.log(tmpListaSedes);



   var  htmlTable = $(
        "<table class='table table-striped'>" +
        "<thead>" +
          "<tr>" +
            "<th scope='col'>#</th>" +
            "<th scope='col'>Sede Regional</th>" +
            "<th scope='col'>Inicio</th>" +
            "<th scope='col'>Fin</th>" +
            "<th scope='col'> Grupos </th>" +
          "</tr>" +
        "</thead>" +
        "</table>"    
      ), tBody = $("<tbody></tbody>");
  
              for (let index = 0; index < tmpListaSedes.length; index++) {
                let fowNumb = index + 1,
                row = $(
                  "<tr>" +
                  "<th scope='row'>" + fowNumb + "</th>" +                
                  "<td>" + 
                  tmpListaSedes[index].regional +                   
                  "</td>" +                
                    "<td>" + 
                      tmpListaSedes[index].inicio +
                    "</td>" +
                        "<td>" + 
                            tmpListaSedes[index].fin +
                    "</td>" +
                    "</td>" +
                    "<td>" + 
                        tmpListaSedes[index].grupos +
                    "</td>" +           
                  "</tr>"
              );
                $(tBody).append(row);      
            }
      $(htmlTable).append(tBody);    
      return  htmlTable;
  
    
    
}


function renderHtml(instanciaSeleccionada, array) {
    var consecutivo, //Consecutivo de actividad que se muestra en GUI de cada actividad
    //Encabezado
    htmlJumbotron = $("<div class='jumbotron' > "+ 
        "<img src='../../img/encabezadoIDP.jpg'>" +
        "<h1> Plan de Formación Profesional  </h1> " +
        "<h2> Institución: " + instanciaSeleccionada + "</h2>" +
        " <div>"),
    htmlContainer = $("<div class='container'> "+
    "<strong> Justificación:  </strong>" +  array[0].justificacion  + "</br>" +
    "<strong> Limitación interna:  </strong>" +  array[0].interna  + "</br>" +
    "<strong> Limitación externa:  </strong>" +  array[0].externa  + "</br>" +
    " </div>");




    for (let index = 0; index < array.length; index++) {
        consecutivo=index + 1;
        $(htmlContainer).append(  "<hr>" );    
        $(htmlContainer).append(  "<h3> <strong> Actividad " +  consecutivo  + "</h3>" ); 
        $(htmlContainer).append(  "<p> <strong> a. Nombre general de la actividad:  </strong> " +  array[index].nombre  + "</p>" ); 
        $(htmlContainer).append(  "<p> <strong> b. Necesidad:  </strong> " +  array[index].necesidad  + "</p>" ); 
        $(htmlContainer).append(  "<p> <strong> c. Objetivo estratégico:  </strong> " +  array[index].objetivo  + "</p>" ); 
        $(htmlContainer).append(  "<p> <strong> d. Área estratégica de formación permanente:  </strong> " +  array[index].area  + "</p>" ); 
        $(htmlContainer).append(  "<p> <strong> e. Tipo de actividad:  </strong> " +  array[index].tipo  + "</p>" ); 
        $(htmlContainer).append(  "<p> <strong> f. Estrategia metodológica: </strong>" +  array[index].estrategia  + "</p>" );        
        $(htmlContainer).append(  "<p> <strong> g. Modalidad: </strong>" +  array[index].modalidad  + "</p>" );        
        $(htmlContainer).append(  "<p> <strong> h. Clase de actividad: </strong>" +  array[index].tipo_actividad  + "</p>" );        
        $(htmlContainer).append(  "<p> <strong> i. Duración de la actividad: </strong>" +  array[index].duracion  + " horas. </p>" );        
        $(htmlContainer).append( "<p> <strong> j. Estratos: </strong> </p> ");
        $(htmlContainer).append( renderListaEstratos(array[index].estrato) );
        $(htmlContainer).append( renderTablaSedes(array[index].sede) );    
         if (array[index].tipo == "Fuera"){$(htmlContainer).append("<b>L. Costo: </b>"+array[index].costo+"<br><br>");}
    }

    $("#page-content").append(htmlJumbotron);
    $("#page-content").append(htmlContainer);
}