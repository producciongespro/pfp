"use strict";
const m = new Model(),  v = new View();
var userInfo;


$(document).ready(function () {
    loadUserInfo();
    m.loadJson("../../main_app/obtener_actividades_por_instancia.php?id_instancia="+userInfo.id_instancia, function (array) { 
        console.log("array", array);        
        loadMod(array);
     });
});


function loadUserInfo() {
    userInfo =  m.getSession();
    v.userInfo(userInfo, $("#infoUser"));
    
}

function loadMod(array) {    
    v.tablePfp($("#tablaPfp"), array );
    // Carga el nombre de la instancia en la GUI:
    $("#spnInstancia").html(array[0].nombre );
    eventViewDetails(array);
}




function eventViewDetails(array) {
    //Manjeadores de eventos
    $(".fa-view-details").click(function (e) { 
        e.preventDefault();        
        let tmpId = $(this).attr("id").slice(6);        
        //console.log(tmpDataset[ tmpId ]);
        m.setRecordinSession(array[ tmpId ]);
       window.location.assign("detalle_actividad.php");
    });
    
}



