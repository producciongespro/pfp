"use strict";
const m = new Model(), v = new View ();
var need, userInfo, actividad="0", sedes=0, justif, idObj,  tmpObj,  limitations, tipo, 
fileDNFP, // objeto del archivo dnfp que subió en formato pdf .
classEstratos, //Alamcena la Clase de controles checkbox con todos los estratos.
estratos=[]; //array almacena los estratos seleccionados por elusuario.
$(document).ready(function () {
    $(".div-shadow").removeClass("invisible");
    eventSendButton();
    eventAddGroup();
    loadDataset();
    loadUserInfo();
    mostarAyudaContextual();
});




function loadUserInfo() {
    userInfo =  m.getSession();
    v.userInfo(userInfo,  $("#infoUser"));

}


function loadDataset() {
    m.loadJson("../../data/direcciones.json", loadInstances );
    m.loadJson("../../main_app/obtener_justificacion.php", loadJustif );
    m.loadJson("../../main_app/obtener_archivos.php", loadIdFile );
    m.loadJson("../../main_app/obtener_objetivos.php", loadModule );
    m.loadJson("../../main_app/obtener_limitaciones.php", loadLimit );
}


function loadModule () {
     tmpObj = "0";
    //Crea la tabla con los objetivos
    //TODO: 1 - Esta instrucción hay que cambiarla por id_instancia
    v.objectiveList(m.filterByInstance(userInfo.instancia), $("#mdlBody") );
    //Manejadores de eventos para el modal de objetivos
    $("#modalObj").modal();
    $(".alert-objetivos").click(function () {
        $("#alrObj").html($(this).html());
        //recolecta parte de los insumos para posterior envio ajax
            tmpObj = $(this).html();
            need = $(this).attr("need");
            idObj = $(this).attr("target");

            console.log(idObj);

        //Escribe la necesidad relacionada con el objetivo selecionado:
        $("#alrNeed").text(need);

        $('#modalObj').modal('hide');
        //Haboilita la caja de texto para escribir el nombre:
        $("#txtNombre").attr("placeholder", "Antes de escribir el nombre debe seleccionar si la actividad es dentro o fuera.");
    });
        //en el evento close verifica si el objetivo está cargado, caso contrario lo devuelve a al menú
        $("#modalObj").on('hidden.bs.modal', function () {
            if (tmpObj=="0") {
             window.location.assign("menu.php");
            } else {
                //Carga los manejadores de eventos:
                // clic del Radio button tipo de actividad
                // envio de actividades
                // selModalidad para cambiar las opciones de tipo
                handlerEvents();
                $(".btn-ayuda").addClass("elemento-resaltado");
            }
     });
     //ACtiva el manejador de eventos de alert objetivos por si el usuario desea
     //agregar o cambiar otro objetivo:
     handlerEventObj();
}

function loadIdFile() { 
    //TODO: 2 - Esta instrucción hay que cambiarla por id_instancia
    
    fileDNFP = m.filterByInstance(userInfo.instancia)[0]; 
   // console.log(fileDNFP.id);
        
}



function loadJustif () {

    //carga la info de la justificacion asociada al pfp
    //TODO: 3 - Esta instrucción hay que cambiarla por id_instancia
    justif = m.filterByInstance(userInfo.instancia)[0];
    //console.log(justif);
    //console.log(justif.id );


}


function loadLimit() {
    //TODO: 4 - Esta instrucción hay que cambiarla por id_instancia
    limitations =  m.filterByInstance(userInfo.instancia)[0];
    //console.log(limitations);
    $(".div-shadow").addClass("invisible");

}

function handlerEventObj () {
    $("#alrObj").click(function (e) {
        e.preventDefault();
        //console.log("modal obj");
        $("#modalObj").modal();
    });

}


function loadInstances() {
    //CArga de Instancias regionales
    //console.log(m.getDataSet());
    v.instances(m.getDataSet(), $("#gorupSelectorInstance") );
    //Manjeador de evento change en caso de que el usuario
    //seleccione una instancia para ir agregandola
    //al area de texto
    $("#selInstancia").change(function (e) {
        e.preventDefault();
        var tmpInstance =   $("#txtLugar").val() + "-" + $("#selInstancia").val();
        $("#txtLugar").val(tmpInstance);

    });

}


function handlerEvents() {
    //Manjeadores de eventos

    //Evento para los radiobutton
    $(".form-check-input").click(function () {
        actividad = $('input:radio[name=tipo]:checked').val();

        //Haboilita la caja de texto para escribir el nombre:
        $('#txtNombre').get(0).disabled = false;
        $("#txtNombre").attr("placeholder", "Escriba el nombre de la actividad.");
        //console.log(actividad);        
        
        //Depende de la opcion del radio button
        //serán las opciones de la modadlidad
        renderModalidad();

    }); 

    $("#btnEstrato").click(function (e) { 
        e.preventDefault();
        $("#modalEst").modal();
        
    });

    $("#btnGuardarEstratos").click(function () { 
        $("#modalEst").modal("hide"); 
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
    //console.log(estratos);  
      })

    


  
}


function renderModalidad() {
    
    if (actividad == "Dentro") {
        $("#rowCosto").addClass("item-invisible");
        v.modalidad("#frmModalidad", "Dentro" );
    }
    if (actividad == "Fuera") {
        $("#rowCosto").removeClass("item-invisible");
        v.modalidad("#frmModalidad", "Fuera" );
        
    }

      // Modalidad Aprovechamiento - Participación - Asistencia
      $("#selModalidad").change(function () {
        v.tipoActividad("#formGroupTipo", $(this).val() );
    });


    //Evento para la modalidad
    //Si selecciona asistencia cambia las opcion de estrategia metodologógica
    $("#selModalidad").change(function (e) {
        e.preventDefault();

        if ($(this).val() == "Asistencia" ) {
            $(".estrategia-no-presencial").remove();
        } else {
            v.renderEstreetegia();
        }

    });
}


function eventAddGroup() {
    $("#btnAgregarGrupo").click(function () {
        // console.log($("#nmbGrupos").val());
       sedes++;
         if ($("#nmbGrupos").val() != "" ) {
             v.table( "#colTableGroupos", m.addGroups( $("#selRegional").val(),  $("#selMesIni").val(),  $("#selMesFin").val(), $("#nmbGrupos").val(),  $("#nmbParticipantes").val()     )  );
             //limpia los campos del sub formulario
             $("#selRegional").val("");
             $("#selMesIni").val("");
             $("#selMesFin").val("");
             $("#nmbGrupos").val("");
             $("#nmbParticipantes").val("");
             
             //Crea el evento para eliminar cada uno de los registros:
             eventDeleteGroup();
 
         } else {
             alertify.error ("Debe completar todos los campos del subformulario.");
         }
     });    
}


function eventDeleteGroup() {
                //Crea el evento para eliminar cada uno de los registros:
                $(".btn-del").click(function () {
                    let tmpId = $(this).attr("target");
                    //console.log(tmpId);
                    m.deleteGrupo( tmpId, renderGroupsAfterDelete  );

                });

}



function renderGroupsAfterDelete(array ) {
    v.table( "#colTableGroupos", array);
    eventDeleteGroup();

}


function validarVacios() {
    if ($("#txtNombre").val() == "" || sedes == 0 ||  estratos.length == 0 || $("#txtDuracion").val().length == 0 ||  $("#selTipoActividad").val() == null ||   $("#selArea").val() == null ||
    $("#selModalidad").val() == null ||    $("#selEstrategia").val() == null  ) {
        return true;
    }
}

function isNumeric() {

    if ( $("#txtDuracion").val() ==""  ||  $("#txtCantidad").val() ==""    ) {
        return false;
    } else{
        return true;
    }
}

function reloadForm() {
    v.clearFields();
    m.clearGroups();
    v.clearSelect();
    actividad="0";
    sedes=0;
    
    //Limpia los checkbox de estratos
    
    for (let index = 0; index < classEstratos.length; index++) {
        classEstratos[index].checked = false;        
    }


    document.querySelectorAll('[name=tipo]').forEach((x) => x.checked = false);
    alertify.confirm("Sistema PFP V 1.0", "¡Actividad de Plan de Formación agregada satisfactoriactoriamente!  ¿Desea agregar otra actividad al PFP?",
  function(){
    //OK
    loadDataset();
  },
  function(){
      //Cancel
      window.location.assign("menu.php");
  });

}


function mostarAyudaContextual () {
    $(".btn-ayuda").click(function (e) { 
        e.preventDefault();
        let opcion = e.target.id;
        let mensaje;
        console.log(opcion);
        switch (opcion) {
            case "btnGrupos":
                mensaje = "Cuando el curso sea impartido en la modalidad presencial o virtual, cada grupo requiere estar  integrado al menos por 30 personas para formarlo.  Cuando el curso sea teórico/práctico, idiomas o prácticas de laboratorio ,  requiere de al menos 15 personas para formarlo. Si el grupo es menor a 25 personas no contará con respaldo, por parte del IDP, para la alimentación de los participantes en un curso."    
            break;
            case "btnCosto":
                mensaje = " Si el costo aproximado está en dólares, realizar el cambio a colones según el tipo de cambio del BCR y agregarle un 10%"    
            break;
        
            default:
                console.log("opcion fuera de rango");                
                break;
        }


        alertify
        .alert("Importante", mensaje, function(){
            console.log("ok");          
        });
        
    });
    
}





function eventSendButton() {
  //Botón de envio de actividades
  $("#btnEnviarActividad").click(function () {
      //console.log("click enviar");
      
      var monto = 0;

      if (actividad=="Fuera") {
           monto = $("#nmbCosto").val();
      }
      tipo = $('input:radio[name=tipo]:checked').val();


      
           if (validarVacios()) {
               alertify.error('Debe completar todos los campos.');
           }
          else {
              m.uploadActivity( userInfo.id_instancia, userInfo.instancia, userInfo.correo, $("#txtNombre").val(), justif.id, justif.justificacion, limitations.id, limitations.interna, limitations.externa, idObj, $("#txtDuracion").val(),   JSON.stringify(m.grupos),  tipo, $("#selTipoActividad").val(),  JSON.stringify(estratos), $("#selArea").val(), $("#selModalidad").val(), $("#selEstrategia").val(), monto, fileDNFP.id, reloadForm );
          }
   


  });
}
