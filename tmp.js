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