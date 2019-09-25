"use strict";
const m = new Model(), v = new View();
var userInfo;
$(document).ready(function () {
    loadUserInfo();
    loadDataSet();
});


function loadUserInfo() {
    userInfo =  m.getSession();
    v.userInfo(userInfo,  $("#infoUser"));
    
}

function loadDataSet() {
    m.loadJson("../../main_app/obtener_limitaciones.php", loadMod);
}


function loadMod() {
    var tmpRecord = m.filterByInstance(userInfo.instancia)[0];
    console.log(tmpRecord);
    //si el registro está vacío habilite el botón para publicar 
    //Realiza un insert en la BD
    if (tmpRecord == undefined) {
        console.log("vacio");
        
        $("#btnEnviarLimitaciones").val("Enviar Limitaciones");
        $("#btnEnviarLimitaciones").click(function () { 
            m.uploadLimitation($("#txtInterna").val(), userInfo.instancia, loadDataSet );                        
        });
    } else {
        console.log("lleno");

        
        v.limitTxt(tmpRecord.interna, "#txtInterna" );      
        
        
        //desactiva el evento clic del botón enviar para activar un evento nuevo que actualiza el registro

        $("#btnEnviarLimitaciones").off("click");
        
        $("#btnEnviarLimitaciones").val("Actualizar Limitaciones");
        $("#btnEnviarLimitaciones").click(function (e) { 
            e.preventDefault();
            m.updateLimitations(tmpRecord.id, $("#txtInterna").val(),  loadDataSet );
        });

    }     
}



function desableText() {
    console.log("registro enviado");
    
}