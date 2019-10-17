"use strict";
const m = new Model(), v = new View();
var plan;
var user;
var objetivoRechazado;


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
        plan =  array[0];
        objetivoRechazado = array[1];
        console.log("objetivoRechazado", objetivoRechazado);
        
        //Deermina el estado pfp muestra la notificación y activa los botones                
        console.log("Plan PFP", plan);      
        //console.log("------------ Valor del estado: ", plan.id_estado, plan.etiqueta_estado,  "-----------------");          
        //Habilitar botones del menú:               
        // ******** Ver planes en estado vacío:
        if (plan.etiqueta_estado == "Vacio" || plan.etiqueta_estado == "Edicion"  ) {
            // - Ver justificacion
            $("#btnJustificacion").prop("disabled", false);
            
               // -- 2 - Ver Objetivos
                if (plan.justificacion_agregado == true ) {                                         
                        $("#btnObjetivos").prop("disabled", false);                                  
                }
                // -- 3 - Ver Limitaciones
                if (plan.cantidad_objetivos > 0 ) {                            
                        $("#btnLimitaciones").prop("disabled", false);                                        
                }
                // -- 4 - Ver archivos    
                if (plan.limitacion_agregado == true ) {                    
                        $("#btnArchivoPfp").prop("disabled", false);                                        
                }
                // -- 5 - crear actividades pfp    
                if (plan.archivo_agregado == true ) {         
                        $("#btnActividad").prop("disabled", false);                                         
                }             
        }
        // -- 6 - Ver planes
        if (plan.etiqueta_estado == "Edicion" || plan.etiqueta_estado == "Enviado" ) {
                $("#btnVerPfP").prop("disabled", false);                
        }
        
        // ******* Botones en estado CORREGIR *********************
        if (plan.etiqueta_estado == "Corregir") {
            // 1 - Justificación:
            if (plan.e_justificaciones == "Rechazado") {
                $("#btnJustificacion").prop("disabled", false);
            }
            // 2 - Objetivos:
            if (objetivoRechazado == "true") {
                $("#btnObjetivos").prop("disabled", false);
            }
             // 3 - Limitaciones:
            if (plan.e_limitaciones == "Rechazado") {
                $("#btnLimitaciones").prop("disabled", false);
            }
            // 4 - Archivo PDF:
             if (plan.e_archivo == "Rechazado") {
                $("#btnArchivoPfp").prop("disabled", false);
            }
            
                         
        }                     
   cargarEstado(plan.etiqueta_estado);
   handlerBotonesMenu();
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
        break;
        case "Enviado":        
            v.alertMasg("PFP enviado");              
        break;
        case "Avalado":
            v.alertMasg("PFP avaldo por la asesorìa del IDP.");             
        break;
        case "Corregir":        
            v.alertMasg("El PFP debe ser corregido.");                
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
        //Por seguridad se valida los estados de cada componente del pfp para bloquear o desbloquear los botones:
        switch (opcion) {
            case "btnJustificacion":                    
                        window.location.href = "./justificacion.php";                                    
            break;
            case "btnObjetivos":                
                if (plan.justificacion_agregado == true ) {
                    window.location.href = "./objetivos.php";
                }
            break;
            case "btnLimitaciones":
                if (plan.cantidad_objetivos > 0) {                
                    window.location.href = "./limitaciones.php";                
                }
            break;
            case "btnArchivoPfp":            
                    if (plan.limitacion_agregado == true ) {
                        window.location.href = "./archivo_dnfp.php";                
                    }
            break;
            case "btnActividad":                
                    if (plan.archivo_agregado == true ) {
                        window.location.href = "./actividad_pfp.php";
                    }
            break;
            case "btnVerPfP": 
                if (plan.etiqueta_estado == "Edicion" || plan.etiqueta_estado == "Enviado"  ) {
                    window.location.href = "./lista_pfp.php";
                }                                  
            break;          
            default:
                console.log("Opcion fuera de rango");                
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



