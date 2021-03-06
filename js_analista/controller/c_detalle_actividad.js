"use strict";
const m = new Model(), v = new View;
var userInfo, sedes=0, record, 
classEstratos, //Alamcena la Clase de controles checkbox con todos los estratos.
idObj = 0,
idActividad=0,
estratos=[]; //array almacena los estratos seleccionados por elusuario.


$(document).ready(function () {
   
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




function loadMod() {
    //console.log("ready");
    record = m.getRecordInSession();
    console.log(record);
    
    //Agrega el id del objetivo:
    idObj = record.id_objetivo;
    idActividad =  record.id_actividad;

    //parse el campo sede para obtenr el Json
    sedes = JSON.parse(record.sede);
    //console.log(sedes );
    m.cloneListGroups(sedes);

    //CAerga la información del usuario y la instacnia seleccionada
    loadUserInfo(record.nombre);


    v.renderData(record);
    v.table("#colTableGroupos", m.getListGroups());
    eventDeleteGroup();
    loadEstratos();
    eventModalEstrato();  //modulo de estratos
    eventoCambioSelect();
    eventosEdicion();
    eventoActualizarSedeGruposDB();
    eventStatusElement();
    
    
    
}

function loadUserInfo( instancia ) { 
    userInfo =  m.getSession();   
    v.userInfo(userInfo, instancia, $("#infoUser"));
    
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
               // console.log($(chkEstratos[index] ).attr("estrato"));
                
            }            
        }        
    }


    

    
}

function eventModalEstrato() {
    //abrir modal con los estratos
    $("#btnEstrato").click(function (e) { 
        e.preventDefault();
            $("#modalEst").modal();
    });
    
    //Boton que cierra elmodal para lanzar el evento hide
    $("#btnGuardarEstratos").click(function () { 
        $("#modalEst").modal("hide");
        $("#btnselEstrato").removeClass("item-edit-inactivo"); 
        $("#btnselEstrato").addClass("item-edit-activo"); 
    });


    

//Cuando se cierra el modal
//limpia el array estratos y vuelve a guardar los valores seleccionados

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

    //Evento para guardar los estratos:
    $("#btnselEstrato").click(function (e) { 
        e.preventDefault();
        m.updateFieldActivity(record.id_actividad, "estrato", JSON.stringify(estratos), "json", function () { 
            console.log("actualizado");
            $("#btnselEstrato").off("click");
            $("#btnselEstrato").removeClass("item-edit-activo"); 
            $("#btnselEstrato").addClass("item-edit-inactivo"); 
             })
        
    });

  })

    
}




//TODO: Aviso antes de salir si tiene un dato cambiado y no lo ha actualizod en BD

function eventoActualizarSedeGruposDB() {
    $("#btnJsonGrupos").click(function () {
        let edit = $(this).prop("edit"); 
        //JSON.stringify( m.getListGroups())
            if (edit) {
                
                m.updateFieldActivity(record.id_actividad, "sede", JSON.stringify( m.getListGroups()), "json",  function () {
                    //callback del metodo update en el campo Sede
                    
                    $("#btnJsonGrupos").removeClass("item-edit-activo");
                    $("#btnJsonGrupos").addClass("item-edit-inactivo");
                    $("#btnJsonGrupos").prop( "edit", false ); 
                  });                
            }        
    });
}


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
    $(".btn-edit-activity").click(function () { 
        let edit = $(this).prop("edit");       
        if (edit) {
            let 
            opc = $(this).attr("id").slice(3),
            idSelect = $(this).attr("id"),
            nombreCampo = $(this).attr("field");
            //Se carga el control select
            opc = "#"+opc; 

        

            console.log("opc", opc);
            console.log("nombreCampo", nombreCampo );
            console.log("record.id_actividad", record.id_actividad);
            
              
            //Se realiza la actualizacion del dato
            m.updateFieldActivity(record.id_actividad, nombreCampo, opc, "string", function () { 
                    //Se desactiva el botón de disket 
                    //DEsde el callback del ajax update
                                
                    $("#"+idSelect).removeClass("item-edit-activo");
                    $("#"+idSelect).addClass("item-edit-inactivo");
                    $("#"+idSelect).prop("edit", false);
                    console.log(idSelect);
                    
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
        m.updateObjNeed(record.id_objetivo,  $("#txtNec").val(),   $("#txtObj").val(),  closeModal );
        
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
             v.table( "#colTableGroupos", m.addGroups( $("#selRegional").val(),  $("#selMesIni").val(),  $("#selMesFin").val(), $("#nmbGrupos").val(), $("#nmbCantParticipantes").val()  )  );
             //limpia los campos del sub formulario
             $("#selRegional").val("");
             $("#selMesIni").val("");
             $("#selMesFin").val("");
             $("#nmbGrupos").val("");
             $("#nmbCantParticipantes").val("");
             

             //Crea el evento para eliminar cada uno de los registros:
             eventDeleteGroup();

             //activa el disket para envio de registro
             $("#btnJsonGrupos").removeClass("item-edit-inactivo");
             $("#btnJsonGrupos").addClass("item-edit-activo");
             $("#btnJsonGrupos").prop( "edit", true );
                 
 
         } else {
             alertify.error ("Debe completar todos los campos del subformulario.");
         }
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



function eventStatusElement( ) { 
    //establece el estatus de cada elemento
    $(".fa-status").off("click");
    $(".fa-status").click(function () {
        let 
        condicion = $(this).attr("status"),
        campo = $(this).attr("target"),
        tmpId, // id del elemento a cambiar el estado
        tabla; //Nombre de la tabla donde actualiza el estado

      

        //Carga la tabla correspondiente:
        switch (campo) {
            case "e_objetivos":
                tabla = "objetivos";
                tmpId = idObj;
            break;
            case "e_justificaciones":
                tabla = "justificaciones";
                tmpId =  userInfo.id_instancia;
            break;
            case "e_limitacion":
                tabla = "limitaciones";
                tmpId =  userInfo.id_instancia;
            break;
            case "e_archivo":
                tabla = "archivos_enviados";
                tmpId =  userInfo.id_instancia;
            break;        
            default:
                    tabla = "actividades";
                    tmpId =  idActividad;                    
            break;
        }


        $(this).addClass("resaltado");

        console.log("condicion", condicion);
        console.log("campo", campo);
        console.log("tmpId", tmpId);
        console.log("tabla", tabla);      
        m.actualizarCondicionElemento(tmpId, tabla, campo, condicion );              
    });
}


