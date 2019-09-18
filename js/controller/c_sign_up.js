"use strict";
const m = new Model(), v = new View;
var infoUser;
$(document).ready(function () {
    handlerEvents();
    m.loadJson("../../data/instancias.json", loadInstances );
});



function loadInstances() {    
    //console.log(m.getDataSet());    
    v.instances(m.getDataSet(), $("#gorupSelectorInstance") );
    
    
}


function handlerEvents() {
    console.log("eventos listos");

    $("#btnSignup").click(function (e) { 
        //console.log (camposCompletos());
		if ( camposCompletos( ) ) {
			console.log ("Campos completos");
			if (clavesIguales() ) {
				console.log("Claves iguales")
				console.log ("Lamado del método signup");
				m.signUp($("#txtNombre").val(), $("#txtApellido1").val(), $("#txtApellido2").val(), $("#selInstancia").val(), $("#txtEmail").val(), $("#txtPass1").val(),  $("#txtPass1").val()   );	
			} else { 
				alertify
						.alert("Sistema PFP", "Las contraseñas deben coincidir." , function(){
							console.log ("Ok");
						});
			}
		} else {
			alertify
					.alert("Sistema PFP", "Debe completar todos los campos." , function(){
						console.log ("Ok");
					});
		}
        
    });
    
        
}

function camposCompletos () {	
	console.log($("#selInstancia").val());
	
	var completos = true;
	if ( $("#txtNombre").val() == ""  || $("#txtApellido1").val() == ""  || $("#txtApellido2").val() == "" ) {
		completos = false;
	};
		if ( $("#selInstancia").val() == null  || $("#txtEmail").val() == ""  || $("#txtPass1").val() == "" ) {
		completos = false;
	};
	return completos;
}

function clavesIguales () {
	var iguales = false;
	if (  $("#txtPass1").val() == $("#txtPass2").val() )  {
		iguales = true;
	}
	return iguales;
}






