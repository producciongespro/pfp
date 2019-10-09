"use strict";
const m = new Model(), v = new View();
var estado;
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

    m.loadJson("../../main_app/obtener_actividad.php?id_instancia="+user.id_instancia, function (array) { 
        //console.log(data);        
        //Deermina el estado pfp muestra la notificación y activa los botones
        //console.log("*********** Contenido del array de actividades:",  array[0]);    
        //console.log(tmpActividadesPfp);
        if (array.length == 0 ) {
            estado = "Vacio";
        } else {
            arrayActividades=array;
            estado = array[0].estado;          
        }
        console.log("------------ Valor del estado: ", estado, "-----------------");

        //Instrucciones para activar el botón de "justificacion"
        if (estado == "Vacio" || estado == "Edicion" ) {
            $("#btnJustificacion").prop("disabled", false);
            secciones.justificacion=true;
        }
              
        console.log(" 0 - array de actividades:",  arrayActividades, "peso: ", array.length  );    
            //Activación del botón "ver actividades"        
            if (array.length > 0 )   {
                arrayActividades = array;
                if (estado == "Edicion") {
                    $("#btnVerPfP").prop("disabled", false);
                    secciones.verActividades = true;        
                }            
            }
         

    //verifica el arreglo justificacion para el botón brechas formativas y objtivos 
    m.loadJson("../../main_app/obtener_justificacion_por_instancia.php?id_instancia="+user.id_instancia, function (array) {   
        console.log("1- Array justificacion", array, "peso",  array.length  );        
        //Activación de objetivos:
        if (array.length > 0 )   {
            arrayJustificacion = array;
            if ( estado == "Vacio" || estado == "Edicion") {
                $("#btnObjetivos").prop("disabled", false);
                secciones.objetivos = true;        
            }            
        }

           //verifica el arreglo objetivos para el botón "Limitaciones"    
        m.loadJson("../../main_app/obtener_objetivos_por_instancia.php?id_instancia="+user.id_instancia, function (array) {
        console.log("2 - Array objetivos",  array, "peso",  array.length );        
        //Activar limitaciones:
        if (array.length > 0 ) {
            arrayObjetivos = array;
            if ( estado == "Vacio" || estado=="Edicion") {
                $("#btnLimitaciones").prop("disabled", false);
                secciones.limitaciones = true;     
            }
        }


            //verifica el arreglo limitaciones para habilitar agregar el PFP    
        m.loadJson("../../main_app/obtener_limitaciones_por_instancia.php?id_instancia="+user.id_instancia,  function (array) {
        console.log("3 - Array limitaciones",  array, "peso",  array.length );           
        //Activar archivo pdf
        if (array.length > 0) {
            arrayLimitaciones = array;
            if (estado == "Vacio" || estado=="Edicion") {
                $("#btnArchivoPfp").prop("disabled", false);    
                secciones.archivoPdf = true;
            }
        }

            //verifica el arreglo archivo pfp  para habilitar agregar acitivdes     
        m.loadJson("../../main_app/obtener_archivos_por_instancia.php?id_instancia="+user.id_instancia, function (array) {
        console.log("4 - Array archivos", array, "peso",  array.length );          
        //Activar Agregar Actividade
        if (array.length > 0) {
            arrayArchivoPDF = array;
            if (estado == "Vacio" || estado == "Edicion") {
                $("#btnActividad").prop("disabled", false);     
                secciones.agregarActividad = true;
            }
        };
                //Carga los mensajes de acerdo a los estados y habilita algunos botones          
                cargarEstado();
                //Manejador de eventos para los botnes del menú
                handlerBotonesMenu();
                }); 
         
          }); 
        
      });  
      
    }); 

});
    
}
function cargarEstado () {    
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



