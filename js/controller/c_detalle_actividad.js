"use strict";
const m = new Model(), v = new View;
var userInfo, sedes=0, record,
classEstratos, //Alamcena la Clase de controles checkbox con todos los estratos.
estratos=[]; //array almacena los estratos seleccionados por elusuario.

$(document).ready(function () {
    loadUserInfo();
    loadMod();
    loadDataSet();
    
});


function loadDataSet() {
    m.loadJson("../../data/direcciones.json", renderRegiones)       
}


function renderRegiones() {
    v.instances(m.getDataSet(), $("#gorupSelectorInstance") );
    eventAddGroup();    
}






function loadUserInfo() { 
    userInfo =  m.getSession();   
    v.userInfo(userInfo, $("#infoUser"));
    
}





function loadMod() {
    //console.log("ready");
    record = m.getRecordInSession();
    //console.log(record);
    
    //parse el campo sede para obtenr el Json
    sedes = JSON.parse(record.sede);
    //console.log(sedes );
    m.cloneListGroups(sedes);


    v.renderData(record);
    v.table("#colTableGroupos", m.getListGroups());
    eventDeleteGroup();
    loadEstratos();
    eModalEstrato();
    enabledDiskFloppy(); 
    
    //console.log("SEDES " );
    //console.log(JSON.stringify(m.getListGroups())   );
    
    
    
}


//CArga los estratos seleccionados:
function loadEstratos() {
   // console.log(record.estrato);
    var chkEstratos = $(".form-checkbox"), i ;
    var  estratosSelected = JSON.parse(record.estrato);
    //console.log(estratosSelected );

    for ( i = 0; i < estratosSelected.length; i++) {
        for (let index = 0; index < chkEstratos.length; index++) {                   
            if ( $(chkEstratos[index] ).attr("estrato") == estratosSelected[i]   ) {
                $(chkEstratos[index] ).prop("checked", true );
                //console.log($(chkEstratos[index] ).attr("estrato"));
                
            }            
        }        
    }


    

    
}



function enabledDiskFloppy() {
    //console.log(record);   
    console.log("Estado del PFP: " + userInfo.pfpStatus); 
   //Si el estado es edicicón puede editar todos los campos
    if (userInfo.pfpStatus =="Edicion") {
        $(".btn-edit-activity").removeClass("item-hide");
        $(".btn-edit-activity-json").removeClass("item-hide");        
    };

    //Habilita diskette dependiendo del estado e_elemento
    if (userInfo.pfpStatus == "Corregir") {             
                    if (record.e_nombre == "Rechazado" ) {
                        $("#btntxtNombre_actividad").removeClass("item-hide");
                    };
                    if (record.e_duracion == "Rechazado" ) {
                        $("#btntxtDuracion").removeClass("item-hide");
                    };
                    if (record.e_sede == "Rechazado" ) {
                        $("#btnJsonGrupos").removeClass("item-hide");
                    };
                    if (record.e_tipo == "Rechazado" ) {
                        $("#btnselTipo").removeClass("item-hide");
                    };
                    if (record.e_area == "Rechazado" ) {
                        $("#btnselArea").removeClass("item-hide");
                    };
                    if (record.e_estrato == "Rechazado" ) {
                        $("#btnselEstrato").removeClass("item-hide");
                    };
                    if (record.e_tipo_actividad == "Rechazado" ) {
                        $("#btnselTipoActividad").removeClass("item-hide");
                    };
                    if (record.e_modalidad == "Rechazado" ) {
                        $("#btnselModalidad").css("visibility", "visible");
                    };
                    if (record.e_estrategia == "Rechazado" ) {
                        $("#btnselEstrategia").removeClass("item-hide");
                    };
                    if (record.e_costo == "Rechazado" ) {
                        $("#btnnmbCosto").removeClass("item-hide");
                    };

                    //TODO: Este método queda inhabilitado hasta que se carge el json con todos los objetivos
                    let objetivoRechazado = sessionStorage.getItem("objetivoRechazado");
                    console.log(objetivoRechazado);
                    if (objetivoRechazado=="true") {
                        $("#btnModalObj").removeClass("item-hide");
                    }
                    
            
    }
    

//Se agregan los eventos:
        eventoCambioSelect();
        eventosEdicion();
    
    
}

function eModalEstrato() {
    $("#btnEstrato").click(function (e) { 
        e.preventDefault();
            $("#modalEst").modal();
            $("#btnGuardarEstratos").click(function (e) { 
                $("#modalEst").modal("hide");
                $("#btnselEstrato").prop("edit", true );
            });
    });

    $('#modalEst').on('hidden.bs.modal', function (e) {
        estratos = []; //limpia el array para evitar que se duplique la pròxima vez  que
    //se guarde la seleccion
    classEstratos = $(".form-checkbox");
    
    for (let index = 0; index < classEstratos.length; index++) {
        
        if (classEstratos[index].checked) {
            estratos.push($("#"+classEstratos[index].id).attr("estrato") );           
        }           
    }
    console.log(estratos);  
      })
   
    
}

//TODO: Aviso antes de salir si tiene un dato cambiado y no lo ha actualizod en BD




function eventoCambioSelect() {
    $(".form-selector").change(function () { 
        console.log(this.id);
        //Activa el diskete respectivo para guardar info
        $("#btn"+this.id).removeClass("item-edit-inactivo");
        $("#btn"+this.id).addClass("item-edit-activo");
        $("#btn"+this.id).prop("edit", true );
    });
    
}



function eventosEdicion() {

    //evento para los campos de tipo texto: select y text
    $(".btn-edit-activity").click(function () {
        let edit = $(this).prop("edit");       
        if (edit) {
            let 
            opc = $(this).attr("id").slice(3),
            idSelect = $(this).attr("id"),
            nombreCampo = $(this).attr("field");           
             //Se carga el valor del control 
              opc = "#"+opc;
            console.log("opcion", opc  );
            
            //console.log("*****Update", record);              
            //Se realiza la actualizacion del dato                       
            m.updateFieldActivity(record.id_actividad, nombreCampo, opc, "string", function () { 
                    //Se desactiva el botón de disket 
                    //DEsde el callback del ajax update
                                
                    $("#"+idSelect).removeClass("item-edit-activo");
                    $("#"+idSelect).addClass("item-edit-inactivo");
                    $("#"+idSelect).prop("edit", false);
                    
                    
             });
            
        }
    });

    $("#btnModalObj").click(function (e) { 
        e.preventDefault();
        v.modalObj(record.objetivo, record.necesidad );
        $("#modalObj").modal();



    });

    $("#btnActualizarObj").click(function (e) { 
        e.preventDefault();
        //console.log(record.id_obj);
        m.updateObjNeed(record.id_obj,  $("#txtNec").val(),   $("#txtObj").val(),  closeModal );
        
    });

//Evento para los elementos que manjan json:
//estratos y sedes
    $(".btn-edit-activity-json").click(function () { 
              //Se realiza la actualizacion del dato
              let field = $(this).attr("field"),
              idItem =  $(this).attr("id"),
              edit = $(this).prop("edit");
              var  stringJson;

              if (idItem == "btnJsonGrupos") {
                stringJson = JSON.stringify( m.getListGroups() );                
                console.log( "Sedes " +  stringJson ); 
                console.log(m.getListGroups());
                
                           
                
              };
              if (idItem =="btnselEstrato") {
                stringJson =  JSON.stringify( estratos);
                console.log("Estratos " +  stringJson);
                
                
              };

              //Si edit es es vardadero active la edicion
              if (edit) {
                    m.updateFieldActivity(record.id_actividad, field, stringJson, "json", function () { 
                    //Se desactiva el botón de disket 
                    //DEsde el callback del ajax update
                                
                    $("#"+idItem).removeClass("item-edit-activo");
                    $("#"+idItem).addClass("item-edit-inactivo");
                    $("#"+idItem).prop("edit", false);
                 });
              }  
    });
}


function closeModal() {
    $("#modalObj").modal("hide");
     $("#alrObj").text($("#txtObj").val()); 
     $("#alrNeed").text($("#txtNec").val()); 
     
     
    
}


function eventAddGroup() {
    $("#btnAgregarGrupo").click(function () {
        // console.log($("#nmbGrupos").val());       
         if ($("#nmbGrupos").val() != "" ) {
             v.table( "#colTableGroupos", m.addGroups( $("#selRegional").val(),  $("#selMesIni").val(),  $("#selMesFin").val(), $("#nmbGrupos").val(), $("#nmbCantidadParticipantes").val()   )  );
             //limpia los campos del sub formulario
             $("#selRegional").val("");
             $("#selMesIni").val("");
             $("#selMesFin").val("");
             $("#nmbGrupos").val("");
             $("#nmbCantidadParticipantes").val();
             //Crea el evento para eliminar cada uno de los registros:
             eventDeleteGroup();

             //activa el disket para envio de registro
             $("#btnJsonGrupos").removeClass("item-edit-inactivo");
             $("#btnJsonGrupos").addClass("item-edit-activo");
             $("#btnJsonGrupos").prop( "edit", true );
                 
 
         } else {
             alertify.error ("Debe completar todos los campos del subformulario.");
         };
         console.log(JSON.stringify(  m.getListGroups() )  );

     }); 
     
     
}

function eventDeleteGroup() {
    //console.log("evento para borrar");
    
    //Crea el evento para eliminar cada uno de los registros:
    $(".btn-del").click(function () {
       // console.log("borrar sede");
        
        let tmpId = $(this).attr("target");
        //console.log(tmpId);
        m.deleteGrupo( tmpId, renderGroupsAfterDelete  );

                     //activa el disket para envio de registro
                     $("#btnJsonGrupos").removeClass("item-edit-inactivo");
                     $("#btnJsonGrupos").addClass("item-edit-activo");
                     $("#btnJsonGrupos").prop( "edit", true );
  

    });

}



function renderGroupsAfterDelete(array ) {
    v.table( "#colTableGroupos", array);
    eventDeleteGroup();

}






