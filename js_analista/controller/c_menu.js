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
    m.loadJson("../../main_app/obtener.php", function () { 
        dataset = m.getPfpSent();
       // console.log("Carga de actividades PFP de las instacnias: ");        
        console.log("dataset", dataset);        
        loadFileUrl();
       
     });


     m.getObjetivos(function (data) { 
        dataObjetivos = data;
                console.log("Array de objetivos", dataObjetivos);                               
          })

    
}


function loadFileUrl() {
    //  Segunda carga de datos: la url de archivos
    m.loadJson("../../main_app/obtener_archivos.php", function () { 
        dsArchivos = m.getDataSet();
        //console.log("Carga de la url de los archivos subidos:");        
        //console.log(dsArchivos);
        loadJustif();
        
     });
      
}

function loadJustif() {    
    //Tercera carga de datos: justificcion
    m.loadJson("../../main_app/obtener_justificacion.php", function () {
        dsJustif  = m.getDataSet();
        //console.log("Carga de las  justificacines");
        //console.log(dsJustif);       
        loadInstancias();
      } );

}


function loadInstancias() {
    //Cuarta carga de datos: lista de instancias del json
    //Para poder crear el array que lleva las cantidades de actividades por instancia
    m.loadJson("../../data/instancias.json", function () {
        //console.log("carga de lista de instancias para formar el array");        
        renderTable();
        $(".div-shadow").addClass("invisible");
      });

}

function renderTable() {
    
    
    //console.log(dsArchivos);
    instancias = [];
    //Crea el arreglo con las instacnias y la cantidad de actividades
    for (let index = 0; index < m.getDataSet().length; index++) {
       // console.log( m.getDataSet()[index]  );
        let instancia = {
            nombre : m.getDataSet()[index].nombre,            
            cantActiv : 0,
            justificacion : "",
            interna : "",  // Limitaciones internas            
            fecha_envio : "0",
            urlArchivo : "",
            id_just : "0",
            id_archivo : "0",
            id_lim : "0",
            estado : ""
            //VErificar si se sustituye el id por instancia
        }
        instancias.push(instancia);        
    }
    //console.log(instancias);

    //compara el arreglo dataset con el de instancias
    //En caso de que conincida una instancia se incrementa cantidad de  Actividadaes
    var limitDataset = dataset.length,
    limitInst = instancias.length;
    
      for (let i = 0; i < limitInst; i++) {
        for (let index = 0; index < limitDataset; index++) {
            //console.log("indice de dataset " + index);
                if (instancias[i].nombre == dataset[index].instancia   ) {
                    instancias[i].cantActiv = instancias[i].cantActiv + 1; 
                    instancias[i].fecha_envio =   dataset[index].fecha_envio;                                    
                    instancias[i].estado =   dataset[index].estado; 
                    instancias[i].interna =   dataset[index].interna; 
                    instancias[i].externa =   dataset[index].externa;

                    instancias[i].id_just =   dataset[index].id_just; 
                    instancias[i].id_archivo =   dataset[index].id_archivo;  
                    instancias[i].id_lim =   dataset[index].id_lim; 

                }            
        }                
      }      
 

   // Carga el dataset con la justificacion en el arreglo instancias para luego generr la tabla
    
        for (let i = 0; i < limitInst; i++) {                   
            if (instancias[i].cantActiv > 0  ) {
                //console.log(instancias[i].nombre);
                for (let index = 0; index < dsJustif.length; index++) {
                    if (instancias[i].nombre == dsJustif[index].instancia  ) {
                        instancias[i].justificacion = dsJustif[index].justificacion;
                        //console.log(instancias[i].nombre);
                        
                    }
                    //console.log(instancias[i].nombre);
                    
                }                
            }
        
        
        }


     // Carga el dataset con la url de los archivos en ele arreglo instancias para luego generr la tabla
    
     for (let i = 0; i < limitInst; i++) {                   
        if (instancias[i].cantActiv > 0  ) {
            //console.log(instancias[i].nombre);
            for (let index = 0; index < dsArchivos.length; index++) {
                if (instancias[i].nombre == dsArchivos[index].instancia  ) {
                    instancias[i].urlArchivo = dsArchivos[index].url;
                   // console.log(dsArchivos[index].url);
                    
                }
                //console.log(instancias[i].nombre);
                
            }                
        }
    
    
    }
                

    //console.log(instancias);

    v.table(instancias, "#colTable");
    //Manejadores de eventos para elementos de la tabla
    eJust();
    eFile();
    eSendStatus();
    eViewActividades();
    eModalUnlock();
    eLimit();
    handlerShowModalObjetivos();


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