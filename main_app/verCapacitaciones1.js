$(document).ready(function () {
  var table = []

	 $.getJSON( "../obtener.php", function( data ) {
      console.log("dataset: ");     
      console.log(data);
  var cual =  document.getElementById('instancia').innerHTML;
  console.log("Instancia seleccionada: " +  cual);
var arrayTemp = [];
        for (var i = 0; i < data.length; i++) {
              if (data[i].instancia == cual){
                  arrayTemp.push(data[i]);
                  //carga el arreglo temporal 
                  console.log("Encontrado: ");                  
                  console.log( arrayTemp[i]);                  
              }
        }
var instancia = [];
var justificacion = [];
var necesidad = [];
var objetivo = [];
var interna = [];
var externa = [];
var modalidad = [];
var nombre = [];
var estrato = [];
var area = [];
var obj = [];
var obj2 = [];
var tipo = [];
var estrategia= [];
var duracion = [];

console.log("Array Temp: ");
console.log(arrayTemp);

for (var i = 0; i < arrayTemp.length; i++) {
    
  
  

    obj[i] = $.parseJSON(arrayTemp[i].sede);
    obj2[i]= $.parseJSON(arrayTemp[i].estrato);



     instancia[i] = arrayTemp[i].instancia;
     justificacion[i] = arrayTemp[i].justificacion;
     necesidad[i] = arrayTemp[i].necesidad;
     objetivo[i] = arrayTemp[i].objetivo;
     interna[i] = arrayTemp[i].interna;
     externa[i] = arrayTemp[i].externa;
     nombre[i] = arrayTemp[i].nombre;
     area[i] = arrayTemp[i].area;
    modalidad[i] = arrayTemp[i].modalidad;
    tipo[i] = arrayTemp[i].tipo_actividad;
    estrategia[i] = arrayTemp[i].estrategia;
    duracion[i] = arrayTemp[i].duracion;
    table[i] = $('<table class="table table-condensed"></table>');
    table[i].append("<tr><th>Sede</th><th>Inicio</th><th>Fin</th><th>Cantidad</th></tr>")
    document.getElementById('page-content').innerText = arrayTemp;
    $("#page-content").html(arrayTemp);
      for (var j = 0; j < obj[i].length; j++) {
      var tr = $('<tr class="success">').append(
        $('<td>').text(obj[i][j].regional),
          $('<td>').text(obj[i][j].inicio),
          $('<td>').text(obj[i][j].fin),
          $('<td>').text(obj[i][j].grupos)
      );
      table[i].append(tr);
    };
    estrato.push(obj2[i]+"&nbsp;");
    }

    if (arrayTemp.length == 0) {
      $("#page-content").append("<img src='../../img/encabezadoIDP.jpg'>");
      $("#mensaje").append("<h1>La instancia seleccionada no ha enviado aún sus planes de formación</h1>");
        $("#mensaje").append("<a href='../reportes_instancias.php'>Volver</a>");
        $("#exportar").hide();
    }
    else{


  $("#page-content").append("<img src='../../img/encabezadoIDP.jpg'>");
  $("#page-content").append("<h1>Plan de Formación Profesional</h1>");
  $("#page-content").append("<b>Institución: </b>Ministerio de Educación Pública - "+instancia[0]+"<br>");
  $("#page-content").append("<b>Justificación: </b>"+justificacion[0]+"<br>");
  $("#page-content").append("<b>Limitación interna: </b>"+interna[0]+"<br>");
  $("#page-content").append("<b>Limitación externa: </b>"+externa[0]+"<br>");

let consecutivo=0;

for (var i = 0; i < arrayTemp.length; i++) {
  consecutivo++
  $("#page-content").append("<h2>Actividad "+consecutivo+" </h2>");
  $("#page-content").append("<b>a. Nombre general de la actividad: </b>"+nombre[i]+"<br>");
  $("#page-content").append("<b>b. Necesidad: </b>"+necesidad[i]+"<br>");
  $("#page-content").append("<b>c. Objetivo estratégico: </b>"+objetivo[i]+"<br>");
  $("#page-content").append("<b>d. Área estratégica de formación permanente: </b>"+area[i]+"<br>");
  $("#page-content").append("<b>e. Tipo de actividad: </b>"+tipo[i]+"<br>");
  $("#page-content").append("<b>f. Estrategia metodológica: </b>"+estrategia[i]+"<br>");
  $("#page-content").append("<b>g. Modalidad: </b>"+modalidad[i]+"<br>");
  $("#page-content").append("<b>h. Duración de la actividad: </b>"+duracion[i])+" horas";
  $("#page-content").append("<br><b>i. Grupos por regional donde se impartirá la actividad: </b>");
  $("#page-content").append(table[i]);
  $("#page-content").append("<b>j. Población meta:</b>");
  $("#page-content").append(estrato[i]);
  }
  $("#mensaje").append("<br><a href='../reportes_instancias.php'><img src='../../img/volver.png'></a>");
  }
});

})
