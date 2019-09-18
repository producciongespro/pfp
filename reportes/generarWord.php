<?php
header("Content-type: application/vnd.ms-word");
header("Content-Disposition: attachment;Filename=documento.doc");

echo "<html>";
echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=Windows-1252\">";
echo "<body>";
echo "<b>Mi primer documento</b><br />";
echo "Aqu&iacute; va todo el testo que querais, en formato HTML</body>";
echo "</html>";
?>
