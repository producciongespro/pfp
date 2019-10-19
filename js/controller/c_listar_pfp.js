"use strict";
const m = new Model(),  v = new View();
var userInfo;
var dataset;



$(document).ready(function () {
    $(".div-shadow").removeClass("invisible");    
    cargarDataset(function (array) { 
        loadMod(array)
     });
});

function cargarDataset(loadMod) {
    loadUserInfo();
    m.loadJson("../../main_app/obtener_actividades_por_instancia.php?id_instancia="+ userInfo.id_instancia, function (array) { 
        console.log("**********Array json *********");        
        loadMod(array);
        $(".div-shadow").addClass("invisible");
     });
}


function loadUserInfo() {
    userInfo =  m.getSession();
    console.log("userInfo", userInfo); 
    v.userInfo(userInfo, $("#infoUser"));
    
}

function loadMod(array) {       
    dataset=array;
    console.log("datasetd", dataset);
         
    v.tablePfp($("#tablaPfp"), dataset, userInfo.pfpStatus );  
    eventViewDetails();
    handlerEliminarActividad()
 
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
    

}


function handlerEliminarActividad() {
    $(".fa-del-activity").off("click");
    $(".fa-del-activity").click(function (e) {
        var idActividad =  e.target.dataset.item;
        e.preventDefault();
        alertify.confirm("Sistema PFP", "¿Desea eliminar la actividad?",
                function(){
                    //Eliminar actividad:                   
                    console.log("idActividad", idActividad);                    
                    m.eliminarActividad(idActividad, function () {  
                         //Recarga el json y el módulo una vez eliminado el registro de la actividad                         
                         cargarDataset(function (array) { 
                            loadMod(array)
                         });
                         alertify.success('Actividad eliminada satisfactoriamente');     
                    })                   
                },
                function(){
                    console.log("cancel");
                    
                });
        
    });
}


function eventViewDetails() {
    //Manjeadores de eventos
    $(".fa-view-details").off("click");
    $(".fa-view-details").click(function (e) { 
        e.preventDefault();        
        let tmpId = $(this).attr("id").slice(6);        
        //console.log(tmpDataset[ tmpId ]);
        m.setRecordinSession(dataset[ tmpId ]);
        window.location.assign("detalle_actividad.php");
    });
    
}

function eventSendPfp() {
    $("#btnSendPfp").off("click");
    $("#btnSendPfp").click(function (e) {         
        alertify.confirm (
            "Sistema PFP - Atención", "Una vez que envíe el documento PFP no podrá agregar más actividades ni tendrá posibilidad de editar ningún campo hasta que haya sido notificado por la asesorìa del IDP. ¿Desea enviar el documento PFP de todas formas?  ",
                function(){
                    //envio de documento pfp
                    console.log("envio");
                    m.sendPfp(userInfo.id_instancia, function () {                         
                        cargarDataset(function (array) {
                            statusEnviado(); 
                            loadMod(array)
                         });
                     });                    
                },
                function(){
                    console.log("Se cancela envio");                    
                }).set('labels', {ok:'Enviar PFP', cancel:'Cancelar'});
        
    });
}


function statusEnviado() {
    //guarda en sesión el status de pfp enviado
    m.setStatus("Enviado");
    userInfo.pfpStatus = "Enviado";
    //Oculta el botón  enviar pfp
    v.messageStatusPfp("Enviado");
    
}

