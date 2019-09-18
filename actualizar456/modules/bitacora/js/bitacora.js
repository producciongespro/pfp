"use strict";

var m = new Model (), v = new View (),
target;

$(document).ready(function () {   
    loadMod();    
});

function loadMod() {
    $(".div-shadow").removeClass("invisible");
    m.loadJson("../../server/obtener_bitacora.php", function (array) {
        console.log(array);
         
        renderTable(array);
     });
}





function renderTable(dataset) {
    $(".div-shadow").addClass("invisible");  
    //console.log("dataset desde el controler");
    //console.log(dataset);
    v.tableBitacora(dataset, "#visor");


    loadDataTable();
    
    
}



function loadDataTable() {
    $('#tblReportes').DataTable( {
                "language": {
                    "url": "http://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                }
    } );
}