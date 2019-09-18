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

View.prototype.necesidad = function (visor, cont) {  
  var htmlString = $(
    "<div class='form-group oculto' id='campo"+ cont +"'>" +
        "<label for='txtNecesidad"+ cont +"'>Descripción de la necesidad "+ cont +" </label>" +
        "<textarea class='form-control' id='txtNecesidad"+ cont +"' rows='2'  name='necesidad[]'   required></textarea>" +
    "</div>"
  );

  $(visor).append(htmlString);
 }

 
View.prototype.justify = function (array, cont) {
  //console.log(array);
  var limite = array.length;     
  $(txtJustificacion).empty();
    // si el array tiene al menos un dato
    //carga en el textarea de justificacioón el campo justificacion del array
    $(cont).text(array[0].justificacion);       
}


View.prototype.editNeed = function (str, visor, title, foot) {
  $(visor).empty();
  $(title).empty();
  $(foot).empty();

  var htmltxtArea = $("<textarea id='txtEdit' class= 'form-control'  rows='4' cols='50' value=''> </textarea>");
  

  $(htmltxtArea).val(str);
  $(visor).html(htmltxtArea);
  $(title).text("Objetivo a editar");
  $(foot).html("<button type='button' class='btn btn-primary' id='btnEditar'>Guardar cambios</button> ");




  }