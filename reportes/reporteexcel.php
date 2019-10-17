<?php
	require '../login/funcs/conexion.php';
  $conexion = conectarDB();
  $consulta = "SELECT * FROM actividades INNER JOIN planes ON actividades.id_instancia = planes.id_instancia INNER JOIN instancias ON actividades.id_instancia = instancias.id_instancia INNER JOIN estados ON planes.id_estado = estados.id_estado"; 
	$resultado2 = $conexion->query($consulta);
	$resultado = $conexion->query($consulta);
	
	if($resultado2->num_rows > 0 ){

	
	}
	
	
	if($resultado->num_rows > 0 ){

		date_default_timezone_set('America/Costa_Rica');

		if (PHP_SAPI == 'cli')
			die('Este archivo solo se puede ver desde un navegador web');

		/** Se agrega la libreria PHPExcel */
		require_once 'lib/PHPExcel/PHPExcel.php';

		// Se crea el objeto PHPExcel
		$objPHPExcel = new PHPExcel();

		// Se asignan las propiedades del libro
		$objPHPExcel->getProperties()->setCreator("GESPRO") //Autor
							 ->setLastModifiedBy("IDP") //Ultimo usuario que lo modificó
							 ->setTitle("Reporte Excel")
							 ->setSubject("Reporte Excel")
							 ->setDescription("Reporte de planes enviados")
							 ->setKeywords("reporte planes capacitaciones")
							 ->setCategory("Reporte excel");

		$tituloReporte = "Actividades enviadas";
		$titulosColumnas = array('Instancia', 'Modalidad', 'Nombre', 'Duración', 'Estrategia', 'Tipo de Actividad','Origen','Area','Estado','Sedes','Participantes','Inicio','Finalización','Costo');

		$objPHPExcel->setActiveSheetIndex(0)
        		    ->mergeCells('A1:N1');

		// Se agregan los titulos del reporte
		$objPHPExcel->setActiveSheetIndex(0)
					->setCellValue('A1',$tituloReporte)
        		    ->setCellValue('A3',  $titulosColumnas[0])
		            ->setCellValue('B3',  $titulosColumnas[1])
        		    ->setCellValue('C3',  $titulosColumnas[2])
					->setCellValue('D3',  $titulosColumnas[3])
            		->setCellValue('E3',  $titulosColumnas[4])
					->setCellValue('F3',  $titulosColumnas[5])
					->setCellValue('G3',  $titulosColumnas[6])
					->setCellValue('H3',  $titulosColumnas[7])
					->setCellValue('I3',  $titulosColumnas[8])
					->setCellValue('J3',  $titulosColumnas[9])
					->setCellValue('K3',  $titulosColumnas[10])
					->setCellValue('L3',  $titulosColumnas[11])
					->setCellValue('M3',  $titulosColumnas[12])
					->setCellValue('N3',  $titulosColumnas[13]);

		//Se agregan los datos de los planes
		$i = 4;
		$k = 0;
		while ($fila = $resultado->fetch_array()) {
			   $sedes2="";
			   $participantes = 0;
			   $cant_sedes = sizeof(json_decode($fila['sede']));
			   $jsonObject = json_decode($fila['sede']);
				for ($m=0; $m < $cant_sedes; $m++) { 
					$sedes2 .= $jsonObject[$m]->regional .",";
					$participantes = $participantes + $jsonObject[$m]->cantParticipantes;
			   			$objPHPExcel->setActiveSheetIndex(0)
        		    ->setCellValue('A'.$i,  utf8_encode($fila['nombre']))
		            ->setCellValue('B'.$i,  utf8_encode($fila['modalidad']))
        		    ->setCellValue('C'.$i,  utf8_encode($fila['nombre_actividad']))
					->setCellValue('D'.$i,  utf8_encode($fila['duracion']))
            		->setCellValue('E'.$i, utf8_encode($fila['estrategia']))
					->setCellValue('F'.$i, utf8_encode($fila['tipo_actividad']))
					->setCellValue('G'.$i, utf8_encode($fila['tipo']))
					->setCellValue('H'.$i, utf8_encode($fila['area']))
					->setCellValue('I'.$i, utf8_encode($fila['etiqueta_estado']))
					->setCellValue('J'.$i, utf8_encode($jsonObject[$m]->regional))
					->setCellValue('K'.$i, utf8_encode($jsonObject[$m]->cantParticipantes))
					->setCellValue('L'.$i, utf8_encode($jsonObject[$m]->inicio))
					->setCellValue('M'.$i, utf8_encode($jsonObject[$m]->fin))
					->setCellValue('N'.$i, utf8_encode($fila['costo']));
					$i++;
				}
			   $sedes2 = substr($sedes2,0,-1);
			

					$k++;
		}
		$estiloTituloReporte = array(
        	'font' => array(
	        	'name'      => 'Verdana',
    	        'bold'      => true,
        	    'italic'    => false,
                'strike'    => false,
               	'size' =>16,
	            	'color'     => array(
    	            	'rgb' => 'FFFFFF'
        	       	)
            ),
	        'fill' => array(
				'type'	=> PHPExcel_Style_Fill::FILL_SOLID,
				'color'	=> array('argb' => 'FF220835')
			),
            'borders' => array(
               	'allborders' => array(
                	'style' => PHPExcel_Style_Border::BORDER_NONE
               	)
            ),
            'alignment' =>  array(
        			'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
        			'vertical'   => PHPExcel_Style_Alignment::VERTICAL_CENTER,
        			'rotation'   => 0,
        			'wrap'          => TRUE
    		)
        );

		$estiloTituloColumnas = array(
            'font' => array(
                'name'      => 'Arial',
                'bold'      => true,
                'color'     => array(
                    'rgb' => 'FFFFFF'
                )
            ),
            'fill' 	=> array(
				'type'		=> PHPExcel_Style_Fill::FILL_GRADIENT_LINEAR,
				'rotation'   => 90,
        		'startcolor' => array(
            		'rgb' => 'c47cf2'
        		),
        		'endcolor'   => array(
            		'argb' => 'FF431a5d'
        		)
			),
            'borders' => array(
            	'top'     => array(
                    'style' => PHPExcel_Style_Border::BORDER_MEDIUM ,
                    'color' => array(
                        'rgb' => '143860'
                    )
                ),
                'bottom'     => array(
                    'style' => PHPExcel_Style_Border::BORDER_MEDIUM ,
                    'color' => array(
                        'rgb' => '143860'
                    )
                )
            ),
			'alignment' =>  array(
        			'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
        			'vertical'   => PHPExcel_Style_Alignment::VERTICAL_CENTER,
        			'wrap'          => TRUE
    		));

		$estiloInformacion = new PHPExcel_Style();
		$estiloInformacion->applyFromArray(
			array(
           		'font' => array(
               	'name'      => 'Arial',
               	'color'     => array(
                   	'rgb' => '000000'
               	)
           	),
           	'fill' 	=> array(
				'type'		=> PHPExcel_Style_Fill::FILL_SOLID,
				'color'		=> array('argb' => 'FFd9b7f4')
			),
           	'borders' => array(
               	'left'     => array(
                   	'style' => PHPExcel_Style_Border::BORDER_THIN ,
	                'color' => array(
    	            	'rgb' => '3a2a47'
                   	)
               	)
           	)
        ));

		$objPHPExcel->getActiveSheet()->getStyle('A1:N1')->applyFromArray($estiloTituloReporte);
		$objPHPExcel->getActiveSheet()->getStyle('A3:N3')->applyFromArray($estiloTituloColumnas);
		$objPHPExcel->getActiveSheet()->setSharedStyle($estiloInformacion, "A4:N".($i-1));

		for($i = 'A'; $i <= 'N'; $i++){
			$objPHPExcel->setActiveSheetIndex(0)
				->getColumnDimension($i)->setAutoSize(TRUE);
		}

		// Se asigna el nombre a la hoja
		$objPHPExcel->getActiveSheet()->setTitle('Actividades');

		// Se activa la hoja para que sea la que se muestre cuando el archivo se abre
		$objPHPExcel->setActiveSheetIndex(0);
		// Inmovilizar paneles
		//$objPHPExcel->getActiveSheet(0)->freezePane('A4');
		$objPHPExcel->getActiveSheet(0)->freezePaneByColumnAndRow(0,4);

		// Se manda el archivo al navegador web, con el nombre que se indica (Excel2007)
		header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		header('Content-Disposition: attachment;filename="Reportedeplanes.xls"');
		header('Cache-Control: max-age=0');

		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
		$objWriter->save('php://output');
		exit;

	}
	else{
		print_r('No hay resultados para mostrar');
	}
?>
