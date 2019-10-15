function View() {
    
}

View.prototype.userInfo = function (user, visor) {    
  $(visor).empty();
  var htmlName = $("<span>Usuario: " + user.nombre + " " + user.apellido1 + " " +   user.apellido2   +   "<span><br>"),
  htmlInstance = $("<span>Instancia: " + user.instancia + "</span>");

  $(visor).append(htmlName);
  $(visor).append(htmlInstance);
}



View.prototype.tablePfp = function (contTable, array, status ) {
    //console.log(array);
     
    $(contTable).empty();
    var cont, htmlRow, htmlTBody = $("<tbody></tbody>"), 
    htmlHead = $(                            
    "<thead>" +
        "<tr class='text-center'>" +
          "<th scope='col'>#</th>" +
          "<th scope='col'>Nombre de la actividad</th>" +          
          "<th scope='col'>Tipo</th>" +
          "<th scope='col'>Área estratégica de Formación Permanente</th>" +
          "<th scope='col'>Modalidad</th>" +
          "<th scope='col'>Estrategia Metodológica</th>" +
          "<th scope='col'>Duración de la actividad</th>" +
          "<th scope='col'>Eliminar</th>" +          
          "<th scope='col'>Ver</th>" +
        "</tr>" +
    "</thead>");
    
    limite = array.length;

    for (let index = 0; index < limite; index++) {
        cont=index + 1;
        let htmlBorrar;
        //Validación para borrar actividades
        if (status == "Edicion") {
            htmlBorrar = "<td class='text-center' > <i class='far fa-trash-alt cursor-pointer fa-del-activity'   target='" + index + "'  ></i>   </td>";
        } else {
          htmlBorrar = "<td class='text-center' > <i class='fas fa-ban btn-forbidden' ></i>  </td>";
        }

        htmlRow = $("<tr >" +
        "<th scope='row'>"+ cont +"</th>" +
        "<td>" + array[index].nombre_actividad + "</td>" +        
        "<td>" + array[index].tipo + "</td>" +
        "<td>" + array[index].area + "</td>" +
        "<td>" + array[index].modalidad + "</td>" +
        "<td class='text-center' >" + array[index].estrategia + "</td>" +
        "<td class='text-center'>" + array[index].duracion + "</td>" +              
        htmlBorrar + 
        "<td ><i class='far fa-eye fa-view-details cursor-pointer' id='btnVie" + index +"'  ></i>  </td>" +
      "</tr>" );
      $(htmlTBody).append(htmlRow);        
    };

    $(contTable).append(htmlHead);
    $(contTable).append(htmlTBody);    
}

View.prototype.messageStatusPfp = function (status) {

switch (status) {
  case "Enviado":
        $("#btnSendPfp").fadeOut();
        $("#divWarningSendPfp").empty();
        $("#divWarningSendPfp").html("<strong> El documento PFP fue enviado a la asesoría del IDP.  </strong> ");
  break;
  case "Edicion": 
      $("#btnSendPfp").fadeIn();
      $("#divWarningSendPfp").empty();
      $("#divWarningSendPfp").html("<strong> Atención:  </strong> Una vez que envia el documento PFP ya no podrá agregar más actividades ni editarlas.");
  break;
  case "Corregir": 
      $("#btnSendPfp").fadeIn();
      $("#divWarningSendPfp").empty();
      $("#divWarningSendPfp").html("<strong> Atención:  Envío de documento para revisión </strong> El documento se enviará con los cambios realizados. Una vez que se envíe ya no podrá realizar más cambios");
      $("#btnSendPfp").text("Reenviar documento PFP");
  break;
  default:
    console.log("Opción fuera de rango");
    
    break;
}
  

}
