"use strict";
const m = new Model(), v = new View();
var  user,
dsArchivos,  //url de archivos enviados
dsJustif, // Array con las justificaciones
dataset,  // dataset con todoas las actividades  enviadas por instancia.
dataObjetivos, //arreglo de la tabla objetivos
instancias, // Arreglo con los campos para formar la tabla.
tmpId =  "",  //registro actual con los campos de id para cambiar el estado del archivo, justifcacion y limitaciones
//El id se carga cuando se abre un modal para asignarle el id que le corresponde
tmpInstancia;

$(document).ready(function () {
    $(".div-shadow").removeClass("invisible");
    loadUserInfo();
    //evento para cerar secion:
    eCloseSession();
    //Evento para desbloquear el pfp
    eSendUnlock();
    loadDataset();
});

function loadUserInfo() {     
       
    user = m.getSession();    
    v.userInfo(user,  $("#infoUser"));    
}


function loadDataset() {
    // Primera carga de datos: el dataset de todas las actividades PFP
    m.loadJson("../../main_app/obtener_encabezados_activos.php", function (array) { 
        rebnderizarTabla(array);
     });
  
}


function rebnderizarTabla(array) {
    //console.log("Array encabezado", array);
    v.table(array, "#colTable");    
    v.ocultarSpiner();    
}


function eJust() {
    //Ver jsutificaciones
    $(".fa-justif").click(function () { 
        let idItem = $(this).attr("id").slice(6);
        //ide de la justificacion:
        tmpId = instancias[idItem].id_just;

        //títiulo del modal 
        $("#spnInstancia").text(instancias[idItem].nombre );
        //carga de la justificacion
        $("#txtJustificacion").val(instancias[idItem].justificacion);   
        $("#mdljustificaciones").modal();
        
    });
}

function eLimit() {
    $(".fa-limit").click(function () { 
        let idItem = $(this).attr("id").slice(6);
        $("#mdllimitaciones").modal();
        //Se carga con el id de la limitacion
        tmpId = instancias[idItem].id_lim;
               
        v.limitaciones( instancias[idItem].interna );       
        
    });
}


function eFile() {  
    
    $(".fa-file-pdf").click(function () { 
        let idItem = $(this).attr("id").slice(6);
        //Carga el id del archivo en la tabla
        tmpId = instancias[idItem].id_archivo;
        v.pdf( "../"+ instancias[idItem].urlArchivo, "#mdlBodyArchivo" );
        //console.log(idItem);
        
        $("#mdlarchivos_enviados").modal();
        
    });
    
}


function eSendStatus() {
    //Estado de justificacion y pdf
    $(".fa-status").click(function () { 
        let 
        table = $(this).attr("table"),
        field = $(this).attr("field"),
        status = $(this).attr("status");

        m.updateElementStatus(table, tmpId, field, status);

  
        //Cierra el modal 
        console.log("#mdl"+table);      

       $("#mdl"+table ).modal("hide");

    });
}

function eViewActividades() {

    $(".fa-view-details").click(function () { 
        let tmpInstancia = $(this).attr("instancia");
        
        
        //console.log(tmpInstancia);
        m.setInstanciaInlocal(tmpInstancia);
        window.location.assign("lista_pfp.php");
        
        
    });
    
}


function eModalUnlock() {
   
    //Evento del candado
    $(".fa-unlock").click(function (e) {         
                tmpInstancia = $(this).attr("instancia");       
                //modal
                $("#mdlUnlock").modal();
      
    });


    
}

function eSendUnlock () {
                        //evento clic a la alerta Avalado - Corregir           
                        $(".alert-unlock").click(function () {
                            let opt = $(this).attr("opt");                                 
                            m.unlockPfp(tmpInstancia, opt, loadDataset ); 
                              $("#mdlUnlock").modal("hide");                             
                        });  
}


function eCloseSession() {

    $("#lnkCloseSession").click(function (e) { 
        e.preventDefault();
        alertify.confirm("Aviso", "¿Desea cerrar sesión?", 
            function(){                
                window.location.assign("../../main_app/destroy_session.php");
        },
            function(){
                //Instrucción en caso de que se cancele
            //alertify.error('Cancel');
        });
        
    });    
}



function handlerShowModalObjetivos () {
    $(".btn-objetivos").click(function (e) { 
        e.preventDefault();               
        const instancia = this.title;            
        console.log("Instancia",  instancia);
        let tmpObjetivos = []
        for (let index = 0; index < dataObjetivos.length; index++) {
            if (dataObjetivos[index].instancia == instancia ) {
                tmpObjetivos.push(dataObjetivos[index]);
            }            
        }


        v.renderObjetivos(tmpObjetivos);         
        $("#spnNombreInstancia").html(instancia);
        $("#mdlObjetivos").modal();
        
    });
    

}