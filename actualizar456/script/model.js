'use strict';

function Model () {

}

Model.prototype.dataset;



Model.prototype.loadJson = function (pathJson, mCallBack) {
    $.getJSON(pathJson, function (data) {
        //console.log("Json");
        //console.log(data);
        Model.prototype.dataset = data;
        mCallBack(data);
        })
}

Model.prototype.getDataset = function () {
    return Model.prototype.dataSet;
}

Model.prototype.getItemByField = function ( fieldName, idVal ) {
    var limit = Model.prototype.dataset.length,
    record;
    for (let index = 0; index < limit; index++) {
        if (Model.prototype.dataset[index][fieldName] == idVal  ) {
           record = Model.prototype.dataset[index];
        }
    }
    return record;
}

Model.prototype.getItem = function (index) {
    return Model.prototype.dataSet[index];
}

Model.prototype.conectFormAjax = function ( path, formData, dataType, mCallBack  ) {
    //console.log(formData);


    jQuery.ajax({
        url: path,
        type:'POST',
        dataType: dataType,
        data: formData,
        beforeSend:function(){
            alertify.warning('Enviando datos. Por favor espere...');
            console.log("enviando");
        }
      })
      .done(function(response){
        alertify.success('¡Tranzacción generada satisfactoriamente!');
        //console.log(response);
        mCallBack(response);

      })
      .fail(function(resp){
        console.log(resp.responseText);
        alertify.error('Problemas al enviar datos');
      })
      .always(function(){
        //console.log("completed");
    });

}

Model.prototype.conectDataAjax = function ( path, formData  ) {
    //console.log(formData);


    jQuery.ajax({
        url: path,
        type:'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend:function(){
            alertify.warning('Enviando datos. Por favor espere...');
            console.log("enviando");
        }
      })
      .done(function(response){
        alertify.success('¡Transacción generada satisfactoriamente!');
        console.log(response);        

      })
      .fail(function(resp){
        console.log(resp.responseText);
        alertify.error('Problemas al enviar datos');
      })
      .always(function(){
        console.log("complete");
    });

}

Model.prototype.setDataSessionArray = function ( array ) {
let limit = array.length / 2;
    for (let index = 0; index < limit; index++) {

        let tmpIndex = index * 2;
        sessionStorage.setItem(array[tmpIndex],  array[tmpIndex + 1] );
        //console.log(array[tmpIndex],  array[tmpIndex + 1] );
    }
}

Model.prototype.checkedToJson = function ( classChecked ) {

    classChecked = $("."+classChecked);
    var team=[];
        for (let index = 0; index < classChecked.length; index++) {
                if (classChecked[index].checked) {
                    //console.log(classChecked[index].id );
                    team.push(classChecked[index].id);
                }
        }
    return team;
}

Model.prototype.setJsonInSession = function ( nameField, dataJson ) {

    dataJson = JSON.stringify(dataJson);
    //console.log(dataJson);
    sessionStorage.setItem(nameField, dataJson );

}

Model.prototype.stringToJson = function ( stringJson ) {
    var tmpJson = JSON.parse(sessionStorage.getItem(stringJson));
    //console.log(tmpJson);
    return tmpJson;
}

Model.prototype.getFieldArrayJson = function ( stringJson, key ) {
    var tmpJson = JSON.parse(sessionStorage.getItem(stringJson));
    //console.log(tmpJson);
    return tmpJson[key];
}
