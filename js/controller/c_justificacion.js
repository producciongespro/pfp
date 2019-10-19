"use strict";
const m = new Model(), v = new View;
var cont=1, userInfo;


$(document).ready(function () {
    loadUserInfo();
    loadDataSet();

});

function loadUserInfo() {
    document.getElementById("txtJustificacion").readOnly=false;  
    userInfo =  m.getSession();
    v.userInfo(userInfo, $("#infoUser"));
    $("#txtInstancia").val(userInfo.instancia);

}



//TODO: debe cargar solamente la justificacion - Cambiar el nombre al php
//Debe cca


function loadDataSet() {
    //Carga la justificación 
    m.loadJson("../../main_app/obtener_justificacion_por_instancia.php?id_instancia="+userInfo.id_instancia, loadApp ); 
}


function loadApp(array) {
    //var dataSet = m.filterByInstance(userInfo.instancia);
    const dataSet = array;
    if (dataSet.length > 0 ) {
        console.log("lleno");
        //Muestra el botón de edición 
        v.justify(dataSet, "#txtJustificacion" )
        //Activa la edición del textarea para poder enviar la justificacion y actualizarla en bd
        prepareUpdate(dataSet);

    } else {
        console.log("vacio");       

        //Se habilita la funcionalidad para enviar la justificación:
        $("#btnEnviar").slideDown(1000);
            //Evento clic del botón enviar
            $("#btnEnviar").off("click");
            $("#btnEnviar").click(function () {
                if ($("#txtJustificacion").val() == "") {
                    alertify
                    .alert("Sistema PFP", "Debe escribir la justificación en el espacio correspondiente.", function(){
                        console.log("ok");
                        
                    });
                }else {
                    m.uploadJustify( "../../main_app/agregar_justificacion.php", $("#txtJustificacion").val(), userInfo.id_instancia, loadDataSet );
                }
                
        });   
    }
    
    
}




function prepareUpdate(dataSet) {
    //almacena el id de la justificacion
    var idJust = dataSet[0].id;
    //Oculta el botón enviar
    $("#btnEnviar").fadeOut();
    //Muestra el botón activa edición (lapiz)
    $("#btnActivarEdicion").slideDown();
    //Deshabilita la caja de texto para que no se pueda editar
    document.getElementById("txtJustificacion").readOnly=true;


    //Activa evento de edición
    $("#btnActivarEdicion").off("click");
    $("#btnActivarEdicion").click(function (e) {
        //Se habilita la caja de texto
        document.getElementById("txtJustificacion").readOnly=false;
        //Se muestra el botón actualizar
        
        //Evento para el botón "actualizar" 
        $("#btnActualizarJustif").slideDown();
        $("#btnActualizarJustif").off("click");       
            $("#btnActualizarJustif").click(function () { 
                //Actualización del campo
                
                if ($("#txtJustificacion").val() == "") {
                    alertify
                    .alert("Sistema PFP", "Debe escribir la justificación en el espacio correspondiente.", function(){
                        console.log("ok");
                        
                    });
                }else {
                    m.actualizarCampo("../../main_app/actualizar_justificacion.php", "id_justificacion", idJust, $("#txtJustificacion").val(), userInfo.id_instancia, successMsg );                    
                }                
            });    
        
    });
}




function successMsg () {    
    $("#btnActualizarJustif").slideUp();
    document.getElementById("txtJustificacion").readOnly=true;

    
}