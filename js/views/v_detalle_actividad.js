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


View.prototype.renderData = function ( record  ) {
  //console.log(record);
  

    $("#alrObj").text(record.objetivo );
    $("#alrNeed").text(record.necesidad );
    $("#selTipo").val(record.tipo);
    $("#txtNombre").val(record.nombre_actividad );
    $("#selArea").val(record.area);
    $("#selEstrato").val(record.estrato );

    $("#selModalidad").val(record.modalidad );
    $("#selEstrategia").val(record.estrategia );
    $("#selTipoActividad").val(record.tipo_actividad );
    $("#txtDuracion").val(record.duracion );

    $("#nmbCosto").val(record.costo );

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
        "<th scope='col'>Cantidad de participantes</th>" +        
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
                "<td class='text-center' >" + 
                  array[index].grupos +
                "</td>" +
                "<td class='text-center'>" + 
                   array[index].cantParticipantes +
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


View.prototype.modalObj = function (obj, nec ) {
  $("#txtObj").empty();
  $("#txtNec").empty();

  $("#txtObj").val(obj);
  $("#txtNec").val(nec);



 }
