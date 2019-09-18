"use strict";

var m = new Model (), v = new View (),
target;

$(document).ready(function () {
   
    loadMod();
    eSaveChanges();
});

function loadMod() {
    $(".div-shadow").removeClass("invisible");
    m.loadJson("../../server/obtener.php", function (array) {
        console.log(array);
         
        renderTable(array);
     });
}


function eSaveChanges() {
    $("#btnSave").click(function (e) { 
        $("#exampleModal").modal('hide');

        var formData = new FormData();
        formData.append( "id", target );
        formData.append( "objetivo", $("#txtObjetivo").val() );

        formData.append( "necesidad", $("#txtNecesidad").val() );
        
      m.conectDataAjax("../../server/actualizar_elemento.php", formData);
        
    });
    
}



function renderTable(dataset) {
    $(".div-shadow").addClass("invisible");  
    //console.log("dataset desde el controler");
    //console.log(dataset);
    v.table(dataset, "#visor");

    //eventos de de componentes de tabla
    // botón editar y botón eliminar

    //Evento de eliminar registro
    $(".btn-del").click(function () { 
        
        target = $(this).attr("target");
        console.log("target: " + target);     
        
            alertify.confirm( nameSistem, "¿Desea realmente eliminar el registro?",
            function(){
                // si da clic en OK:
              console.log("Aceptar");

                //obtiene el usuario que ejecuta la acción:
                var nombreUsuario = sessionStorage.getItem("nombre") + " " +  sessionStorage.getItem("apellido1") + " " +  sessionStorage.getItem("apellido2");
                console.log(nombreUsuario);
                var formData = new FormData();
                formData.append("idVal", target );
                formData.append("nombreUsuario", nombreUsuario );
                m.conectDataAjax("../../server/eliminar_registro.php", formData );
                //loadModloadMod();
  
            },
            function(){
             console.log("Cancelar");
             
            });
        
    });

    //Evento de edición
    $(".btn-edit").click(function (e) { 
        e.preventDefault();
        target = $(this).attr("target");
        //console.log("edit: " + target);
        //console.log(m.getItemByField("id", target)); 
        m.setJsonInSession( "record", m.getItemByField("id", target) );     
        
        
        $("#txtObjetivo").val(m.getFieldArrayJson("record", "objetivo"));
        $("#txtNecesidad").val(m.getFieldArrayJson("record", "necesidad"));

        $("#exampleModal").modal();  

    });

    loadDataTable();
    
    
}



function loadDataTable() {
    $('#tblReportes').DataTable( {
                "language": {
                    "url": "http://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                }
    } );
}