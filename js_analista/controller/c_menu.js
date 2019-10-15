"use strict";
const m = new Model(), v = new View();
var  user,
dataObjetivos, //arreglo de la tabla objetivos
tmpId =  "",  //registro actual con los campos de id para cambiar el estado del archivo, justifcacion y limitaciones
//El id se carga cuando se abre un modal para asignarle el id que le corresponde
//instancia seleccionada
tmpIdInstancia;

$(document).ready(function () {
    $(".div-shadow").removeClass("invisible");
    loadUserInfo();
    //evento para cerar secion:
    eCloseSession();    
    loadDataset();
});

function loadUserInfo() {  
    user = m.getSession();    
    v.userInfo(user,  $("#infoUser"));    
}


function loadDataset() {
    // Primera carga de datos: el dataset de todas las actividades PFP
    m.loadJson("../../main_app/obtener_planes_activos.php", function (array ) { 
        console.log("planes activos", array);                               
        rebnderizarTabla(array);
        cargarObjetivos();
        //Manejadores de eventos:
        eJust(array);
        eLimit(array);
        eFile(array);
        handlerShowModalObjetivos();
        eModalUnlock();
        eSendStatus();
        eSendUnlock();
     });
      
}

function cargarObjetivos(  ) {
    m.loadJson("../../main_app/obtener_objetivos", function (array) { 
        console.log("Objetivos", array);
        dataObjetivos = array;        
     })
}


function rebnderizarTabla(array) {
    //console.log("Array encabezado", array);
    v.table(array, "#colTable");    
    v.ocultarSpiner();    
}


function eJust(array) {
    //Ver jsutificaciones
    $(".fa-justif").off("click");
    $(".fa-justif").click(function () { 
        let idItem = $(this).attr("id").slice(6);
        //ide de la justificacion:
        tmpId = array[idItem].justificacion;
        //títiulo del modal 
        $("#spnInstancia").text(array[idItem].nombre );
        //carga de la justificacion
        $("#txtJustificacion").val(array[idItem].justificacion);   
        $("#mdljustificaciones").modal();
        
    });
}

function eLimit(array) {
    $(".fa-limit").off("click");
    $(".fa-limit").click(function (e) { 
       tmpIdInstancia = e.target.dataset.id_instancia;
       let item = e.target.dataset.item;
       console.log("item", item);
       
        $("#mdllimitaciones").modal();
        //Se carga con el id de la limitacion
        //tmpId = eLimit[idItem].interna;               
        v.limitaciones( array[item].interna );       
        
    });
}

function eFile(array) {  
    $(".fa-file-pdf").off("click");
    $(".fa-file-pdf").click(function () { 
        let idItem = $(this).attr("id").slice(6);
        //Carga el id del archivo en la tabla
        //tmpId = instancias[idItem].id_archivo;
        v.pdf( "../"+ array[idItem].url, "#mdlBodyArchivo" );
        //console.log(idItem);
        
        $("#mdlarchivos_enviados").modal();
        
    });
    
}

function eSendStatus() {
    //Estados aprobado o corregir de: justificacion, archivo y limitaciones
    $(".fa-status").click(function (e) {         
        let tabla = e.target.dataset.tabla;
        let campo = e.target.dataset.campo;
        let condicion = e.target.dataset.condicion;
        console.log( "-1: Tabla", tabla, "-2: Campo", campo, "-3: Condicion", condicion );      
        m.actualizarCondicionElemento(tmpIdInstancia, tabla, campo, condicion);
        //Cierra el modal     
       $("#mdl"+tabla ).modal("hide");
    });
}

function eViewActividades() {
    $(".fa-view-details").off("click");
    $(".fa-view-details").click(function () { 
        tmpIdInstancia = $(this).attr("instancia");
        
        
        //console.log(tmpInstancia);
        m.setInstanciaInlocal(tmpInstancia);
        window.location.assign("lista_pfp.php");
        
        
    });
    
}

function eModalUnlock() {   
    //Evento del candado
    $(".fa-unlock").off("click");
    $(".fa-unlock").click(function (e) {         
        tmpIdInstancia = e.target.dataset.id_instancia;      
                //modal
                $("#mdlUnlock").modal();
      
    });


    
}

function eSendUnlock () {
                        //evento clic a la alerta Avalado - Corregir           
                        $(".btn-desbloquear").off("click");
                        $(".btn-desbloquear").click(function (e) {
                            let idEstado = e.target.dataset.idestado;
                            m.unlockPfp(tmpIdInstancia,idEstado,loadDataset );
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
        const idInstancia = this.title;
        const nombreInstancia = this.dataset.nombre;            
        console.log("Instancia",  nombreInstancia);
        let tmpObjetivos = []
        for (let index = 0; index < dataObjetivos.length; index++) {
            if (dataObjetivos[index].id_instancia == idInstancia ) {
                tmpObjetivos.push(dataObjetivos[index]);
            }            
        }


        v.renderObjetivos(tmpObjetivos);         
        $("#spnNombreInstancia").html(nombreInstancia);
        $("#mdlObjetivos").modal();
        
    });
    

}