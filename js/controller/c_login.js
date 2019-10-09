"use strict";

const m = new Model();
$(document).ready(function () {
    //console.log("ready");

        //Manjeadores de eventos
    // Botón LOGIN

    $("#formLg").submit(function(event){
        event.preventDefault();
        //console.log("verificando");
        m.setLogin("./main_app/login.php", $("#formLg"), sending, function (respuesta) {
            loadApp(respuesta)
          },   showError  );
    });

});

function loadApp(resp) {
    let nombreInstanciaDelUsuario;       
            console.log( "Login", resp);
            // Carga la lista de instancias para prevista en caso de que se necesiten
            m.loadJson("./main_app/obtener_instancias.php", function (array) {
                console.log("Instancias", array ); 
                //Determina el nombre de instancia a la que pertence el usuario:
                console.log("id instancia", resp.id_instancia);
                
                
                for (let index = 0; index < array.length; index++) {
                    if (array[index].id_instancia == resp.id_instancia ) {
                        nombreInstanciaDelUsuario = array[index].nombre
                    }
                    
                }                

            //Guarda en la variable de sesión los datos del usuario:                       
            m.setSession(resp.id_instancia,  nombreInstanciaDelUsuario, resp.nombre, resp.apellido1, resp.apellido2, resp.correo, resp.tipo);



                
                switch (resp.tipo) {
                    case 1:
                        location='pages/mediador/menu.php';
                        //console.log("mediador");
                    break;
                    case 2:
                        location='pages/analista/menu.php';
                        //console.log("analista");
                    break;
    
                    default:
                    console.log("Tipo de usuario no reicido");
                        break;
                }

                
              }   )
            
           




        
            

}

function showError() {
    var delay = alertify.get('notifier','delay');
    alertify.set('notifier','delay', 4);
    alertify.error('El usuario o contraseña son inválidos, o el usuario aun no ha sido activado');
    alertify.set('notifier','delay', delay);

}

function sending() {
    var delay = alertify.get('notifier','delay');
    alertify.set('notifier','delay', 3);
    alertify.warning('Validando credenciales...');
    alertify.set('notifier','delay', delay);

}
