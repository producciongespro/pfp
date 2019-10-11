function View (params) {
    
}

View.prototype.userInfo = function (user, visor) { 
  
  //console.log(user);
  
  
    $(visor).empty();
    var htmlName = $("<span>Usuario: " + user.nombre + " " + user.apellido1 + " " +   user.apellido2   +   "<span><br>"),
    htmlPuesto = $("<strong> Asesor revisor PFP </strong> " );
   
    $(visor).append(htmlName);
    $(visor).append(htmlPuesto);
    
  }

 
View.prototype.table = function (array, visor) {
    //console.log( "array", array);
 
  
  $(visor).empty();
  var limite = array.length, rowNumber=0;
  //console.log(limite);
  
  htmlTable = $(
    "<table class='table table-striped'>" +
    "<thead>" +
      "<tr>" +
        "<th scope='col'>#</th>" +
        "<th class='text-center'  scope='col'>Instancia</th>" +
        "<th class='text-center' scope='col'>Cant de actividades</th>" +
        "<th class='text-center' scope='col'>Justificación </th>" +
        "<th class='text-center' scope='col'> Objetivos </th>" +
        "<th class='text-center'  scope='col'>Archivo DNFP </th>" +
        "<th class='text-center'  scope='col'> Limitaciones </th>" +
        "<th class='text-center'  scope='col'>Fecha de envío </th>" +
        "<th class='text-center'  scope='col'>Estado PFP </th>" +
        "<th class='text-center'  scope='col'>Desbloquear PFP </th>" +
        "<th class='text-center'  scope='col'>Ver actividades del PFP</th>" +
      "</tr>" +
    "</thead>" +
    "</table>"    
  ), tBody = $("<tbody></tbody>");

          for (let index = 0; index < limite; index++) {
           // console.log(index);            
          // console.log(array[index].nombre); 

          if ( array[index].cantActiv > 0 ) {
             // console.log(array[index].nombre);              
              //console.log(index);
              
              rowNumber++
              row = $(
                "<tr>" +
                "<th scope='row'>" + rowNumber + "</th>" +                
                "<td>" + 
                   array[index].nombre +                   
                "</td>" +                
                  "<td class='text-center' >" + 
                    + 1 +
                  "</td>" +
                "<td class= 'text-center'>" + 
                      "<i  id='btnJus"+ array[index].id_justificacion +"' class='fas fa-book  fa-justif cursor-pointer' title='Ver la justificacion del PFP'  ></i>" +
                "</td>" +
                "<td class= 'text-center'>" + 
                "<i   title = '"+   index  +"'   class='fas fa-flag-checkered cursor-pointer btn-objetivos' ></i>" +
                "</td>" +
                "<td class= 'text-center'>" + 
                    "<i  id='btnfil"+  array[index].id_archivo +"' class='far fa-file-pdf cursor-pointer'  title='Ver el documento DNFP'  ></i>" +
                "</td>" +
                "<td class= 'text-center'>" + 
                    "<i  id='btnLim"+ array[index].id_limitacion +"' class='fas fa-exclamation-circle  fa-limit cursor-pointer'  title='Ver las limitaciones'  ></i>" +
                "</td>" +
                "<td class='text-center'>" + 
                      array[index].fecha_envio +
                "</td>" +
                "<td class='text-center'>" + 
                      array[index].estado +
                "</td>" +
                "<td class='text-center' >" + 
                  "<i class='fas fa-unlock cursor-pointer' instancia='"+  array[index].nombre + "'  ></i>" +
                "</td>" +
                "<td class='text-center' >" + 
                    "<i class='far fa-eye fa-view-details cursor-pointer ' instancia='"+  array[index].nombre + "'  ></i>" +
                "</td>" +
                "</tr>"
            );
              $(tBody).append(row); 
              
            }    
        }
  $(htmlTable).append(tBody);    
  $(visor).html(htmlTable);


}


View.prototype.limitaciones = function (interna ) { 
    $("#txtInterna").empty();    
    $("#txtInterna").val(interna);
    
}



View.prototype.renderObjetivos = function ( array ) { 
  console.log(array); 
  $("#modalBodyObjetivos").empty();
  var ul = $("<ul></ul>");  

  for (let index = 0; index < array.length; index++) {                 
      $(ul).append("<li>"+ array[index].objetivo  +"</li>");
  }
  $("#modalBodyObjetivos").html( ul  ); 
}




View.prototype.pdf = function (path, visor ) {
  console.log(path);
  
  $(visor).empty();
  $(visor).html(
    "<embed id='currentMedio' src='"+ path +"' type='application/pdf' width='100%' height='100%'></embed>"
  );


 }