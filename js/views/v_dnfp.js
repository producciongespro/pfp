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


View.prototype.fileField = function (visor, fileName) {
  $(visor).empty();
  var htmlTitulo = $(  " <hr> <h6> Ya el archivo fue enviado: <h6> <br>")


      var htmlString = $(
        "<div class='alert alert-success text-right' role='alert'>" +        
          "<strong> Nombre del archivo: </strong>"+ fileName.url.slice(12) +
          "<a class='link-pdf'  href= ../" + fileName.url + "  target='_blank' >  ver pdf </a>   " +        
          "<i  target='"+  fileName.id_archivo +"'  title='Eliminar archivo' class='fas fa-times  fa-delete-x '></i>"  +
        "</div>"       
      )
      $(visor).append(htmlTitulo);
      $(visor).append(htmlString);


}


View.prototype.uploadFile = function (visor) {

var htmlString = $(
  "<div class='row'>" +
  "<p>" +
         " <strong>Nota: </strong> El archivo debe estar en PDF y no debe sobrepasar de más de 12 páginas." +
      "</p>" +
      "<div class='input-group'>" +
              "<div class='input-group-prepend'>" +
                "<span class='input-group-text'></span>" +
              "</div>" +
              "<div class='custom-file'>" +
                "<input type='file' class='custom-file-input' id='inputGroupFile01'  accept='application/pdf'>  >" +
"                <label id='lblfile1'  class='custom-file-label' for='inputGroupFile01'>Seleccione el archivo que enviará</label>" +
              "</div>" +
        "</div>" +
"</div>" +
"<br>" +
"<div class='row'>" +
  "<div class='col'>" +
          "<div class='form-group'>" +
                  "<button class='btn btn-primary btn-lg btn-block item-invisible' disabled    id='btnEnviar'> Enviar archivo </button>" +
          "</div>" +
    "</div>" +
"</div>"
);

$(visor).html(htmlString);

}