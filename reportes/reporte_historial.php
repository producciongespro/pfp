<?php

require('fpdf/fpdf.php');
require("../login/funcs\conexion.php");

class PDF extends FPDF
{
var $widths;
var $aligns;

function SetWidths($w)
{
	//Set the array of column widths
	$this->widths=$w;
}

function SetAligns($a)
{
	//Set the array of column alignments
	$this->aligns=$a;
}

function Row($data)
{
	//Calculate the height of the row
	$nb=0;
	for($i=0;$i<count($data);$i++)
		$nb=max($nb,$this->NbLines($this->widths[$i],$data[$i]));
	$h=5*$nb;
	//Issue a page break first if needed
	$this->CheckPageBreak($h);
	//Draw the cells of the row
	for($i=0;$i<count($data);$i++)
	{
		$w=$this->widths[$i];
		$a=isset($this->aligns[$i]) ? $this->aligns[$i] : 'L';
		//Save the current position
		$x=$this->GetX();
		$y=$this->GetY();
		//Draw the border

		$this->Rect($x,$y,$w,$h);

		$this->MultiCell($w,5,$data[$i],0,$a,'true');
		//Put the position to the right of the cell
		$this->SetXY($x+$w,$y);
	}
	//Go to the next line
	$this->Ln($h);
}

function CheckPageBreak($h)
{
	//If the height h would cause an overflow, add a new page immediately
	if($this->GetY()+$h>$this->PageBreakTrigger)
		$this->AddPage($this->CurOrientation);
}

function NbLines($w,$txt)
{
	//Computes the number of lines a MultiCell of width w will take
	$cw=&$this->CurrentFont['cw'];
	if($w==0)
		$w=$this->w-$this->rMargin-$this->x;
	$wmax=($w-2*$this->cMargin)*1000/$this->FontSize;
	$s=str_replace("\r",'',$txt);
	$nb=strlen($s);
	if($nb>0 and $s[$nb-1]=="\n")
		$nb--;
	$sep=-1;
	$i=0;
	$j=0;
	$l=0;
	$nl=1;
	while($i<$nb)
	{
		$c=$s[$i];
		if($c=="\n")
		{
			$i++;
			$sep=-1;
			$j=$i;
			$l=0;
			$nl++;
			continue;
		}
		if($c==' ')
			$sep=$i;
		$l+=$cw[$c];
		if($l>$wmax)
		{
			if($sep==-1)
			{
				if($i==$j)
					$i++;
			}
			else
				$i=$sep+1;
			$sep=-1;
			$j=$i;
			$l=0;
			$nl++;
		}
		else
			$i++;
	}
	return $nl;
}

function Header()
{

	$this->SetFont('Arial','',10);
	$this->Text(20,14,'Plan de Formación',0,'C', 0);
	$this->Ln(30);
}

function Footer()
{
	$this->SetY(-15);
	$this->SetFont('Arial','B',8);
	$this->Cell(100,10,'2019',0,0,'L');

}

}

	$paciente= $_GET['id'];

	$conectar = conectarDB();

	$strConsulta = "SELECT * from planes where id =  '$paciente'";

	$pacientes = $conectar->query($strConsulta);
	$cuantas = 0;
	$fila = $pacientes->fetch_array();
	for ($i=0; $i < 2; $i++) {
		$cuantas = $cuantas + $i;

	// echo "<script>console.log($cuantas)</script>";
	$pdf=new PDF('P','mm','Letter');
	// $pdf->Open();
	$pdf->AddPage();
	$pdf->SetMargins(20,20,20);
	$pdf->Ln(10);
	$pdf->Image('../img/pfp1.jpg',10,10,100);
  $pdf->SetFont('Arial','B',12);
  $pdf->Cell(0,6,'Id: '.$fila['id'],0,1);
	$pdf->Cell(0,6,'Instancia: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->Cell(0,6, $fila['instancia'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(0,6,'Nombre: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->Cell(0,6, $fila['nombre'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->MultiCell(0,6,'Objetivo: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->MultiCell(0,6, $fila['objetivo'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->MultiCell(0,6,'Necesidad: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->MultiCell(0,6, $fila['necesidad'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(0,6,'Sede: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->Cell(0,6, $fila['sede'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(0,6,'Tipo: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->Cell(0,6, $fila['tipo'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(0,6,'Area: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->Cell(0,6, $fila['area'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(0,6,'Modalidad: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->Cell(0,6, $fila['modalidad'],0,1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(0,6,'Estrategia: ',0,1);
	$pdf->SetFont('Arial','',12);
	$pdf->SetX(25);
	$pdf->Cell(0,6, $fila['estrategia'],0,1);
// $pdf->Cell(20,10,'Title',1,1,'C');
	$pdf->Ln(10);

	$pdf->SetWidths(array(65, 60, 55, 50, 20));
	$pdf->SetFont('Arial','B',10);
	$pdf->SetFillColor(85,107,47);
  $pdf->SetTextColor(255);
$pdf->Line(10, 40, 200, 40);
$pdf->Image('../img/pie_mep_idp.jpg',135,255,60);
}
$pdf->Output();
?>
