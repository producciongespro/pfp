"use strict";
function Model () {

}

Model.prototype.dataSet="";
Model.prototype.grupos = []; // grupos por regional por  actividad pfp  SEDES

Model.prototype.clearGroups = function () { 
  Model.prototype.grupos = [];
}

Model.prototype.cloneListGroups = function (array ) {
  Model.prototype.grupos = "";
  Model.prototype.grupos = array;
 }


 Model.prototype.getListGroups = function ( ) { 
   return Model.prototype.grupos;
 }




Model.prototype.loadJson = function (pathJson, mCallBack) {
  //console.log("get json");
    $.getJSON(pathJson,
        function (data, textStatus, jqXHR) {
            Model.prototype.dataSet=data;
            //console.log( Model.prototype.dataSet);            
            mCallBack(data);
            
        }
    );
 }


 Model.prototype.getObjetivos = function ( mCallBack ) {
  const  urlGetObjetivos = " ../../main_app/obtener_objetivos.php  ";
    $.getJSON(urlGetObjetivos,
        function (data, textStatus, jqXHR) {        
            mCallBack( data  );            
        }
    );
 }





 Model.prototype.getPfpSent = function () { 
   let limit = Model.prototype.dataSet.length,
   enviadas=[];
   for (let index = 0; index < limit; index++) {
     if (Model.prototype.dataSet[index].estado == "Enviado" || Model.prototype.dataSet[index].estado == "Corregir" || Model.prototype.dataSet[index].estado == "Avalado"  ) {
       enviadas.push(Model.prototype.dataSet[index]);
     }
     
   }
   return enviadas;    
 }

 

 Model.prototype.getDataSet = function () {
   
   
     return  Model.prototype.dataSet;
   }

Model.prototype.getRecord = function (i) {
    return  Model.prototype.dataSet[i];
}


Model.prototype.sendPfp = function ( idInstancia, mCallBack ) {

  var formData = new FormData();
  formData.append("id_instancia", idInstancia);
  $.ajax({
    url: '../../main_app/actualizar_enviados.php',
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");
    alertify.message('Enviando documento PFP por favor espere.');
      
    }, success: function(mensaje){
      console.log(mensaje);
      alertify.alert("Sistema PFP", "¡Documento PFP enviado de forma exitosa!");
      mCallBack ();
    }, error: function(mError){
        console.log(mError);
        alertify.error('Error al intentar enviar el registro');
        
    }
  });

}


Model.prototype.setSession = function ( id_instancia, instancia, nombre, apellido1, apellido2, correo, tipo ) {
    
  sessionStorage.setItem("id_instancia", id_instancia);
  sessionStorage.setItem("instancia", instancia);
  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("apellido1", apellido1);
  sessionStorage.setItem("apellido2", apellido2);
  sessionStorage.setItem("correo", correo);
  sessionStorage.setItem("tipo", tipo);
  sessionStorage.setItem("pfpStatus", "nulo");
 }

 Model.prototype.setStatus = function ( status ) {
    sessionStorage.setItem("pfpStatus", status);
 }

 Model.prototype.actualizarCondicionElemento = function (idItem,  tabla, campo, condicion   ) { 


  var formData = new FormData();
  formData.append("tabla", tabla);
  formData.append("idItem", idItem);
  formData.append("campo", campo);
  formData.append("condicion", condicion);  
    
  $.ajax({
    url: '../../main_app/actualizar_condicion_elemento.php',
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");      
    }, success: function(mensaje){            
      console.log(mensaje);            
      alertify.success("Condición de: " + condicion);
      //call back
    }, error: function(mError){
        console.log(mError);
        alertify.error('Error al intentar actualizar estado.');
    }
  });

  
 }

 Model.prototype.desbloquearPfp = function (idInstancia, idEstado ) { 
  
    var formData = new FormData();
    formData.append("id_instancia", idInstancia);
    formData.append("idEstado", id_estado);
    
    $.ajax({
      url: '../../main_app/desbloquear_pfp.php',
      type: 'POST',
      data: formData,
      //dataType:'json',
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function(){
      console.log("En proceso");
        
      }, success: function(mensaje){            
        console.log(mensaje);      
        let tmp = "Estado actualizado a " + value;      
        alertify.success(tmp );
        //call back
      }, error: function(mError){
          console.log(mError);
          alertify.error('Error al intentar actualizar estado.');
      }
    });
  
    
   }
  



Model.prototype.getSession = function () {
    var usr = {
        "id_instancia" : sessionStorage.getItem("id_instancia"),
        "nombre" : sessionStorage.getItem("nombre"),
        "apellido1" : sessionStorage.getItem("apellido1"),
        "apellido2" : sessionStorage.getItem("apellido2"),
        "correo" : sessionStorage.getItem("correo"),
        "instancia" : sessionStorage.getItem("instancia"),
        "tipo" : sessionStorage.getItem("tipo"),
        "pfpStatus" : sessionStorage.getItem("pfpStatus")
      }
    return usr;
};

Model.prototype.filterByInstance = function (instance) {
 
    var limite = Model.prototype.dataSet.length, tmpArray=[];
    for (let index = 0; index < limite; index++) {
      if (instance==Model.prototype.dataSet[index].instancia) {
        tmpArray.push(Model.prototype.dataSet[index]);
      }
    }
    //console.log(tmpArray);

    return tmpArray;
 }

Model.prototype.uploadObjective = function (email_user, id_instancia, needed, obj, mCallBack) {

  var formData = new FormData();
  formData.append("correo_usuario", email_user);
  formData.append("id_instancia", id_instancia);
  formData.append("necesidad", needed);
  formData.append("objetivo", obj);



  $.ajax({
    url: '../../main_app/agregar_objetivo.php',
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");
    alertify.message('Enviando registro... Por favor espere.');
      
    }, success: function(mensaje){
      console.log(mensaje);
      alertify.alert("Sistema PFP", "Registro enviado de forma exitosa!");
      mCallBack ();
    }, error: function(mError){
        console.log(mError);
        alertify.error('Error al intentar enviar el registro');
        
    }
  });


}

  
Model.prototype.uploadLimitation = function ( limInt, id_instancia,  callBack_s) {

  var formData = new FormData();
  formData.append("interna", limInt);  
  formData.append("id_instancia", id_instancia); 
 
  $.ajax({
    url: '../../main_app/agregar_limitaciones.php',
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");
      
    }, success: function(mensaje){
              alertify
                .alert("Sistema PFP", "Limitaciones almacenadas satisfactoriamente.", function(){
                console.log("ok");                
              });
      console.log(mensaje);
      callBack_s();
    }, error: function(mError){
        console.log(mError);
        
    }
  });
}


Model.prototype.uploadJustify = function (urlPath, justif, id_instancia, callBack_s) {

  console.log(urlPath);
  console.log(justif);
  console.log(id_instancia);

  var formData = new FormData();
 formData.append("justificacion", justif);
  formData.append("id_instancia", id_instancia);
 
  $.ajax({
    url: urlPath,
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");     
    }, success: function(mensaje){
      console.log(mensaje);
     alertify.alert("Sistema PFP", "Justificación enviada de forma exitosa!");
      callBack_s();      
    }, error: function(mError){
        console.log(mError);        
    }
  });


}


Model.prototype.uploadActivity = function ( id_instancia,  email, nombre,  idObj, duration, place, type, typeAct,  stratus,  area, mode, strategy, amount, mCallBack ) {

  var formData = new FormData();
  formData.append("id_instancia", id_instancia);  
  formData.append("correo", email);
  formData.append("nombre", nombre);
  formData.append("id_objetivo", idObj);    
  formData.append("duracion", duration);  
  formData.append("sede", place);
  formData.append("estado", "Edicion");
  formData.append("tipo", type);
  formData.append("tActividad", typeAct);
  formData.append("estrato", stratus);   
  formData.append("area", area);
  formData.append("modalidad", mode);
  formData.append("estrategia", strategy);
  formData.append("costo", amount);
  $.ajax({
    url: "../../main_app/agregar_actividad.php",
    type: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (response) {  
      console.log(response);
      mCallBack();
    },
    error: function (response) {
      console.log(response);
      alertify.error("Problemas al tratar de enviar actividad PFP");
      }  });
 }

//delRecord
Model.prototype.eliminarRegistro = function (idNombre, idValor  , tabla, mCallBack  ) {

    var formData = new FormData();
    formData.append("idNombre", idNombre);
    formData.append("idValor", idValor);
    formData.append("tabla", tabla );

    $.ajax({
      url: "../../main_app/eliminar_registro.php",
      type: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (response) {
        console.log(response);
        alertify.success('Registro eliminado satisfactoriamente');
        mCallBack();
      },
      error: function (response) {
        console.log(response);
        alertify.error('Error al intentar eliminar registro');
        }
    });

  }
 
Model.prototype.eliminarActividad = function (idActividad, idInstancia, mCallBack )  {

  console.log("eliminar actividad", idActividad, idInstancia);
  

  var formData = new FormData();
  formData.append("idActividad", idActividad);  
  formData.append("idInstancia", idInstancia); 

  $.ajax({
    url: "../../main_app/eliminar_actividad.php",
    type: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (response) {
      console.log(response);
      mCallBack();      
    },
    error: function (response) {
      console.log(response);
      alertify.error('Error al intentar eliminar registro');
      }
  });

}





Model.prototype.signUp = function (name, sName1, sName2, id_instance, email, pwd1, pwd2 ) {
  var formData = new FormData();
  formData.append("nombre", name);
  formData.append("apellido1", sName1);
  formData.append("apellido2", sName2);
  formData.append("id_instancia", id_instance);
  formData.append("email", email);
  formData.append("password", pwd1);
  formData.append("con_password", pwd2);


  $.ajax({
    url: "../../login/registro.php",
    type: 'POST',
    data: formData,
    cache: false,
    dataType: "json",
    contentType: false,
    processData: false,
    success: function (response) {
      console.log("correcto ",response);
      
      alertify.alert("Aviso:",  response.mensaje[0]);
    },
    error: function (response) {
      alertify.alert("Aviso:",  response.mensaje[0]);
      console.log("error ",response);

      }  });
 }
 
 Model.prototype.signUp2 = function (name, sName1, sName2, id_instance, email, pwd1, pwd2 ) {
  var formData = new FormData();
  formData.append("nombre", name);
  formData.append("apellido1", sName1);
  formData.append("apellido2", sName2);
  formData.append("id_instancia", id_instance);
  formData.append("email", email);
  formData.append("password", pwd1);
  formData.append("con_password", pwd2);


  $.ajax({
    url: "../../login/registro_asesores.php",
    type: 'POST',
    data: formData,
    cache: false,
    dataType: "json",
    contentType: false,
    processData: false,
    success: function (response) {
      console.log("correcto ",response);
      
      alertify.alert("Aviso:",  response.mensaje[0]);
    },
    error: function (response) {
      alertify.alert("Aviso:",  response.mensaje[0]);
      console.log("error ",response);

      }  });
 }



Model.prototype.setLogin = function (pathPhP, frmData, callback_b, callBack_s, callBack_e) {
  jQuery.ajax({
    url: pathPhP,
    type:'POST',
    dataType:'json',
    data:$(frmData).serialize(),
    beforeSend:function(){
      callback_b();
    }
  })
  .done(function(respuesta){
    //console.log(respuesta);
    $("#mensaje").html(respuesta);
        if (!respuesta.error) {
            //Ejecuta el método en el callback si la respuesta está libre de error
            callBack_s (respuesta);
          } else {
            console.log("ERROR");
            console.log(respuesta);
            
            callBack_e();
    }
  })
  .fail(function(resp){
    console.log(resp.responseText);
  })
  .always(function(){
    //console.log("complete");
});
}

Model.prototype.closeSession = function () {
  sessionStorage.removeItem("usuario");
  window.location.assign("main_app/destroy_session.php");
  }

  Model.prototype.updateObjNeed = function (id, necesidad, objetivo, mCallBack  ) { 
    var formData = new FormData();
    formData.append("id_objetivo", id);
    formData.append("objetivo", objetivo );
    formData.append("necesidad", necesidad );


    $.ajax({
      url: '../../main_app/actualizar_objetivo.php',
      type: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (response) {
        console.log(response);
        alertify.success('Elemento actualizado satisfactoriamente');
        mCallBack();
      },
      error: function (response) {
        console.log(response);
        alertify.error('Error al intentar actualizar objetivo');
        }
    });
   }

  Model.prototype.actualizarCampo = function (url, idNombre, idValor, datos, id_instancia, mCallBack ) {

    var formData = new FormData();
    formData.append(idNombre, idValor);
    formData.append("campo", datos );
    formData.append("id_instancia", id_instancia );

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (response) {
        console.log(response);
        alertify.success('Elemento actualizado satisfactoriamente');
        mCallBack();
      },
      error: function (response) {
        console.log(response);
        alertify.error('Error al intentar actualizar objetivo');
        }
    });

  }

  Model.prototype.updateLimitations = function (id, inL, mCallBack ) { 
    
    var formData = new FormData();
    formData.append("id_limitacion", id);
    formData.append("interna", inL );    

    $.ajax({
      url: '../../main_app/actualizar_limitaciones.php',
      type: 'POST',
      data: formData,
      //dataType:'json',
      cache: false,
      contentType: false,
      processData: false,
      success: function (response) {
        
        alertify.success('Limitaciones actualizadas satisfactoriamente.');
        mCallBack();
        console.log( "Respuesta de actualizar limitaciones.php", response);
      },
      error: function (response) {
        
        alertify.error('Error al intentar actualizar Limitaciones 123');
        console.log(response);
        }
    });
  }


  Model.prototype.addGroups = function ( regional, inicio, fin, grupos, cantParticipantes  ) {
    let grupo = {
      regional : regional,
      inicio : inicio,
      fin : fin,
      grupos : grupos,
      cantParticipantes : cantParticipantes
    }
    Model.prototype.grupos.push(grupo);   
    return Model.prototype.grupos;


  }



Model.prototype.uploadFile = function (  id_instancia, objFile, callBack_s) {
   
      var formData = new FormData();   
      formData.append("id_instancia", id_instancia);
      formData.append("archivo",  objFile[0].files[0]);
      $.ajax({
        url: '../../main_app/agregar_archivo.php',
        type: 'POST',
        data: formData,
        //dataType:'json',
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function(){
        console.log("En proceso");          
        }, success: function(mensaje){
                  alertify
                    .alert("Sistema PFP", "Archivo enviado satisfactoriamente.", function(){
                    console.log("ok");                
                  });
          console.log(mensaje);
          callBack_s();
        }, error: function(mError){
            console.log(mError);            
        }
      });      
}


Model.prototype.actualizarArchivo = function (  id_instancia, objFile, callBack_s) {
   
  var formData = new FormData();   
  formData.append("id_instancia", id_instancia);
  formData.append("archivo",  objFile[0].files[0]);
  $.ajax({
    url: '../../main_app/actualizar_archivo.php',
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");          
    }, success: function(mensaje){
              alertify
                .alert("Sistema PFP", "Archivo enviado satisfactoriamente.", function(){
                console.log("ok");                
              });
      console.log(mensaje);
      callBack_s();
    }, error: function(mError){
        console.log(mError);            
    }
  });      
}

    


Model.prototype.deleteGrupo = function (item, callback  ) {
    console.log(Model.prototype.grupos);
    Model.prototype.grupos.splice(item,1);    
    callback(Model.prototype.grupos);
  }



Model.prototype.setRecordinSession = function ( record ) {
  let txtRecord =  JSON.stringify(record);
  //console.log(txtRecord);
      
  sessionStorage.setItem("selectedRecord", txtRecord);
}


Model.prototype.getRecordInSession = function () { 
   let txtRecord = sessionStorage.getItem("selectedRecord"),
   record = JSON.parse(txtRecord);
   return (record);
}


Model.prototype.setInstanciaInlocal = function ( idInstancia ) {  
  sessionStorage.setItem("id_instancia", idInstancia);
}


Model.prototype.updateFieldActivity = function (  id, campo, valor, tipoDato,  callBack_s ) {  
console.log( "id de campo " + id);
console.log( "Campo " + campo);
console.log("Valor de campo " + valor);



  
  var formData = new FormData();
  formData.append("id_actividad", id);
  formData.append("elemento", campo);
  if (tipoDato=="json") { 
    console.log(" Json recibido");      
    formData.append("valor", valor  ); 
  } else {
    console.log("texto recibido");
    formData.append("valor", $(valor).val()  );  
  }
  
  
    
  $.ajax({
    url: '../../main_app/actualizar_elemento_actividad.php',
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");
      
    }, success: function(mensaje){
      callBack_s();
              alertify
                .alert("Sistema PFP", "Dato actualizado de forma correcta.", function(){
                console.log("ok");                
              });
             
      console.log(mensaje);      
    }, error: function(mError){
        console.log(mError);
        alertify.error('Error al intentar actualizar datos.');
    }
  });

  

}


Model.prototype.eliminarArchivo = function (  idNombre, idValor,  callBack_s   ) {  
  
    var formData = new FormData();
    formData.append("idNombre", idNombre);
    formData.append("idValor", idValor);
    formData.append("tabla", "archivos_enviados");
    
      
    $.ajax({
      url: '../../main_app/eliminar_registro.php',
      type: 'POST',
      data: formData,
      //dataType:'json',
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function(){
      console.log("En proceso");
        
      }, success: function(mensaje){            
        console.log(mensaje);      
        alertify.success('Archivo eliminado satisfactoriamente.');
        callBack_s();
      }, error: function(mError){
          console.log(mError);
          alertify.error('Error al intentar actualizar datos.');
      }
    });
  }


Model.prototype.unlockPfp = function (  idInstancia, idEstado, callBack_s     ) { 
  var formData = new FormData();
  formData.append("id_instancia", idInstancia);
  formData.append("id_estado", idEstado);
  
    
  $.ajax({
    url: '../../main_app/desbloquear_pfp.php',
    type: 'POST',
    data: formData,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");
      
    }, success: function(mensaje){            
      console.log(mensaje);      
      alertify.success('PFP Desbloqueado'   );
      callBack_s();
    }, error: function(mError){
        console.log(mError);
        alertify.error('Error al intentar actualizar datos.');
    }
  });
 }