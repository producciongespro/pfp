<?

// edit this section
$dbhost = "localhost"; // usually localhost
$dbuser = "sistemap_gespro";
$dbpass = "Hola123Gespro";
$dbname = "sistemap_pfp";
$mail =  $nivel = $_GET["mail"];
$sendto = "Webmaster <$mail>";
echo "<script> console.log ('$sendto')</script>";
$sendfrom = "Sistema PFP <info@bachipruebas.com>";
$sendsubject = "Prueba envío";
$bodyofemail = "Prueba de envío de correo desde el servidor";
// don't need to edit below this section

//$backupfile = $dbname . date("Y-m-d") . '.sql';
//system("mysqldump -h $dbhost -u $dbuser -p$dbpass $dbname > $backupfile");


// Mail the file


include('Mail.php');
include('Mail/mime.php');


$message = new Mail_mime();
$text = "$bodyofemail";
$message->setTXTBody($text);
//$message->AddAttachment($backupfile);
$body = $message->get();
$extraheaders = array("From"=>"$sendfrom", "Subject"=>"$sendsubject");
$headers = $message->headers($extraheaders);
$mail = Mail::factory("mail");
$mail->send("$sendto", $headers, $body);


// Delete the file from your server
//unlink($backupfile);
?>
