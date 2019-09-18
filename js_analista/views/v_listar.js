function View() {
    
}

View.prototype.userInfo = function (user, visor) {    
  $(visor).empty();
  var htmlName = $("<span>Usuario: " + user.nombre + " " + user.apellido1 + " " +   user.apellido2   +   "<span><br>"),
  htmlInstance = $("<strong>Asesor revisor PFP</strong>");

  $(visor).append(htmlName);
  $(visor).append(htmlInstance);
}



View.prototype.tablePfp = function (contTable, array) {
    
     
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
          "<th scope='col'>Ver</th>" +
        "</tr>" +
    "</thead>");
    
    limite = array.length;
    console.log(limite);

    for (let index = 0; index < limite; index++) {
        cont=index + 1;
        htmlRow = $("<tr >" +
        "<th scope='row'>"+ cont +"</th>" +
        "<td>" + array[index].nombre + "</td>" +        
        "<td>" + array[index].tipo + "</td>" +
        "<td>" + array[index].area + "</td>" +
        "<td>" + array[index].modalidad + "</td>" +
        "<td class='text-center' >" + array[index].estrategia + "</td>" +
        "<td class='text-center'>" + array[index].duracion + "</td>" +              
        "<td ><i class='far fa-eye fa-view-details cursor-pointer' id='btnVer" + index +"'  ></i>  </td>" +
      "</tr>" );
      $(htmlTBody).append(htmlRow);        
    };

    $(contTable).append(htmlHead);
    $(contTable).append(htmlTBody);    
}


