function View () {
    
}


View.prototype.instances = function (array, cont) {
    
  $(cont).empty();  
  $(cont).html("<label for='selInstancia'>Instancia:</label>");
  var limite = array.length,
  selector = $("<select class='custom-select' id='selInstancia'></select>");
  $(selector).html( "<option selected disabled>Seleccione la instancia</option>");
  
  for (let index = 0; index < limite; index++) {
    $(selector).append("<option> " + array[index].nombre + " </option>")
    
  }
  $(cont).append(selector);
  }





