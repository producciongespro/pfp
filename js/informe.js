var usuarioTemp;
$(document).ready(function () {
    realizaProceso();
    $(document).on('click', '.btn-edit', function(){
      var usuario_id = $(this).attr("id");  
      usuarioTemp = usuario_id;
      console.log("Usuario: "+usuario_id); 
      $("#nombre").text($(this).attr("user"));
      $("#puesto").val($(this).attr("puesto"));
      $("#telefono").val($(this).attr("telefono"));
      $('#dataModal').modal('show'); 
    });
    $(document).on('click', '.btn-del', function(){
      var usuario_id = $(this).attr("id_usuario");  
      console.log("Usuario: "+usuario_id); 
      $("#elimina-a").text("¿Está seguro que desea eliminar a "+$(this).attr("user")+"?");
      usuarioTemp = usuario_id;
      $('#mi-modal').modal('show'); 
    });
    $("#modal-btn-si").click(function (e) { 
      e.preventDefault();
      eliminarUsuario(usuarioTemp,"usuarios");
      $('#mi-modal').modal('hide');
    });
    $("#btn-actualizar").click(function (e) { 
      e.preventDefault();
      editarUsuario(usuarioTemp,"usuarios");
      $('#dataModal').modal('hide');
    });
 
});

function realizaProceso(){

const data = new FormData();
 url= '../main_app/obtener_informe.php';
 fetch( url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        dibujarTabla (myJson, '#visor');
       
    })
  }  


  function dibujarTabla (array, visor) {
    console.log(array);
    // moment.locale('es'); 
       $(visor).empty();
   
       var limite = array.length, row,
       htmlTable = $(
         "<table  id='tblReportes' class='table table-striped'>" +
         "<thead>" +
         "<tr>" +
           "<th class='text-center' scope='col'>Instancia</th>" +
           "<th class='text-center' scope='col'>Modalidad</th>" +
           "<th scope='text-center' >Nombre</th>" +
           "<th scope='text-center'>Duración</th>" +
           "<th scope='text-center'>Estrategia</th>" +
           "<th scope='text-center'>Tipo de actividad</th>" +
           "<th class='text-center' scope='col'>Origen</th>" +
           "<th scope='text-center'>Área</th>" +
           "<th scope='text-center'>Estado</th>" +
           "<th scope='text-center'>Sede</th>" +
           "<th scope='text-center'>Cantidad de grupos</th>" +
           "<th scope='text-center'>Participantes</th>" +
           "<th scope='text-center'>Inicio</th>" +
           "<th scope='text-center'>Fin</th>" +
           "<th scope='text-center'>Costo</th>" +
           "</tr>" +
         "</thead>" +
         "<tfoot>" +
        " <tr>" +
        "<th scope='col'>instancia</th>" +
        "<th>modalidad</th>" +
        "<th>nombre</th>" +
        "<th class=''>duración</th>" +
        "<th class=''>estrategia</th>" +
        "<th >tipo</th>" +
        "<th >origen</th>" +
        "<th > área </th>" +
        "<th >estado</th>" +
        "<th >sede</th>" +
        "<th >grupos</th>" +
        "<th > participantes </th>" +
        "<th >inicio</th>" +
        "<th >fin</th>" +
        "<th > costo </th>" +
        " </tr>"+
        " </tfoot>"+
         "</table>"
       ), tBody = $("<tbody></tbody>");
       
            
                
                
            
               for (let index = 0; index < limite; index++) {
                 let fowNumb = index + 1;
                 
                var sedes = JSON.parse(array[index].sede);
                for (let i = 0; i < sedes.length; i++) {
                //  let ultimoAcceso =  "N/A" ;
                //  console.log("Ultimo acceso", ultimoAcceso  );
                //  if (ultimoAcceso == "Invalid date") {
                //   ultimoAcceso = "nunca";
                //  }
                 
                 row = $(
                   "<tr>" +
                   
                   "<td class='text-center'>" +
                      array[index].nombre +
                   "</td>" +
                     "<td class='text-center'>" +
                       array[index].modalidad +
                     "</td>" +
                     "<td >" +
                       array[index].nombre_actividad +
                     "</td>" +
                     "<td>" +
                       array[index].duracion +
                     "</td>" +
                     "<td>" +
                     array[index].estrategia+
                   "</td>" +
                   "<td>" +
                       array[index].tipo_actividad+
                   "</td>" +
                   "<td class='text-center'>" +
                   array[index].tipo+                      
                   "</td>" +
                   "<td class='text-center'>" +
                   array[index].area+                      
                   "</td>" +
                   "<td class='text-center'>" +
                   array[index].etiqueta_estado+                      
                   "</td>" +
                   "<td class='text-center'>" +
                   sedes[i].regional+                     
                   "</td>" +
                   "<td class='text-center'>" +
                   sedes[i].grupos+                     
                   "</td>" +
                   "<td class='text-center'>" +
                   sedes[i].cantParticipantes+                      
                   "</td>" +
                   "<td class='text-center'>" +
                   sedes[i].inicio+                 
                   "</td>" +
                   "<td class='text-center'>" +
                   sedes[i].fin+                         
                   "</td>" +
                   "<td class='text-center'>" +
                   array[index].costo+                      
                   "</td>" +
                   "</tr>"
               );
                 $(tBody).append(row);
             }
       $(htmlTable).append(tBody);
        $(visor).html(htmlTable);
    }
        cambiarClases();
       loadDataTable();
     }

    function loadDataTable() {
        var table = $('#tblReportes').DataTable({
          dom: 'Blfrtip',
          buttons: [
              {extend: 'copy',text: '<i class="far fa-copy"></i> Copiar'},
              {extend: 'excel',text: '<i class="far fa-file-excel"></i> Exportar a Excel'},
              {extend: 'pdf',text: '<i class="far fa-file-pdf"></i> Exportar como PDF'},
              {extend: 'print',text: '<i class="fas fa-print"></i> Imprimir'}
          ],
          "language": {
            "emptyTable":			"No hay datos disponibles en la tabla.",
            "info":		   			"Del _START_ al _END_ de _TOTAL_ ",
            "infoEmpty":			"Mostrando 0 registros de un total de 0.",
            "infoFiltered":			"(filtrados de un total de _MAX_ registros)",
            "infoPostFix":			"(actualizados)",
            "lengthMenu":			"Mostrar _MENU_ registros",
            "loadingRecords":		"Cargando...",
            "processing":			"Procesando...",
            "search":				"Buscar:",
            "searchPlaceholder":	"Dato para buscar",
            "zeroRecords":			"No se han encontrado coincidencias.",
            "paginate": {
                "first":			"Primera",
                "last":				"Última",
                "next":				"Siguiente",
                "previous":			"Anterior"
            },
            "aria": {
                "sortAscending":	"Ordenación ascendente",
                "sortDescending":	"Ordenación descendente"
            }
        },
        "lengthMenu":				[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]],
            "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "Todas"] ]
     
        });
       
        $('#tblReportes tfoot th').each( function () {
          var title = $(this).text();
          $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );
      } );

        // Apply the search
        table.columns().every( function () {
            var that = this;
     
            $( 'input', this.footer() ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
                
            } );
        } );
     
    }
    
        
       function cambiarClases(){
        if (sessionStorage.getItem("tipo")==6){
            $( ".lnk-ico" ).removeClass( "btn-edit btn-del" ).addClass( "btn-inactivo" );
            console.log("Usuario asesor");
        }
       }
    