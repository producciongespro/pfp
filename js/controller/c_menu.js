"use strict";
const m = new Model(), v = new View();
var estado;
var  user;
$(document).ready(function () {
    $(".div-shadow").removeClass("invisible");
    loadUserInfo();
    //evento para cerar secion:
    handlerEvents();
    // carga el json de actividades para mostrar el aviso del estado
    loadDataset();
});


function loadDataset() {
    m.loadJson("../../main_app/obtener_actividad.php?id_instancia="+user.id_instancia, function (data) { 
        //console.log(data);        
        //Deermina el estado pfp muestra la notificación y activa los botones
        cargarEstado(data);
     } );
    
}


function loadUserInfo() {    
    user = m.getSession();    
    v.userInfo(user,  $("#infoUser"));  
   // console.log(user);
      
}



function activarBotones() {
    //validación para el primer botón:
    if (estado =="Vacio" || estado == "Edicion" ) {
        $("#btnJustificacion").prop("disabled", false);
    }


    //Método que verifican la longitud de arrays para activar o desactivar los botones:         
    
    //verifica el arreglo justificacion para el botón brechas formativas y objtivos 
    m.loadJson("../../main_app/obtener_justificacion_por_instancia.php?id_instancia="+user.id_instancia, function (array) {   
        console.log("1- Array justificacion", array, "peso",  array.length  );        
        //Activación de objetivos:
        if (array.length > 0 )   {
            if (estado == "Edicion") {
                $("#btnObjetivos").prop("disabled", false);        
            }            
        }
        
    });    

    
    //verifica el arreglo objetivos para el botón "Limitaciones"    
    m.loadJson("../../main_app/obtener_objetivos_por_instancia.php?id_instancia="+user.id_instancia, function (array) {
        console.log("2 - Array objetivos",  array, "peso",  array.length );        
        //Activar limitaciones:
        if (array.length > 0 ) {
            if (estado=="Edicion") {
                $("#btnLimitaciones").prop("disabled", false);     
            }
        }
        
    });    


    //verifica el arreglo limitaciones para habilitar agregar el PFP    
    m.loadJson("../../main_app/obtener_limitaciones_por_instancia.php?id_instancia="+user.id_instancia,  function (array) {
        console.log("3 - Array limitaciones",  array, "peso",  array.length );           
        //Activar archivo pdf
        if (array.length > 0) {
            if (estado=="Edicion") {
                $("#btnArchivoPfp").prop("disabled", false);    
            }
        }
         
    });    

    //verifica el arreglo archivo pfp  para habilitar agregar acitivdes     
    m.loadJson("../../main_app/obtener_archivos_por_instancia.php?id_instancia="+user.id_instancia, function (array) {
        console.log("4 - Array archivos", array, "peso",  array.length );          
        //Activar Agregar Actividade
        if (array.length > 0) {
            if (estado == "Edicion") {
                $("#btnActividad").prop("disabled", false);     
            }
        }
        
    });    

    

}


function cargarEstado (array) {    
    console.log("*********** Contendio del array de actividades:",  array[0]);    
    //console.log(tmpActividadesPfp);
    if (array.length == 0 ) {
        estado = "Vacio";
    } else {
        estado = array[0].estado;
    }
        console.log("--- Estado del PFP: ", estado, "----------");

    switch (estado) {
        case "Vacio":
            console.log("vacio");
            v.alertMasg("No se ha creado ninguna actividad.");            
            //Veirifca e botòn que se debe activar
            activarBotones();            
             
        break;
        case "Edicion":
            console.log("Edicion");            
            v.alertMasg("PFP no enviado");
             //Veirifca e botòn que se debe activar
             activarBotones();
            //  habilitar el btn ver mis pfp
            //activateButton( "btnVerPfP", './lista_pfp.php' );
        break;
        case "Enviado":
        console.log("PFP enviado");
        v.alertMasg("PFP enviado");                
        activarBotones();
        break;

        case "Avalado":
        console.log("PFP Aprobado");
        v.alertMasg("PFP avaldo por la asesorìa del IDP.");             
        activarBotones();
        break;

        case "Corregir":
        //console.log("PFP por corregir");
        v.alertMasg("El PFP debe ser corregido.");
        $("#avisoMenu").addClass("cafe-maduro");       
               
        //activa los botones que de los campos a corregir
        activarBotones();
        //activateRejected();


        break;
    
        default:
            console.log("Opciòn fuera de rango");
            
            break;
    }

    m.setStatus(estado);
    $(".div-shadow").addClass("invisible");
}



function activateRejected() {
    //Se deshabilitan todos los botones:
    $(".btn-menu").prop("disabled", true);

    //En caso de correcciones a determninados campos habilita botnes. Por ejemplo: limitciones o informe DNFP
  
   //justificacion
    m.loadJson("../../main_app/obtener_justificacion.php", function () { 
        if (m.filterByInstance(user.instancia )[0].e_justificaciones == "Rechazado") {
            $("#btnJustificacion").prop("disabled", false);
        }   
     });
     
     //Objetivos:
     m.loadJson("../../main_app/obtener_objetivos.php", function () { 
         //Recorre la ista de objetivos ralizados para comoprobar si hay alguno que tiene el estado de Rechazado
        var listaObj = m.filterByInstance(user.instancia ), eObjetivos;
      
                for (let index = 0; index < listaObj.length; index++) {
                        if (listaObj[index].e_objetivos == "Rechazado" ) {

                             //Habilita el botón de objetivos            
                            $("#btnObjetivos").prop("disabled", false);
                            //Le asgina el link
                            //$("#lnkbtnObjetivos").attr("href", "objetivos.php" );

                            //guarda en sesión la variable objetivo rechazado para habilitar el botón en detallaes:
                            sessionStorage.setItem("objetivoRechazado", "true");
                           
                            //sale del ciclo para no tener que buscar más
                            break;
                    
                    }
                }        
               

                
     });

 


        //Limitaciones:
        m.loadJson("../../main_app/obtener_limitaciones.php", function () { 
            if (m.filterByInstance(user.instancia )[0].e_limitaciones == "Rechazado") {
              //Habilita el botón de limitaciones 
              $("#btnLimitaciones").prop("disabled", false);
              //Le asgina el link
             // $("#lnkbtnLimitaciones").attr("href", "limitaciones.php" );
            }
                 
         });


           //Archivos:
           m.loadJson("../../main_app/obtener_archivos.php", function () { 
           
            
            if (m.filterByInstance(user.instancia )[0].e_archivo == "Rechazado") {
              //Habilita el botón de Archivos 
              $("#btnArchivoPfp").prop("disabled", false);
              //Le asgina el link
             // $("#lnkbtnArchivoPfp").attr("href", "archivo_dnfp.php" );
           }
          
         }); 
         
        
      /*   
      Activa los botones por defecto:
      actividades del pfp (para ver)   
      la ayuda y acerca de
      */

     $("#btnVerPfP").prop("disabled", false);
     //$("#lnkbtnVerPfP").attr("href", "lista_pfp.php" );
     $("#btnAyuda").prop("disabled", false);    
     $("#btnAcercaDe").prop("disabled", false);
             
       
     
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



