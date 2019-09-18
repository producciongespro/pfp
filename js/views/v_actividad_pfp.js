"use strict";

function View () {

}



View.prototype.userInfo = function (user, visor) {
      $(visor).empty();
      var htmlName = $("<span>Usuario: " + user.nombre + " " + user.apellido1 + " " +   user.apellido2   +   "<span><br>"),
      htmlInstance = $("<span>Instancia: " + user.instancia + "</span>");

      $(visor).append(htmlName);
      $(visor).append(htmlInstance);
    }

View.prototype.objectiveList = function (array, visor ) {
      //console.log(array);
      var limite = array.length,
      htmlGroup = $("<div></div>");
      $(visor).empty();

      for (let index = 0; index < limite; index++) {
            var htmlObj = $(
                  " <div class='alert alert-primary alert-objetivos'   target = '"+ array[index].id  +"'    need='" + array[index].necesidad + "' >"+ array[index].objetivo +"</div>"
                  );
            $(htmlGroup).append(htmlObj);
      }
      $(visor).html(htmlGroup);
  }


View.prototype.tipoActividad  = function ( visor, opt ) {
    console.log("opcion" +  opt);
    $(visor).empty();
    $(visor).append("<label for='selTipoActividad'> <strong> 9 - </strong> Tipo de actividad:</label>");
    var htmlSel;

    //creacion del select y la primera opcion (generica)

    if (opt=="Aprovechamiento" || opt=="Participación") {
         htmlSel = $(
            "<select  class='form-control' id='selTipoActividad'>" +
                    "<option disabled selected >Seleccione un tipo</option>" +
                    "<option value='Curso'> Curso </option>" +
                    "<option value='Taller'> Taller </option>" +
                    "<option value='Seminario'> Seminario </option>" +
            "</select>");


    } else {

        htmlSel = $(
            "<select  class='form-control' id='selTipoActividad'>" +
                    "<option disabled selected >Seleccione un tipo</option>" +
                    "<option> Charla </option>" +
                    "<option> Asesoramiento </option>" +
                    "<option> Taller </option>" +
                    "<option> Seminario </option>" +
                    "<option> Conferencia </option>" +
                    "<option> Encuentro </option>" +
                    "<option> Jornada de Trabajo </option>" +
                    "<option> Conversatorio </option>" +
                    "<option> Telepresencia </option>" +
            "</select>");
    }

    $(visor).append(htmlSel);

  }

View.prototype.instances = function (array, cont) {

    $(cont).empty();
    $(cont).html("<label for='selRegional'>Dirección Regional: </label>");
    var limite = array.length,
    selector = $("<select class='custom-select' id='selRegional'></select>");
    $(selector).html( "<option selected disabled>Seleccione la Dirección Regional: </option>");

    for (let index = 0; index < limite; index++) {
      $(selector).append("<option> " + array[index].nombre + " </option>")

    }
    $(cont).append(selector);
    }


View.prototype.table = function (visor, array ) {


    $(visor).empty();
    var limite = array.length,
    htmlTable = $(
      "<table class='table table-striped'>" +
      "<thead>" +
        "<tr>" +
          "<th scope='col'>#</th>" +
          "<th scope='col'>Regional</th>" +
          "<th scope='col'>Mes de inicio</th>" +
          "<th scope='col'>Mes de finalización</th>" +
          "<th scope='col'>Cantidad de grupos</th>" +
          "<th scope='col'>Eliminar</th>" +
        "</tr>" +
      "</thead>" +
      "</table>"
    ), tBody = $("<tbody></tbody>");

            for (let index = 0; index < limite; index++) {
              let rowNumb = index + 1,
              row = $(
                "<tr>" +
                "<th scope='row'>" + rowNumb + "</th>" +
                "<td>" +
                   array[index].regional +
                "</td>" +
                  "<td>" +
                    array[index].inicio +
                  "</td>" +
                  "<td>" +
                    array[index].fin +
                  "</td>" +
                  "<td>" +
                    array[index].grupos +
                  "</td>" +
                "<td>" +
                      "<i id='faiDel"+ index +"'  target='"+ index +"'   class='far fa-trash-alt fa-btn-obj btn-del'></i>" +
                "</td>" +
                "</tr>"
            );
              $(tBody).append(row);
          }
    $(htmlTable).append(tBody);
    $(visor).html(htmlTable);


  }


View.prototype.renderEstreetegia = function ( ) {
      $("#selEstrategia").empty();
      var htmlOptions = $(
        "<option class='estrategia-no-presencial'  disabled selected >Seleccione una estretegia</option>" +
        "<option>Presencial</option>" +
        "<option class='estrategia-no-presencial'>Virtual</option>" +
        "<option class='estrategia-no-presencial'>A distancia</option>" +
        "<option class='estrategia-no-presencial' >Mixta (presencial/virtual)  </option>" +
        "<option class='estrategia-no-presencial' >Mixta (presencial/a distancia)  </option>"
      );
      $("#selEstrategia").append(htmlOptions);

  }


  View.prototype.modalidad = function (visor, actividad  ) { 
    var htmlModalidad;


    if (actividad == "Dentro" ) {
      htmlModalidad = $(
        "<label for='selModalidad'><strong>7 -</strong> Modalidad:</label>" +
        "<select class='form-control' id='selModalidad'  >" +
                "<option disabled selected>Seleccione una modalidad</option>" +
                "<option>Aprovechamiento</option>" +
                "<option>Participación</option>" +
                "<option>Asistencia</option>" +
        "</select>" 
      )
    } else {
      htmlModalidad = $(
        "<label for='selModalidad'><strong>7 -</strong> Modalidad:</label>" +
        "<select class='form-control' id='selModalidad'  >" +
                "<option disabled selected>Seleccione una modalidad</option>" +
                "<option>Aprovechamiento</option>" +
                "<option>Participación</option>" +                
        "</select>" 
      )
    }

    $(visor).html(htmlModalidad);
  }


  View.prototype.clearSelect = function ( ) {
    $("#frmModalidad").empty();
    $("#formGroupTipo").empty();

    $("#frmModalidad").html(
        "<label for='selModalidad'><strong>7 -</strong> Modalidad:</label>" +
          "<br>" +
         "<small>Debe seleccionar primero el tipo de actividad  (Dentro-Fuera)  (item 3) </small>"
    );

    $("#formGroupTipo").html(
      "<label for=''> <strong>9 -</strong> Clase de actividad </label>" +
      "<br>" +
      "<small>Debe seleccionar primero la modalidad  (item 7) </small>" 
  );

   }





View.prototype.clearFields = function ( ) {
  $("#txtNombre").val("");
  $("#alrObj").html("");
  $("#alrNeed").text("Seleccione el objetivo.");
  $("#txtDuracion").val("");
  $("#txtCantidad").val("");
  $("#txtLugar").val("");
  $("#selPeriodo").val("");
  $("#selArea").val("");


  $("#selEstrato").val("");

  $("#selTipoActividad").val("");

  $("#colTableGroupos").empty();


  $("#selModalidad").val("");
  $("#selEstrategia").val("");
  //Deshaboilita la caja de texto para que tenga que seleccionar el objetivo antes:
  $('#txtNombre').get(0).disabled = true;
  //Etiqueta del alert:
  $("#alrObj").text("Clic para seleccionar el objetivo.");
}
