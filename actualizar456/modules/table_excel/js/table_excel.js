"use strict";

var m = new Model (), v = new View ();


$(document).ready(function () {

m.loadJson("../../../data/instancias.json", function (array) { 
    //console.log(array);
    //console.log(jsonToArray(array));
    
    //TODO: cargar el select

    $( "#txtInstancia" ).autocomplete({
        source: jsonToArray(array)
      });
    
 }  )

   
    $("#btnBuscar").click(function (e) { 
        e.preventDefault();        
        loadInstancia( $("#txtInstancia").val()  );
        $("#spnIntancia").text( $("#txtInstancia").val());
        $("#txtInstancia").val("");
   
    });


    $(".botonExcel").click(function (e) {           
        $(".div-shadow").addClass("invisible");  
        $("#datos_a_enviar").val( $("<div>").append( $("#tbl-reportes").eq(0).clone()).html());
         $("#FormularioExportacion").submit();
    });
   
});

function loadInstancia(instancia) {
    let urlPhp = "../../server/obtener_sedes.php";
    $(".div-shadow").removeClass("invisible");
    m.loadJson(urlPhp, function (array) {
      console.log(array);
      
    if (array.length==0) {
        $(".div-shadow").addClass("invisible");
        $("#visor").empty();
        $("#spnCantActividades").text(0);

                alertify
                     .alert("PFP", "No se encuentran actividades de la instancia seleccionada", function(){
            console.log("ok");
            
  });
        
    } else {
            
        $("#visor").empty();
       // console.log(convertJson(array[5].sede)); 
        //console.log(convertJson(array[5].sede).length );
       
        var limite = array.length;
        $("#spnCantActividades").text(limite);

        var  htmlTable = $(
            "<table  id='tbl-reportes' class='table '>" +
            "<thead>" +
            "<tr>" +
              "<th class='text-center' scope='col'>Nombre</th>" +
              "<th class='text-center' scope='col'>Sede</th>" +       
              "<th class='text-center' scope='col'>Inicio</th>" + 
              "<th class='text-center' scope='col'>Fin</th>" + 
              "<th class='text-center' scope='col'>Grupos</th>" +           
            "</tr>" +
            "</thead>" +
            "</table>"
          );
        //console.log(limite);
        
       
        for (let index = 0; index < limite; index++) {
          // console.log(array[index].instancia );
           console.log(array[index].sede );
           
           $(htmlTable).append( v.tableExcel( array[index].nombre_actividad,  convertJson(array[index].sede)  ));
          //v.tableExcel( array[index].nombre,  convertJson(array[index].sede)  )
     
           
       }
   
       $(".div-shadow").addClass("invisible");
   
       $("#visor").append(htmlTable);

       
    }

     });
}

function convertJson(array) {
    var tmpArray = JSON.parse(array);
    return tmpArray;
}



function jsonToArray(arrayJson ) {
    var tmpArray = [];
    for (let index = 0; index < arrayJson.length; index++) {
        tmpArray.push(arrayJson[index].nombre);        
    }
    return tmpArray;
}