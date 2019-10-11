"use strict";
const m = new Model(), v = new View();
var plan;
var user;
//arreglos:
var arrayJustificacion=0;
var arrayObjetivos=0;
var arrayLimitaciones=0;
var arrayArchivoPDF=0;
var arrayActividades=0;

//estados de cada sección:
var secciones = {
    justificacion : false,
    objetivos : false,
    limitaciones : false,
    archivoPdf : false,
    agregarActividad : false,
    verActividades : false
}



$(document).ready(function () {
    $(".div-shadow").removeClass("invisible");
    loadUserInfo();
    //evento para cerar secion:
    handlerEvents();
    // carga el json de actividades para mostrar el aviso del estado
    loadDataset();
});


function loadDataset() {

    m.loadJson("../../main_app/obtener_plan.php?id_instancia="+user.id_instancia, function (array) { 
        //console.log(data);        
        //Deermina el estado pfp muestra la notificación y activa los botones
        console.log("*********** Contenido del array de planes:",  array[0]);
        plan =  array[0];   
        console.log("Plan PFP", plan);      
        //console.log("------------ Valor del estado: ", plan.id_estado, plan.etiqueta_estado,  "-----------------");  
        
        //Habilitar botones del menú:               
        // -- 1 - Ver planes
        if (plan.etiqueta_estado == "Vacio" || plan.etiqueta_estado == "Edicion" ||  plan.etiqueta_estado == "Iniciado"  ) {
            $("#btnJustificacion").prop("disabled", false);
            secciones.justificacion=true;
        }       
        
        // -- 2 - Ver Objetivos
        if (plan.id_justificacion !=  null ) {        
            if ( plan.etiqueta_estado == "Vacio" || plan.etiqueta_estado == "Edicion") {
                $("#btnObjetivos").prop("disabled", false);
                secciones.objetivos = true;        
            } 
        }

        // -- 3 - Ver Limitaciones
        if (plan.cantidad_objetivos > 0 ) {        
            if ( plan.etiqueta_estado == "Vacio" || plan.etiqueta_estado=="Edicion") {
                $("#btnLimitaciones").prop("disabled", false);
                secciones.limitaciones = true;     
            } 
        }

      
        // -- 4 - Ver archivos    
        if (plan.id_limitacion != null ) {
            if (plan.etiqueta_estado == "Vacio" || plan.etiqueta_estado=="Edicion") {
                $("#btnArchivoPfp").prop("disabled", false);    
                secciones.archivoPdf = true;
            }
        }

        // -- 5 - crear actividades pfp    
        if (plan.id_archivo != null) { 
            if (plan.etiqueta_estado == "Vacio" || plan.etiqueta_estado == "Edicion") {
                $("#btnActividad").prop("disabled", false);     
                secciones.agregarActividad = true;
            } 
        }

        
        // -- 6 - Ver planes
            if (plan.etiqueta_estado == "Iniciado") {
                $("#btnVerPfP").prop("disabled", false);
                secciones.verActividades = true;        
            }            
        

              

   cargarEstado(plan.etiqueta_estado);

});
    
}
function cargarEstado (estado) {    
        //console.log("--- Estado del PFP: ", estado, "----------");

    switch (estado) {
        case "Vacio":            
            v.alertMasg("No se ha creado ninguna actividad.");                       
        break;
        case "Edicion":            
            v.alertMasg("PFP no enviado");         
            secciones.verActividades = true;
        break;
        case "Enviado":        
            v.alertMasg("PFP enviado");                
            secciones.verActividades = true;        
        break;

        case "Avalado":
            v.alertMasg("PFP avaldo por la asesorìa del IDP."); 
            secciones.verActividades = true;                    
        break;

        case "Corregir":        
            v.alertMasg("El PFP debe ser corregido.");        
            secciones.verActividades = true;        
            //activateRejected();
        break;    
        default:
            console.log("Opciòn fuera de rango");            
        break;
    }

    m.setStatus(estado);
    $(".div-shadow").addClass("invisible");
}



function handlerBotonesMenu() {

    $(".btn-menu").click(function (e) { 
        e.preventDefault();
        let opcion = e.target.id;

        switch (opcion) {
            case "btnJustificacion":
                if (secciones.justificacion) {
                    window.location.href = "./justificacion.php";
                }    
            break;
            case "btnObjetivos":
                if (secciones.objetivos) {
                    window.location.href = "./objetivos.php";
                }    
            break;
            case "btnLimitaciones":
                if (secciones.limitaciones) {
                    window.location.href = "./limitaciones.php";
                }    
            break;
            case "btnArchivoPfp":
                if (secciones.archivoPdf) {
                    window.location.href = "./archivo_dnfp.php";
                }    
            break;
            case "btnActividad":
                if (secciones.agregarActividad) {
                    window.location.href = "./actividad_pfp.php";
                }    
            break;
            case "btnVerPfP":
                if (secciones.verActividades) {
                    window.location.href = "./lista_pfp.php";
                }    
            break;          

            default:
                break;
        }

    });
        
}

function handlerEvents() {

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

function loadUserInfo() {    
    user = m.getSession();    
    v.userInfo(user,  $("#infoUser"));  
   // console.log(user);
      
}



