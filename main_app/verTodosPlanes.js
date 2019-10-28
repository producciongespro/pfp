$(document).ready(function () {

$.getJSON( "../obtenerAvalados.php", function( data ) {
console.log(data);
var arrayTemp = [];
var instancias = [];
var justificaciones = [];
var internas = [];
// var externas = [];
var arrayTemp = [];
for (var i = 0; i < data.length; i++) {
  console.log(data[i].nombre);
    if (!instancias.includes((data[i].nombre))) {
    instancias.push(data[i].nombre);
    justificaciones.push(data[i].justificacion);
    internas.push(data[i].interna);
    // externas.push(data[i].externa);
  }
}

console.log(instancias);
console.log(data.length);
console.log(instancias.length);
for (var p = 0; p < instancias.length; p++) {
var cual = instancias[p];
var justificacion = justificaciones[p];
var interna = internas[p];
// var externa = externas[p];
console.log(cual);
var table = [];
var cuantas = 0;
var instancia = [];
var consecutivo;
var necesidad = [];
  $("#page-content").append("<img src='../../img/encabezadoIDP.jpg'>");
  $("#page-content").append("<h1>Plan de Formación Permanente</h1>");
  $("#page-content").append("<b>Institución: </b>Ministerio de Educación Pública - "+cual+"<br>");
  $("#page-content").append("<b>Justificación: </b>"+justificacion+"<br>");
  $("#page-content").append("<b>Limitación interna: </b>"+interna+"<br>");
  for (var i = 0; i < data.length; i++) {
  if ((data[i].nombre)==cual) {
    consecutivo = i + 1;
    $("#page-content").append("<h2>Actividad: "+consecutivo+"</h2>");
    $("#page-content").append("<b>A. Nombre general de la actividad: </b>"+data[i].nombre_actividad+"<br>");
    $("#page-content").append("<b>B. Necesidad: </b>"+data[i].necesidad+"<br>");
    $("#page-content").append("<b>C. Objetivo estratégico: </b>"+data[i].objetivo+"<br>");
    $("#page-content").append("<b>D. Área estratégica de formación permanente: </b>"+data[i].area+"<br>");
    $("#page-content").append("<b>E. Tipo de actividad: </b>"+data[i].tipo+"<br>");
    $("#page-content").append("<b>F. Estrategia metodológica: </b>"+data[i].estrategia+"<br>");
    $("#page-content").append("<b>G. Modalidad: </b>"+data[i].modalidad+"<br>");
    $("#page-content").append("<b>H. Clase de actividad: </b>"+data[i].tipo_actividad+"<br>");
    $("#page-content").append("<b>I. Duración de la actividad: </b>"+data[i].duracion+"<br>");
    $("#page-content").append("<b><span>J. Estratos: </span><b>");
    $("#page-content").append( renderListaEstratos(data[i].estrato) );
    $("#page-content").append("<b><span>K. Grupos por regional donde se impartirá la actividad: </span><b>");
    $("#page-content").append( renderTablaSedes(data[i].sede) );
    if (data[i].tipo == "Fuera"){$("#page-content").append("<b>L. Costo: </b>"+data[i].costo+"<br><br>");}
    // arrayTemp.push(data[i]);
  }
}
// console.log(arrayTemp);

  }
arrayTemp = [];
  $("#mensaje").append("<br><a href='../../reportes/index.html'><img src='../../img/volver.png'> </a>");


});

})


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
            "<th scope='col'> Participantes </th>" +
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
                        tmpListaSedes[index].cantParticipantes +
                    "</td>" +
                  "</tr>"
              );
                $(tBody).append(row);
            }
      $(htmlTable).append(tBody);
      return  htmlTable;
}
