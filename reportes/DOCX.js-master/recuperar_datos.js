$(document).ready(function () {
  var table = $('<table></table>');
	table.append("<tr><th>Sede</th><th>Inicio</th><th>Fin</th><th>Cantidad</th></tr>")
  $.getJSON( "../../main_app/obtener.php", function( data ) {
    console.log(data);
    console.log(data.length);
var cual = 46;
arrayTemp = [];
obj = [];
for (var i = 0; i < data.length; i++) {
  if (data[i].id == cual){
    arrayTemp.push(data[i])
  }
}
console.log(arrayTemp);
  obj = $.parseJSON(arrayTemp[0].sede);
console.log(arrayTemp[0].sede);

    var instancia = arrayTemp[0].instancia;
    var nombre = arrayTemp[0].nombre;
    var area = arrayTemp[0].area;
      var modalidad = arrayTemp[0].modalidad;
      var tipo = arrayTemp[0].tipo_actividad;
        var estrategia = arrayTemp[0].estrategia;
  document.getElementById('resultado').innerText = arrayTemp;
  $("#resultado").html(arrayTemp);


});
})
