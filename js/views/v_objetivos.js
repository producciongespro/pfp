function View () {
    
}


View.prototype.userInfo = function (user, visor) {    
  $(visor).empty();
  var htmlName = $("<span>Usuario: " + user.nombre + " " + user.apellido1 + " " +   user.apellido2   +   "<span><br>"),
  htmlInstance = $("<span>Instancia: " + user.instancia + "</span>");

  $(visor).append(htmlName);
  $(visor).append(htmlInstance);
}


View.prototype.table = function (array, visor) {
 
  
    $(visor).empty();
    var limite = array.length,
    htmlTable = $(
      "<table class='table table-striped'>" +
      "<thead>" +
        "<tr>" +
          "<th scope='col'>#</th>" +
          "<th scope='col'>Brecha formativa</th>" +
          "<th scope='col'>Objetivo</th>" +
          "<th scope='col'> Editar - Eliminar </th>" +
        "</tr>" +
      "</thead>" +
      "</table>"    
    ), tBody = $("<tbody></tbody>");

            for (let index = 0; index < limite; index++) {
              let fowNumb = index + 1;
              let icoEliminar;
              if (array[index].activo == "0"  ) {
                icoEliminar = "<i id='faiDel"+ index +"'  target='"+ array[index].id_objetivo +"'   class='far fa-trash-alt fa-btn-obj btn-del'></i>"
              } else {
                icoEliminar = "<i class='fas fa-ban fa-btn-obj btn-forbidden' ></i>"
              }
              row = $(
                "<tr>" +
                "<th scope='row'>" + fowNumb + "</th>" +                
                "<td>" + 
                   array[index].necesidad +                   
                "</td>" +                
                  "<td>" + 
                    array[index].objetivo +
                  "</td>" +
                "<td>" + 
                      "<i id='faiEdt"+ index +"'  target='"+ array[index].id_objetivo +"'  class='fas fa-pencil-alt fa-btn-obj btn-edit'></i>  " +
                      icoEliminar +   
                "</td>" +
                "</tr>"
            );
              $(tBody).append(row);      
          }
    $(htmlTable).append(tBody);    
    $(visor).html(htmlTable);


  }


View.prototype.edit = function (fieldNeed, fielObj) { 
  $("#txtNeedEdit").empty();
  $("#txtObjEdit").empty();
$("#txtNeedEdit").val(fieldNeed);
$("#txtObjEdit").val(fielObj);
 }






