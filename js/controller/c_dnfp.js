"use strict";
const m = new Model(), v = new View;
var userInfo, tmpRecord;
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
        eventUploadFile();
    } else {
        console.log("lleno");     
        v.fileField("#colFile", tmpRecord );
        eventDeleteFile();
    }    
}


function eventDeleteFile() {
    $(".fa-delete-x").click(function (e) { 
        e.preventDefault();
        alertify.confirm("Sistema PFP", "¿Realmente desea eliminar el archivo?"  ,
  function(){
    console.log("ok");
    m.deleteFile(tmpRecord.id_archivo, renderFieldUpload );            
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
    
    $("#btnEnviar").click(function (e) { 
        e.preventDefault();        
        m.uploadFile(userInfo.id_instancia, $("#inputGroupFile01"), loadDataset  );       
      
    });
}

