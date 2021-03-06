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
    m.loadJson("../../main_app/obtener_limitaciones_por_instancia.php?id_instancia="+userInfo.id_instancia, function (array) {  
        loadMod(array);
    });
}


function loadMod(array) {    
    const tmpRecord = array;    
    //console.log("***LIMITACIONES****", tmpRecord );    
    //si el registro está vacío habilite el botón para publicar 
    //Realiza un insert en la BD
    if (tmpRecord.length == 0) {
        console.log("vacio");
        $("#btnEnviarLimitaciones").off("click");                
        //$("#btnEnviarLimitaciones").val("Enviar Limitaciones");
        $("#btnEnviarLimitaciones").click(function () { 
            m.uploadLimitation($("#txtInterna").val(), userInfo.id_instancia, loadDataSet );                        
        });
    } else {
        console.log("Registro de limitaciones lleno");        
        v.limitTxt(tmpRecord[0].interna, "#txtInterna" ); 
        //Deshabilita la caja de texto:
        $("#txtInterna").prop("readonly", true);
        //Muestra el botón de edición:
        $("#btnActivarEdicion").slideDown();        
        //Oculta el botón de enviar:
        $("#btnEnviarLimitaciones").hide();     
        // Manejado de eventos para el botón del lapiz (activar edición):
        $("#btnActivarEdicion").off("click");
        $("#btnActivarEdicion").click(function (e) { 
            e.preventDefault();            
            $("#txtInterna").prop("readonly", false);
            $("#btnEnviarLimitaciones").slideDown();            
        });

   //desactiva el evento clic del botón enviar para activar un evento nuevo que actualiza el registro
   $("#btnEnviarLimitaciones").off("click");        
   //$("#btnEnviarLimitaciones").val("Actualizar Limitaciones");
        $("#btnEnviarLimitaciones").click(function (e) { 
            e.preventDefault();
            m.updateLimitations(tmpRecord[0].id_limitacion, $("#txtInterna").val(),  loadDataSet );
        });

    }     
}



function desableText() {
    console.log("registro enviado");
    
}