"use strict";
const m = new Model(),  v = new View();
var userInfo, tmpDataset   ;


$(document).ready(function () {
    loadUserInfo();
    m.loadJson("../../main_app/obtener.php", loadMod);
});


function loadUserInfo() {
    userInfo =  m.getSession();
    v.userInfo(userInfo, $("#infoUser"));
    
}

function loadMod() {
    tmpDataset =  m.filterByInstance(userInfo.instancia)
    v.tablePfp($("#tablaPfp"), tmpDataset );
    eventViewDetails();

}




function eventViewDetails() {
    //Manjeadores de eventos
    $(".fa-view-details").click(function (e) { 
        e.preventDefault();        
        let tmpId = $(this).attr("id").slice(6);        
        //console.log(tmpDataset[ tmpId ]);
        m.setRecordinSession(tmpDataset[ tmpId ]);
        window.location.assign("detalle_actividad.php");
    });
    
}



