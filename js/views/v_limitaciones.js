function View () {
    
}


View.prototype.userInfo = function (user, visor) { 
  
    //console.log(user);
    
    
      $(visor).empty();
      var htmlName = $("<span>Usuario: " + user.nombre + " " + user.apellido1 + " " +   user.apellido2   +   "<span><br>"),
      htmlInstance = $("<span>Instancia: " + user.instancia + "</span>");
  
      $(visor).append(htmlName);
      $(visor).append(htmlInstance);
    }


View.prototype.limitTxt = function (text, visor) {
    $(visor).empty();
    $(visor).val(text);

  }