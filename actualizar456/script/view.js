'use strict';

function View () {

}


Model.prototype.info = function (container) {

}


View.prototype.table = function (array, visor) {
 //console.log(array);


    $(visor).empty();

    var limite = array.length, row,
    htmlTable = $(
      "<table  id='tblReportes' class='table table-striped'>" +
      "<thead>" +
      "<tr>" +
        "<th scope='col'>#</th>" +
        "<th class='text-center' scope='col'>Instancia</th>" +
        "<th class='text-center' scope='col'>Nombre</th>" +
        "<th scope='col'>Objetivo</th>" +       
        "<th class='text-center' scope='col'> Ver - Editar </th>" +
        "<th class='text-center' scope='col'> Eliminar </th>" +
      "</tr>" +
      "</thead>" +
      "</table>"
    ), tBody = $("<tbody></tbody>");

            for (let index = 0; index < limite; index++) {
              let fowNumb = index + 1;
              row = $(
                "<tr>" +
                "<th scope='row'>" + fowNumb + "</th>" +
                "<td class='text-center'>" +
                   array[index].instancia +
                "</td>" +
                  "<td class='text-center'>" +
                    array[index].nombre +
                  "</td>" +
                  "<td class='text-center'>" +
                    array[index].objetivo +
                  "</td>" +         
                "<td class='text-center'>" +
                      "<i id='faiEdt"+ index +"'  target='"+ array[index].id +"'  class='fas fa-pencil-alt lnk-ico btn-edit'></i>  " +
                "</td>" +
                "<td class='text-center'>" +
                      "<i id='faiDel"+ index +"'  target='"+ array[index].id +"'   class='far fa-trash-alt lnk-ico btn-del'></i>" +
                "</td>" +
                "</tr>"
            );
              $(tBody).append(row);
          }
    $(htmlTable).append(tBody);
    $(visor).html(htmlTable);


  }

View.prototype.tableBitacora = function (array, visor) {
    //console.log(array);
   
   
       $(visor).empty();
   
       var limite = array.length, row,
       htmlTable = $(
         "<table  id='tblReportes' class='table table-striped'>" +
         "<thead>" +
         "<tr>" +           
           "<th class='text-center' scope='col'>Tipo de evento</th>" +
           "<th class='text-center' scope='col'>Usuario</th>" +
           "<th class='text-center' scope='col'>Nombre de la actividad</th>" + 
           "<th class='text-center' scope='col'>Nombre de la instancia</th>" + 
           "<th class='text-center'  scope='col'>Fecha del evento</th>" +                  
         "</tr>" +
         "</thead>" +
         "</table>"
       ), tBody = $("<tbody></tbody>");
   
               for (let index = 0; index < limite; index++) {                 
                 row = $(
                   "<tr>" +                 
                   "<td class='text-center'>" +
                      array[index].evento +
                   "</td>" +
                     "<td >" +
                       array[index].usuario +
                     "</td>" +
                     "<td >" +
                       array[index].actividad +
                     "</td>" +
                     "<td >" +
                      array[index].instancia +
                    "</td>" +
                     "<td class='text-center'>" +
                     array[index].fecha +
                   "</td>" +          
             
                   "</tr>"
               );
                 $(tBody).append(row);
             }
       $(htmlTable).append(tBody);
       $(visor).html(htmlTable);
   
   
     }



View.prototype.tableExcel = function ( nCapacit, array) {
      //console.log(array);
     
     
        // $(visor).empty();
     
         var limite = array.length, row, tBody = $("<tbody></tbody>");
         var contRow = $("<span></span>");
     
                 for (let index = 0; index < limite; index++) {
                  
                   row = $(
                     "<tr>" +                              
                       "<td class='text-center'>" +
                        nCapacit +
                       "</td>" +
                       "<td class='text-center'>" +
                         array[index].regional +
                       "</td>" + 
                       "<td class='text-center'>" +
                       array[index].inicio +
                     "</td>" + 
                     "<td class='text-center'>" +
                      array[index].fin +
                    "</td>" +         
                    "<td class='text-center'>" +
                    array[index].grupos +
                  "</td>" +                      
                     "</tr>"
                 );
                  $(tBody).append(row);          
  
               }  
              return tBody;   
       }


View.prototype.formWithData = function (record) {
  $(visor).empty();

}

View.prototype.cards = function (array, visor, emailUser) {
  //console.log(array);

  console.log(emailUser);


  var limite = array.length;


  $(visor).empty();

  var htmlContainer = $("<div class='col-12'></div>");

for (let index = 0; index <limite; index++) {
  //console.log(index);
  //console.log(array[index].titulo );
  var tmpIco, coreVisor, htmlDelete;

  if (emailUser == array[index].correo ) {
    htmlDelete =
      "<span class='spn-ico spn-del' > <i class='fas fa-trash-alt'></i>  <span>"
  } else {
    htmlDelete = " "
  };

  switch (array[index].tipo) {
    case "lnk":
    tmpIco = "<i class='fas fa-link'></i>";
    coreVisor = "<a href='"+ array[index].urlArchivo +"' target='_balnk' >" +
    "<img class='img-thumbnail lnk-ico' src='assets/ico/link.png' alt='imagen link de sitio web'></img>" +
    "</a>";
    break;
    case "mp3":
    tmpIco =  "<i class='fas fa-volume-up'></i>";
    coreVisor = "<audio controls src='" + array[index].urlArchivo + "' ></audio>";
    break;
    case "mp4":
    tmpIco = "<i class='fas fa-video'></i>";
    coreVisor = "<video controls src='" + array[index].urlArchivo + "' ></video>";
    break;
    case "img":
    tmpIco = "<i class='far fa-image'></i>";
    coreVisor = "<img class='img-fluid' src='" + array[index].urlArchivo + "' alt='imagen' ></img>";
    break;
    case "pdf":
    tmpIco = "<i class='fas fa-file-pdf'></i>";
    coreVisor = "<img class='img-thumbnail lnk-ico' src='assets/ico/pdf.png' alt='Card image cap'></img>";
    coreVisor = "<a href='"+ array[index].urlArchivo +"' target='_balnk' >" +
    "<img class='img-thumbnail lnk-ico' src='assets/ico/pdf.png' alt='imagen link de pdf'></img>" +
    "</a>";
    break;

    default:
    console.log("Opci車n de ico fuera de rango");

      break;
  }


  var htmlCard = $(
    "<div class='row'>"  +
      "<div class='col-12 col-cards-container'>" +
  "<div class='card text-center'>" +
  "<div class='card-header' > "+
  "<div class='row'>" +
      "<div class='col-4 text-center'> </div>" +
      "<div class='col-4 text-center'> "+ tmpIco +" </div>" +
      "<div class='col-4 text-right'> "+ htmlDelete +" </div>" +
  "</div>"   +
  " </div>" +
  "<div class='card-body'>" +
    "<h5 class='card-title' > "+ array[index].titulo +" </h5>" +

     "<p>" +  coreVisor + "</p>" +
     "<p class='card-text'  > "+ array[index].descripcion +"</p>" +
  //  "<button class='btn btn-primary btn-ver-media' typeMedia='"+ array[index].tipo +"' target='"+ array[index].urlArchivo +"'   >" +
//        "<i class='far fa-eye'></i> Ver " +
//    "</button>" +
  "</div>" +
  "<div class='card-footer text-muted'>Publicado el " + array[index].fecha + "  por "+  array[index].nombre  +"  </div>" +
      "</div>" +
    "</div>" +
    "</div>");
  $(htmlContainer).append(htmlCard);
}

$(visor).html(htmlContainer);

}

View.prototype.selectOpt = function (array, nombreCampo, objSelect) {
    for (let index = 0; index < array.length; index++) {
      //console.log(array[index].id );
      //console.log(array[index].categoria );
      var htmlOpt = $("<option value='"+ array[index].id +"' > "+ array[index][nombreCampo] +" </option>");
        $(objSelect).append(htmlOpt);
    }
}


View.prototype.selectOptEditMode = function (array, nombreCampo, objSelect, idRecord) {
  for (let index = 0; index < array.length; index++) {
    //console.log(array[index].id );
    //console.log(array[index].categoria );
    //console.log(idRecord);
    if (idRecord ==  array[index].id ) {
      var htmlOpt = $("<option selected value='"+ array[index].id +"' > "+ array[index][nombreCampo] +" </option>");
      $(objSelect).append(htmlOpt);
    } else {
      var htmlOpt = $("<option value='"+ array[index].id +"' > "+ array[index][nombreCampo] +" </option>");
      $(objSelect).append(htmlOpt);
    }

  }
}


View.prototype.CheckMemeberTeam = function ( classChecked, array ) {


  var chkTeam = $("."+classChecked), i;
      for ( i = 0; i < array.length; i++) {
        for (let index = 0; index < chkTeam.length; index++) {
        /*
          console.log("Check");
         console.log( $(chkTeam[index] ).attr("id") );
         console.log("***********");
         console.log( array[i] );
          */


            if (  $(chkTeam[index] ).attr("id")  == array[i]   ) {
                $(chkTeam[index] ).prop("checked", true );
               //console.log($(chkTeam[index] ).attr("id"));
               //console.log("cheked");


            }
        }
    }


}



View.prototype.MemeberTeam = function (array, visor) {
 //console.log(array);

    $(visor).empty();

      for (let index = 0; index < array.length; index++) {
        var htmlPerson =        ( "<div class='input-group mb-3'>" +
                                "<div class='input-group-prepend'>  " +
                                        "<div class='input-group-text'>" +
                                          "<input  id='"+ array[index].correo+"' class='form-checkbox' type='checkbox' >" +
                                        "</div>" +
                                "</div>" +
                                    "<label for='"+  array[index].correo +"'  >  &nbsp &#8594; "+ array[index].nombre + " " + array[index].apellido1 + " " +  array[index].apellido2 +  " </label>" +
                                  "</div>");
      $(visor).append(htmlPerson);

      }
}

View.prototype.loadRecordFromSession = function (record) {

  //console.log(record);
  //carga los datos del registro en  los input de tipo text

  $("#txtNombreRecurso").val(record.nombre_proyecto );


  $("#datPublicacion").val(record.fecha_pub);
  $("#txtUrl").val(record.url );
  $("#txtContacto").val(record.solicitante);


  $("#numAudios").val(record.audios );
  $("#numVideos").val(record.videos );
  $("#numDocs").val(record.documentos );
  $("#numImg").val(record.imagenes );
  $("#txtObservaciones").val(record.observaciones );




}


View.prototype.tableLogs = function (array, visor) {
  //console.log(array);


     $(visor).empty();
     var limite = array.length, row,
     htmlTable = $(
       "<table  id='tblLog' class='table table-striped'>" +
       "<thead>" +
         "<tr>" +
           "<th class='text-center' scope='col'>Id</th>" +
           "<th class='text-center' scope='col'>Usuario responsable</th>" +
           "<th scope='col'>Tipo de evento</th>" +
           "<th scope='col'>Fecha del evento</th>" +
           "<th scope='col'>Recurso afectado</th>" +
         "</tr>" +
       "</thead>" +
       "</table>"
     ), tBody = $("<tbody></tbody>");

             for (let index = 0; index < limite; index++) {

               row = $(
                 "<tr>" +
                 "<td class='text-center'>" +
                    array[index].id_evento +
                 "</td>" +
                   "<td class='text-center'>" +
                     array[index].usuario +
                   "</td>" +
                   "<td class='text-center'>" +
                     array[index].evento +
                   "</td>" +
                   "<td>" +
                     array[index].fecha_evento +
                   "</td>" +
                   "<td>" +
                   array[index].nombre +
                 "</td>" +
                 "</tr>"
             );
               $(tBody).append(row);
           }
     $(htmlTable).append(tBody);
     $(visor).html(htmlTable);


   }
