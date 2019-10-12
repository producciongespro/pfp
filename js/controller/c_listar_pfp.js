"use strict";
const m = new Model(),  v = new View();
var userInfo;
var dataset;



$(document).ready(function () {
    $(".div-shadow").removeClass("invisible");
    loadUserInfo();
    m.loadJson("../../main_app/obtener_actividades_por_instancia.php?id_instancia="+ userInfo.id_instancia, function (array) { 
        //console.log("Array lista", array);        
        loadMod(array);
        $(".div-shadow").addClass("invisible");
     });
});


function loadUserInfo() {
    userInfo =  m.getSession();
    //console.log(userInfo);    
    v.userInfo(userInfo, $("#infoUser"));
    
}

function loadMod(array) {       
    dataset=array;     
    v.tablePfp($("#tablaPfp"), dataset );
    
   
    eventViewDetails();
    //eventDeleteActivity(tmpDataset);
/* 
    //Habilita o deshabilita el campo enviar pfp según el estado del pfp
    //console.log(userInfo.pfpStatus);    
    v.messageStatusPfp(userInfo.pfpStatus);
    
    //verifica el estado del pfp y activa el evento  enviar si no se ha enviado el pfp
    if (userInfo.pfpStatus != "Enviado" ) {
        eventSendPfp();               
    };
    if (userInfo.pfpStatus != "Corregir" ) {
        eventSendPfp();               
    };
    
*/
}


function eventDeleteActivity(array) {
    $(".fa-del-activity").click(function (e) {
        var target =  $(this).attr("target");
        e.preventDefault();
        alertify.confirm("Sistema PFP", "¿Desea eliminar la actividad?",
                function(){
                    //Eliminar actividad:                   
                    console.log("Id elemento a eleminar",   array[target].id_plan );

                    m.eliminarRegistro( "id_plan", array[target].id_plan, "planes", function () {
                         //Recarga el json y el módulo una vez eliminado el registro de la actividad
                         m.loadJson( "../../main_app/obtener_actividad.php?id_instancia="+ userInfo.id_instancia, loadMod);
                    } )                   
                },
                function(){
                    console.log("cancel");
                    
                });
        
    });
}


function eventViewDetails() {
    //Manjeadores de eventos
    $(".fa-view-details").click(function (e) { 
        e.preventDefault();        
        let tmpId = $(this).attr("id").slice(6);        
        //console.log(tmpDataset[ tmpId ]);
        m.setRecordinSession(dataset[ tmpId ]);
        //window.location.assign("detalle_actividad.php");
    });
    
}

function eventSendPfp() {
    $("#btnSendPfp").click(function (e) { 
        
        alertify.confirm("Sistema PFP - Atención", "Una vez que envíe el documento PFP no podrá agregar más actividades ni tendrá posibilidad de editar ningún campo hasta que haya sido notificado por la asesorìa del IDP. ¿Desea enviar el documento PFP de todas formas?  ",
                function(){
                    //envio de documento pfp
                    console.log("envio");
                    m.sendPfp(userInfo.instancia, statusEnviado  )
                    
                },
                function(){
                    alertify.error('Cancel');
                });
        
    });
}


function statusEnviado() {
    //guarda en sesión el status de pfp enviado
    m.setStatus("Enviado");
    //Oculta el botón  enviar pfp
    v.messageStatusPfp("Enviado");
    
}

