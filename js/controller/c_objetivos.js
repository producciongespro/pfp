"use strict";
const m = new Model(), v = new View;
var userInfo;


$(document).ready(function () {
    loadUserInfo();
    loadDataset();
    handlerEvent();
});


function loadDataset() {
    //Limpia campos en caso de que estén con texto:
    $("#txtNeed").val("");
    $("#txtObj").val("");
    m.loadJson("../../main_app/obtener_objetivos_por_instancia.php?id_instancia="+userInfo.id_instancia, function (array) { 
        loadMod (array);
     } ); 
}


function handlerEvent() {
    //Evento botòn enviar
    $("#btnEnviarObjetivos").click(function () {  
        if ($("#txtNeed").val() == "" || $("#txtObj").val() ==""  ) {
            alertify.alert("Datos incompletos", "Debe llenar todos los campos." );
        } else {
            m.uploadObjective(userInfo.correo, userInfo.id_instancia, $("#txtNeed").val(), $("#txtObj").val(), loadDataset  )
        }   
    });


    
}


function loadMod (array) {
    if (array.length >= 0) {
        table(array);
    }       
}


function table ( array) {
    v.table(array, "#contTable" );
    //módulo borrar registro
    $(".btn-del").click(function () {
        var tmpId = $(this).attr("target");
        alertify.confirm("Confirmación de borrado.", "¿Desea eliminar el registro?",
            function(){
                console.log("OK");
                m.delRecord(tmpId, "objetivos", loadDataset);
            },
            function(){
                console.log("Cancel");
                
            });
        
                
    });
    //Módiulo Editar
    $(".btn-edit").click(function () {
        let num = $(this).attr("id").slice(6),
        numId = $(this).attr("target");

       v.edit(array[num].necesidad, array[num].objetivo );               
        $("#modalObj").modal();

        $("#btnUpdate").off("click");

        $("#btnUpdate").click(function (e) { 
            e.preventDefault();
            m.updateObjNeed(numId, $("#txtNeedEdit").val(), $("#txtObjEdit").val(), loadDataset );
            $("#modalObj").modal( 'hide' );
        });                    
    });

    $(".btn-forbidden").click(function (e) { 
        e.preventDefault();
        alertify
            .alert("Aviso del Sistema PFP", "Esta información no se puede eliminar debido a que ya está asociada a una actividad del PFP. En este caso lo que debe hacer es editarla.", function(){
            console.log("ok");            
  });
    });
}






function loadUserInfo() {
    userInfo =  m.getSession();
    v.userInfo(userInfo,  $("#infoUser"));
    
}
















