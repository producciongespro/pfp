function activateRejected() {
    //Se deshabilitan todos los botones:
    //$(".btn-menu").prop("disabled", true);

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