"use strict";

/*
constantes de etiquetas
*/

const nameSistem = "SIPROG v1.0"; // etiqueta de títiulo para alert de alerftify



function prepareMod() {
    eGoHome();
    getUser();
    ShowVersion();
}

function getUser() {
    //Obtiene el usuario desde la session PHP
    //console.log(user);
    var usuarioActual =  sessionStorage.getItem("usuarioActual");
    usuarioActual = JSON.parse(usuarioActual);


    $("#spnTipoUsuario").text("Tipo: " +   usuarioActual.tipo  + " - Área: " +    usuarioActual.area  );
    $("#spnNombre").text(  usuarioActual.nombre  + " " +  usuarioActual.apellido1  + " " + usuarioActual.apellido2 );
}


function eGoHome() {
    $("#spnHome").click(function (e) {
        e.preventDefault();
        window.location.assign("../menu/menu.php");
    });
}


function ShowVersion() {
    $(".spnVersion").html(nameSistem);
}
