<?php
include('../conectar.php');//CONEXION A LA BD

	// NOMBRE DEL ARCHIVO Y CHARSET
	header('Content-Type:text/csv; charset=latin1');
	header('Content-Disposition: attachment; filename="ReportePfpEnviados.csv"');

	// SALIDA DEL ARCHIVO
	$salida=fopen('php://output', 'w');
	// ENCABEZADOS
	fputcsv($salida, array("id","instancia","correo","nombre","justificacion","id_lim","interna","externa","id_obj","objetivo","necesidad","duracion","sede","veces","estado","tipo","area","estrato","tipo_actividad","modalidad","estrategia","costo"));
	// QUERY PARA CREAR EL REPORTE
	$reporteCsv=$conexion->query("SELECT *  FROM planes ORDER BY id");
	while($filaR= $reporteCsv->fetch_assoc())
		fputcsv($salida, array($filaR['id'],
								$filaR['instancia'],
								$filaR['correo'],
								$filaR['nombre'],
								$filaR['justificacion']));
?>
