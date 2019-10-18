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

        //5 Agregar actividades cuando se ha enviado pfp: (Se habilita si el estado es Agregar) 
              if (plan.etiqueta_estado == "Agregar") {
                $("#btnActividad").prop("disabled", false);  
            }
       

        // -- 6 - Ver planes: Se habilita solo si estado es diferente de vacio. Es decir, si tiene al menos una actividad
        if (plan.etiqueta_estado != "Vacio" ) {
                $("#btnVerPfP").prop("disabled", false);                
        }
        
        // ******* Botones en estado CORREGIR *********************
        if (plan.etiqueta_estado == "Corregir") {
            // 1 - Justificación:
            if (plan.e_justificaciones == "Rechazado") {
                console.log("justificacion rechazado");                
                let tmpBoton = $("#btnJustificacion");
                $(tmpBoton).prop("disabled", false);               
                $(tmpBoton).html(  $(tmpBoton).text( ) +" "+ "&#9971;" );                
            }
            // 2 - Objetivos:
            if (objetivoRechazado == "true") {                
                console.log("objetivo rechazado");                
                let tmpBoton = $("#btnObjetivos");
                $(tmpBoton).prop("disabled", false);               
                $(tmpBoton).html(  $(tmpBoton).text( ) +" "+ "&#9971;" );  
            }
             // 3 - Limitaciones:
            if (plan.e_limitaciones == "Rechazado") {
                console.log("Limitaciones rechazado");                
                let tmpBoton = $("#btnLimitaciones");
                $(tmpBoton).prop("disabled", false);               
                $(tmpBoton).html(  $(tmpBoton).text( ) +" "+ "&#9971;" );                  
            }
            // 4 - Archivo PDF:
             if (plan.e_archivo == "Rechazado") {                
                console.log("Archivo rechazado");                
                let tmpBoton = $("#btnArchivoPfp");
                $(tmpBoton).prop("disabled", false);               
                $(tmpBoton).html(  $(tmpBoton).text( ) +" "+ "&#9971;" );                    
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
        case "Eliminar":        
            v.alertMasg("Desbloqueado para eliminar actividades");                
        break;
        case "Agregar":        
            v.alertMasg("Desbloqueado para agregar actividades");                
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
                    if (plan.archivo_agregado == true  || plan.etiqueta_estado == "Agregar" ) {
                        window.location.href = "./actividad_pfp.php";
                    }
            break;
            case "btnVerPfP": 
                if (plan.etiqueta_estado != "Vacio"  ) {
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



