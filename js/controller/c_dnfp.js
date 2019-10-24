"use strict";
const m = new Model(), v = new View;
var userInfo, tmpRecord;
var estadoArchivo = null;
$(document).ready(function () {
    loadUserInfo();
    loadDataset();
    
});



function loadUserInfo() { 
    userInfo =  m.getSession();   
    v.userInfo(userInfo, $("#infoUser"));
    
}


function loadDataset() {
    m.loadJson("../../main_app/obtener_archivos_por_instancia.php?id_instancia="+userInfo.id_instancia, function (array) { 
        loadMod (array[0] );
     } );
}



function loadMod(array) {      
    tmpRecord = array;
    console.log("Archivo pdf", tmpRecord);
    //si el registro está vacío habilite la funcionalidad para publicar 
    //Realiza un insert en la BD
    if (tmpRecord == undefined) {
        estadoArchivo=null;
        eventUploadFile();
    } else {
        console.log("lleno");     
        v.fileField("#colFile", tmpRecord );
        estadoArchivo="enviado";
        eventDeleteFile();
    }    
}


function eventDeleteFile() {
    $(".fa-delete-x").click(function (e) { 
        e.preventDefault();
        alertify.confirm("Sistema PFP", "¿Realmente desea eliminar el archivo?"  ,
  function(){
    console.log("eliminando archivo", tmpRecord.id_archivo);
    estadoArchivo = "eliminado";
    //m.eliminarArchivo ("id_archivo", tmpRecord.id_archivo, renderFieldUpload  );
    renderFieldUpload();
  },
  function(){
    console.log("cancel");    
  });        
    });
}

function renderFieldUpload() {
    v.uploadFile("#colFile");
    eventUploadFile();
    
}


function eventUploadFile() {
    $("#inputGroupFile01").change(function (e) { 
        e.preventDefault();
        console.log(this.files[0].name  );
        $("#lblfile1").html(this.files[0].name);
        $("#btnEnviar").prop("disabled", false ); 
        $("#btnEnviar").slideDown();       
    }); 
    $("#btnEnviar").off("click");
    $("#btnEnviar").click(function (e) { 
        e.preventDefault();
        if (estadoArchivo == null) {
            console.log("enviar archivo");
            $("#btnEnviar").html("Enviado archivo, por favor espere..."); 
            $("#btnEnviar").prop("disabled", true);            
            m.uploadFile(userInfo.id_instancia, $("#inputGroupFile01"), loadDataset  );           
        } else {
            console.log("actualizar archivo");
            $("#btnEnviar").html("Enviado archivo, por favor espere..."); 
            $("#btnEnviar").prop("disabled", true);            
            m.actualizarArchivo(userInfo.id_instancia, $("#inputGroupFile01"), loadDataset );
        }        
        
      
    });
}

